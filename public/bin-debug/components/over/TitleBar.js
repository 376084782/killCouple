var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TitleBar = (function (_super) {
    __extends(TitleBar, _super);
    function TitleBar() {
        var _this = _super.call(this) || this;
        _this.sBg = new Bitmap({
            source: 'pic_banner_png',
        });
        _this.addChild(_this.sBg);
        _this.sCont = new TextField({
            fontFamily: 'YouYuan',
            text: '你和XX搭档在120秒共计干掉了XX对情侣',
            color: 0xffffff,
            x: 50,
            y: 10,
            size: 28,
            width: 560,
            height: 50,
            textAlign: 'center',
            verticalAlign: 'middle',
        });
        _this.addChild(_this.sCont);
        return _this;
    }
    Object.defineProperty(TitleBar.prototype, "score", {
        get: function () {
            return this.sCont.text;
        },
        set: function (val) {
            this.sCont.text = val;
        },
        enumerable: true,
        configurable: true
    });
    return TitleBar;
}(egret.DisplayObjectContainer));
__reflect(TitleBar.prototype, "TitleBar");
