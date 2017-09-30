const missReduce = 10;
const gameTime = 120;

module.exports = {
  createRoom
};
function createRoom(id) {
  let room = {
    status: 0, //0连接，1可以开始游戏，2游戏中
    id,
    onlineList: [], //存用户id
    readyList: [],
    gameData: createGameData(),
    setReady(id) {
      if (this.readyList.indexOf(id) == -1) {
        this.readyList.push(id);
        if (this.readyList.length == 2) {
          if (this.status < 2) {
            this.status = 2;
            this.gameData.start();
            this.readyList = [];
          }
        }
        return true;
      } else {
        return false;
      }
    },
    toNext(id) {
      if (this.readyList.indexOf(id) == -1) {
        this.readyList.push(id);
        if (this.readyList.length == 2) {
          // 下一关开始游戏
          this.status = 2;
          this.gameData.randomMap();
          this.readyList = [];
          return 1;
        }
        // 等待另一个玩家
        return 0;
      } else {
        // 错误
        return -1;
      }
    },
    setOnline(id) {
      if (this.onlineList.indexOf(id) == -1) {
        this.onlineList.push(id);
        return true;
      } else {
        return false;
      }
    },
    setFinded(id, answer) {
      if (this.gameData.findedList.indexOf(id) == -1) {
        return this.gameData.sendAnswer(id, answer);
      } else {
        return false;
      }
    },
    findUserId(id) {
      for (let i = 0; i < this.onlineList.length; i++) {
        if (this.onlineList[i] == id) {
          return index;
        }
      }
    }
  };
  return room;
}
function createGameData() {
  let gameInfo = {
    mapInfo: {},
    answer: null,
    level: 0,
    startTime: 0,
    timeReduced: 0,
    timeTotal: 120,
    findedList: [],
    clock: null,
    timeLeft: 0,
    stopping: false, //计时器开关控制器
    missReduce,
    lastAnswerId: 0,
    finishCallback() {},
    sendAnswer(id, answer) {
      this.lastAnswerId = id;
      // return -1错误 0一个正确 1两个正确，下一关
      if (this.answer == answer) {
        // 找对了
        this.findedList.push(id);
        if (this.findedList.length == 2) {
          // 关闭时钟，等待进入下一关
          this.stopping = true;
          return 1;
        }
        return 0;
      } else {
        this.timeReduced += missReduce;
        this.timeLeft -= missReduce;
        return -1;
      }
    },
    start() {
      this.level = 0;
      this.randomMap();
      this.startTime = new Date().getSeconds();
      this.timeReduced = 0;
      this.timeTotal = gameTime;
      this.timeLeft = gameTime;
      this.startClock();
    },
    startClock() {
      this.clock = setInterval(() => {
        if (!this.stopping) {
          this.timeLeft--;
          if (this.timeLeft <= 0) {
            this.clearClock();
            this.finishCallback();
          }
        }
      }, 1000);
    },
    clearClock() {
      clearInterval(this.clock);
      this.clock = null;
    },
    finishGame() {
      this.finishCallback();
    },
    randomMap() {
      this.level++;
      this.mapInfo = getData(this.level);
      this.answer = Math.floor(this.mapInfo.length * Math.random());
      this.stopping = false;
      this.findedList = [];
    }
  };
  return gameInfo;
}

function getBase(number, base) {
  return Math.floor(number / base) * base;
}
let width = 710 - 20;
let height = 362 - 60;

let base = 70;
let step = 4;
let list = (function() {
  var w = Math.ceil(width / step);
  var h = Math.ceil(height / step / 2);
  var randomList = [];
  for (let ix = 0; ix < w; ix += 1) {
    for (let iy = 0; iy < h; iy += 1) {
      var piece = `${ix * step},${step * 2 * iy}`;
      randomList.push(piece);
    }
  }
  return randomList;
})();

function getData(level) {
  var pixel = base - step * level;
  var data = [];
  var from = list.concat([]);
  var blankL = Math.floor(pixel / step);
  var num = 4 * width * height / pixel / pixel;
  for (var i = 0; i < num; i++) {
    var index = getBase(from.length * Math.random(), blankL);
    data.push(from[index]);
    from = from.slice(0, index - 1).concat(from.slice(index));
  }
  return sortData(data, blankL);
}

function sortData(data, piece) {
  function sortFuc(a, b) {
    var n1 = a.split(",")[1];
    var n2 = b.split(",")[1];
    if (n1 - n2 > piece) {
      return 1;
    } else if (n1 - n2 < piece) {
      return -1;
    } else {
      var m1 = parseInt(a);
      var m2 = parseInt(b);
      return m1 - m2;
    }
  }
  return data.sort(sortFuc);
}
