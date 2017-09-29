var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var KillTip = (function (_super) {
    __extends(KillTip, _super);
    function KillTip() {
        var _this = _super.call(this) || this;
        _this.levTip = new TextField({
            text: 'Level 1',
            color: 'black',
            size: 14,
            fontFamily: 'YOUYUAN',
            textAlign: 'right',
            width: 136,
            bold: true,
        });
        _this.addChild(_this.levTip);
        _this.killTip = new TextField({
            text: '已干掉情侣:999',
            color: 'black',
            size: 16,
            fontFamily: 'YOUYUAN',
            textAlign: 'right',
            y: 20,
            width: 136,
            bold: true,
        });
        _this.addChild(_this.killTip);
        return _this;
    }
    return KillTip;
}(egret.Sprite));
__reflect(KillTip.prototype, "KillTip");
