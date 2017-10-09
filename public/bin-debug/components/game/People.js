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
    function People(src) {
        var _this = _super.call(this) || this;
        var source;
        if (src == '0') {
            source = 'pic_ql_png';
        }
        else {
            source = 'pic_dsg_' + src + '_png';
        }
        _this.pBg = new Bitmap({
            source: source,
            x: 0,
            y: 0,
        });
        _this.addChild(_this.pBg);
        return _this;
    }
    return People;
}(egret.Sprite));
__reflect(People.prototype, "People");
