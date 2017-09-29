
/**
 * websocket连接模块
 */

// 1、获取自己的排名、分数       2、发送准备数据、误操作数据、找到情侣数据、游戏结束、游戏分数、返回首页   2、接收开始游戏、对家找到情侣、游戏进入下一关、进入结束页面、游戏新排名、分数

	var Connection = {
		bConnectSuccess: false,
		//初始化socket
		initWS : function(){
			var self = this;
			if (window.WebSocket) {
				ws = io("ws://192.168.141.101");
				ws.on("connect",function(e){
					self.bConnectSuccess = true;
					self.start();
					console.log("连接成功")
				});
				ws.on('10023',function(oData){
					if(oData.code == 0){
						console.log('游戏开始~')
						UImanager.to('game');
					}
				});
				ws.on('10033',function(oData){
					console.log('游戏时间：',oData.time,'地图数据:',oData.mapInfo,'情侣位置：',oData.answer);
					console.log('数据类型：',typeof(oData.mapInfo))
					EventManager.pub("startClock",oData.time);//开启倒计时
					EventManager.pub('produceMap',oData.mapInfo);//生成地图
					EventManager.pub('isLover',oData.answer);//记录情侣位置
				})
				ws.on('10063',function(oData){
					console.log('返回进入下一关');
					//执行分开动画 倒计时 进入下一关
					// EventManager.pub("startClock",oData.time);//重置倒计时
					// EventManager.pub('produceMap',oData.mapInfo);//生成地图
					// EventManager.pub('isLover',oData.answer);//记录情侣位置
				})
				EventManager.sub('sendMessage',(oData)=>{
					switch(oData.state){
						case 'ready': ws.on('10011',function(data){				
														if(data.code == 0)
															console.log("准备请求成功")
														else
															console.log("准备请求失败")})
													ws.emit(10010,{id : GameData.nId,roomid : GameData.roomId})
									 				break;
						case 'find': ws.on('10053',function(oData){
														if(oData.code == 100){
															//扣時間 校準時間 根據ID顯示提示
															console.log('答錯，返回100')
														}else if(oData.code == 0){
															//根据ID显示提示 显示红色圆圈
															console.log('答對，返回0')
															EventManager.pub('openRedCir')
														}
												})
												ws.emit(10050,{id :  GameData.nId,answer: oData.answer});
												break;
					}
				})
			} else {
					alert("抱歉，您的设备暂不支持该游戏！")
			}
		},
		sendMessage : function(message){
			//客户端主动发送数据
			ws.readyState === 1 && ws.send(message);
		},
		start : function(){
			//从tiki获取排名、分数，这边假设获取到 id为001、002，roomid都为1
			//发送房间、id信息给自己的后台
			ws.on('10001',function(data){
				if(data.code == 0)
					console.log("发送房间成功")
				else
				 	console.log("发送房间失败")
			})
			id = Math.random()* 10;
			GameData.nId = id;
			GameData.roomId = 1;
			ws.emit(10000,{id : GameData.nId,roomid : GameData.roomId});
			
		},
		onMsg : function(){
			//接收到服务器信息、解析、分发
		}
	}
	Connection.initWS();