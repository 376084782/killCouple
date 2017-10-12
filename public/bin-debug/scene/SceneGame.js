var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SceneGame = (function (_super) {
    __extends(SceneGame, _super);
    function SceneGame() {
        var _this = _super.call(this) || this;
        _this.bg = new egret.Bitmap(RES.getRes('public_bg2_png'));
        _this.peoples = [];
        _this.addChild(_this.bg);
        _this.findTip = new FindTip();
        _this.findTip.x = 20;
        _this.findTip.y = 5;
        _this.addChild(_this.findTip);
        _this.gClock = new Clock();
        _this.gClock.x = (UIConfig.stageW - _this.gClock.width) / 2;
        _this.gClock.y = 15;
        _this.addChild(_this.gClock);
        _this.timeTip = new TimeTip();
        _this.timeTip.x = 440;
        _this.timeTip.y = 13;
        _this.addChild(_this.timeTip);
        _this.killTip = new KillTip();
        _this.killTip.x = (UIConfig.stageW - _this.killTip.width - 10);
        _this.killTip.y = 10;
        _this.addChild(_this.killTip);
        _this.touchLayer = new egret.Shape();
        _this.touchLayer.graphics.beginFill(0x000000, 0);
        _this.touchLayer.graphics.drawRect(0, 0, 710, 362);
        _this.touchLayer.graphics.endFill();
        _this.touchLayer.x = 0;
        _this.touchLayer.y = 64;
        _this.addChild(_this.touchLayer);
        _this.touchLayer.touchEnabled = true;
        _this.touchLayer.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            EventManager.pub('sendMessage', { state: 'find', answer: -1 });
            // console.log("點錯")
        }, _this);
        _this.folkMap = new egret.Sprite();
        _this.folkMap.width = 710;
        _this.folkMap.height = 362;
        _this.folkMap.x = 0;
        _this.folkMap.y = 64;
        _this.addChild(_this.folkMap);
        _this.pCir = new Bitmap({
            source: 'pic_sdk_png',
        });
        EventManager.sub('currentOff', function (level) {
            _this.killTip.level = level;
        });
        EventManager.sub('produceMap', function (mapInfo) {
            //初始化地图
            _this.resetAll();
            for (var i = 0; i < mapInfo.length; i++) {
                var tempXY = mapInfo[i].split(',');
                _this.peoples[i] = new People(tempXY[2]);
                _this.peoples[i].x = parseInt(tempXY[0]);
                _this.peoples[i].y = parseInt(tempXY[1]);
                if (parseInt(tempXY[3]) == 1) {
                    _this.peoples[i].skewY = 180;
                }
                _this.peoples[i].scaleX = .5;
                _this.peoples[i].scaleY = .5;
                _this.folkMap.addChild(_this.peoples[i]);
            }
        });
        EventManager.sub('isLover', function (answer) {
            GameData.loverID = answer;
            _this.peoples[answer].touchEnabled = true;
            _this.pCir.x = -(_this.pCir.width - _this.peoples[answer].width) / 2 + _this.peoples[answer].x - (_this.peoples[answer].width) / 2;
            _this.pCir.y = (_this.peoples[answer].height - _this.pCir.height) / 2 + _this.peoples[answer].y;
            _this.pCir.visible = false;
            _this.addChild(_this.pCir);
            _this.peoples[answer].addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                // this.pCir.visible = true;
                // console.log("點對")
                // console.log("2342342")
                EventManager.pub('sendMessage', { state: 'find', answer: GameData.loverID });
            }, _this);
        });
        EventManager.sub('openRedCir', function () {
            _this.pCir.visible = true;
        });
        EventManager.sub('findFalse', function (data) {
            //更新提示
            if (data.answerId == GameData.nId) {
                //是自己答错
                _this.timeTip.cont = GameData.tCopy[2];
            }
            else {
                //对方答错
                _this.timeTip.cont = GameData.tCopy[1];
            }
            //校准时间
            _this.gClock.time = data.timeLeft;
        });
        EventManager.sub('findTrue', function (data) {
            if (data.answerId == GameData.nId) {
                //是自己答对
                _this.findTip.cont = GameData.fCopy[1];
                EventManager.pub('openRedCir');
                //关闭触控
                _this.touchLayer.touchEnabled = false;
                _this.peoples[GameData.loverID].touchEnabled = false;
            }
            else {
                //对方答对    
                //判断自己是否已经答对
                if (GameData.isAnswer) {
                    _this.findTip.cont = GameData.fCopy[3];
                }
                else if (!GameData.isAnswer) {
                    _this.findTip.cont = GameData.fCopy[2];
                    GameData.isAnswer = true;
                }
            }
        });
        EventManager.sub('stopTime', function () {
            _this.gClock.cTime.stop();
        });
        EventManager.sub('storeLevel', function (level) {
            GameData.gameLevel = level;
        });
        return _this;
    }
    SceneGame.prototype.resetAll = function () {
        this.peoples = [];
        this.folkMap && this.folkMap.removeChildren();
        this.touchLayer.touchEnabled = true;
        this.findTip.cont = GameData.fCopy[0];
        this.timeTip.cont = GameData.tCopy[0];
        GameData.isAnswer = false;
    };
    return SceneGame;
}(egret.DisplayObjectContainer));
__reflect(SceneGame.prototype, "SceneGame");
