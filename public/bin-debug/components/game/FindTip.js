var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var FindTip = (function (_super) {
    __extends(FindTip, _super);
    function FindTip() {
        var _this = _super.call(this) || this;
        _this.fCopy = ["目前你们都没有找到情侣哦，抓紧时间找到他们并拆散这对情侣吧", "已锁定情侣，帮助对方也找到这对狗男女，即可干掉这对情侣！", "对方已锁定情侣，多听一下对方的描述，会帮助你更快的找到这对情侣哦"];
        _this.fBg = new Bitmap({
            source: 'public_bgk_png',
            width: 230,
            height: 53,
        });
        // this.fBg.y = 5;
        // this.fBg.x = 20;
        _this.addChild(_this.fBg);
        _this.fCont = new TextField({
            fontFamily: 'YouYuan',
            text: _this.fCopy[0],
            color: 0xffffff,
            size: 14,
            width: 220,
            height: 50,
            textAlign: 'center',
            verticalAlign: 'middle',
            multiline: true,
            lineSpacing: 4,
        });
        // this.fCont.x= 20;
        // this.fCont.y = 5;
        _this.addChild(_this.fCont);
        return _this;
    }
    Object.defineProperty(FindTip.prototype, "cont", {
        get: function () {
            return this.fCont.text;
        },
        set: function (val) {
            this.fCont.text = val;
        },
        enumerable: true,
        configurable: true
    });
    return FindTip;
}(egret.DisplayObjectContainer));
__reflect(FindTip.prototype, "FindTip");
