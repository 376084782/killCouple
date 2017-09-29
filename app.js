var app = require("http").createServer(handler);
var io = require("socket.io")(app);
var fs = require("fs");
var service = require("./service/function");

var PROTOCOL = require("./service/protocol");
app.listen(80);

function handler(req, res) {
  fs.readFile(__dirname + "/public/index.html", function(err, data) {
    if (err) {
      res.writeHead(500);
      return res.end("Error loading index.html");
    }

    res.writeHead(200);
    res.end(data);
  });
}

var roomList = {};
var userList = {};
io.on("connection", function(socket) {
  var userInfo = {};
  var roomInfo = {};
  var id = 0;
  socket.on(PROTOCOL.REQJOINROOM, data => {
    userInfo = {
      name: data.nickname || "",
      id: data.id || 0,
      roomid: data.roomid
    };
    id = data["id"] || 0;
    // 请求加入房间
    if (!roomList[data.roomid]) {
      // 不存在房间，初始化新房间
      roomList[data.roomid] = service.createRoom(data.roomid);
    }
    roomList[data.roomid].setOnline(id);
    roomInfo = roomList[data.roomid];
    socket.join(data.roomid, () => {
      console.log("进入房间");
      socket.emit(PROTOCOL.RESPJOINROOM, {
        code: 0
      });
    });
  });

  // 请求准备
  socket.on(PROTOCOL.REQREADY, data => {
    // 记录已准备人数
    roomInfo.setReady(id);
    // 响应准备动作
    socket.emit(PROTOCOL.RESPREADY, {
      code: 0
    });
    if (roomInfo.status == 2) {
      // 传入计时器结束时方法
      roomInfo.gameData.finishCallback = sendFinish;
      // 双方准备,通知开始游戏
      broadcast(PROTOCOL.RESPSTARTGAME, { code: 0 });
      broadcast(PROTOCOL.RESPGAMEINFO, {
        time: roomInfo.gameData.timeLeft,
        mapInfo: roomInfo.gameData.mapInfo,
        answer: roomInfo.gameData.answer
      });
    }
  });

  // 提交答案
  socket.on(PROTOCOL.REQFIND, data => {
    let type = roomInfo.gameData.sendAnswer(id, data.answer);
    if (type == -1) {
      // 答错扣时间
      broadcast(PROTOCOL.RESPFIND, {
        code: 100,
        message: "答错，扣时间",
        data: {
          answerId:roomInfo.gameData.lastAnswerId,
          timeReduced: roomInfo.gameData.missReduce,
          timeLeft: roomInfo.gameData.timeLeft
        }
      });
    } else {
      broadcast(PROTOCOL.RESPFIND, {
        code: 0,
        answer: roomInfo.gameData.answer,
        answerId:roomInfo.gameData.lastAnswerId
      });
      if (type == 1) {
        // 广播进入下一关
        broadcast(PROTOCOL.RESPTONEXT, {
          code: 0,
          data: {
            timeLeft: roomInfo.gameData.timeLeft,
            level:userInfo.gameData.level
          }
        });
      }
    }
  });

  // 请求进入下一关
  socket.on(PROTOCOL.REQNEXT, data => {
    var flag = roomInfo.toNext(id);
    if (flag != -1) {
      socket.emit(PROTOCOL.RESPNEXT, {
        code: 0,
        message: "操作成功"
      });
      if (flag == 1) {
        // 进入下一关
        broadcast(PROTOCOL.RESPGAMEINFO, {
          time: roomInfo.gameData.timeLeft,
          mapInfo: roomInfo.gameData.mapInfo,
          answer: roomInfo.gameData.answer
        });
      }
    } else {
      // 已经准备过
      socket.emit(PROTOCOL.RESPNEXT, {
        code: -1,
        message: "已经准备进入下一关"
      });
    }
  });

  // 请求时间校准
  socket.on(PROTOCOL.REQTIME, data => {
    if (roomInfo.status == 2) {
      // 在游戏中
      socket.emit(PROTOCOL.RESPTIME, {
        code: 0,
        timeLeft: roomInfo.gameData.timeLeft
      });
    } else {
      socket.emit(PROTOCOL.RESPTIME, {
        code: -1,
        message: "没有在游戏中"
      });
    }
  });

  function sendFinish() {
    broadcast(PROTOCOL.RESPGAMEFINISHED, {
      code: 0,
      level: roomInfo.gameData.level,
      reduced: roomInfo.gameData.timeReduced
    });
  }

  function broadcast(protocol, data) {
    socket.emit(protocol, data);
    socket.to(roomInfo.id).emit(protocol, data);
  }
});