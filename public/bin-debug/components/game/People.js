var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var People = (function (_super) {
    __extends(People, _super);
    function People() {
        var _this = _super.call(this) || this;
        _this.width = 70;
        _this.height = 160;
        _this.pBg = new Bitmap({
            source: 'pic_dsg_1_png',
            width: 70,
            height: 160,
            x: 0,
            y: 0,
        });
        _this.addChild(_this.pBg);
        return _this;
    }
    return People;
}(egret.Sprite));
__reflect(People.prototype, "People");
