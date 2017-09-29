var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TimeTip = (function (_super) {
    __extends(TimeTip, _super);
    function TimeTip() {
        var _this = _super.call(this) || this;
        _this.tCopy = ["点错会减少5秒哦", "对友点错，减少5秒！", "你点错了，减少5秒！"];
        _this.tBg = new Bitmap({
            source: 'public_bgk_png',
            width: 126,
            height: 37,
        });
        // this.tBg.y = 5;
        // this.tBg.x = 20;
        _this.addChild(_this.tBg);
        _this.tCont = new TextField({
            fontFamily: 'YouYuan',
            text: _this.tCopy[0],
            color: 0xffffff,
            size: 14,
            width: 116,
            height: 30,
            textAlign: 'center',
            verticalAlign: 'middle',
            lineSpacing: 3,
        });
        // this.tCont.x= 20;
        // this.tCont.y = 5;
        _this.addChild(_this.tCont);
        return _this;
    }
    Object.defineProperty(TimeTip.prototype, "cont", {
        get: function () {
            return this.tCont.text;
        },
        set: function (val) {
            this.tCont.text = val;
        },
        enumerable: true,
        configurable: true
    });
    return TimeTip;
}(egret.DisplayObjectContainer));
__reflect(TimeTip.prototype, "TimeTip");
