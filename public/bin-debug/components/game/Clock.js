var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Clock = (function (_super) {
    __extends(Clock, _super);
    function Clock() {
        var _this = _super.call(this) || this;
        _this.allTime = 120;
        _this.cTime = new egret.Timer(1000, 120);
        _this.cText = new BitmapText({
            text: '00:00',
            source: 'pic_djs_fnt',
            width: 150,
            textAlign: 'center',
            letterSpacing: 5,
        });
        _this.addChild(_this.cText);
        EventManager.sub("startClock", function (time) {
            _this.allTime = time;
            _this.start();
        });
        EventManager.sub("stopClock", function () {
            _this.stop();
        });
        return _this;
    }
    Object.defineProperty(Clock.prototype, "time", {
        set: function (val) {
            this.allTime = val;
        },
        enumerable: true,
        configurable: true
    });
    Clock.prototype.start = function () {
        this.cTime.repeatCount = GameData.countDown;
        // this.allTime = GameData.countDown;
        this.cText.text = this.transFormat(this.allTime);
        this.cTime.addEventListener(egret.TimerEvent.TIMER, this.subTime, this);
        this.cTime.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeOver, this);
        this.cTime.reset();
        this.cTime.start();
        console.info('clock start');
        this.visible = true;
    };
    Clock.prototype.timeOver = function () {
        this.cTime && this.cTime.stop();
        this.cTime == null;
        console.info('clock stop');
        //触发游戏结束
    };
    //双方找出后操作
    Clock.prototype.stop = function () {
        this.visible = false;
        this.timeOver();
    };
    Clock.prototype.subTime = function () {
        if (this.allTime == 0) {
            return;
        }
        this.allTime -= 1;
        this.cText.text = this.transFormat(this.allTime);
    };
    Clock.prototype.transFormat = function (time) {
        var tempM;
        var tempS;
        if ((time % 60) == 0) {
            tempM = Math.floor(time / 60).toString();
            return '0' + tempM + ':00';
        }
        else {
            tempM = Math.floor(time / 60).toString();
            tempS = (time - (parseInt(tempM) * 60)).toString();
            if (tempM.length == 1)
                tempM = '0' + tempM;
            if (tempS.length == 1)
                tempS = '0' + tempS;
            return tempM + ":" + tempS;
        }
    };
    return Clock;
}(egret.Sprite));
__reflect(Clock.prototype, "Clock");
