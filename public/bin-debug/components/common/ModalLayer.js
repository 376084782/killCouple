var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ModalLayer = (function (_super) {
    __extends(ModalLayer, _super);
    function ModalLayer(width, height) {
        var _this = _super.call(this) || this;
        // this.width = width;
        // this.height = height;
        // 绘制中心弹框
        _this.modal = new Modal(width, height);
        _this.addChild(_this.modal);
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, function () {
            //   let point = this.parent.globalToLocal(0, 0);
            //   this.x = point.x;
            //   this.y = point.y;
            egret.Tween.get(_this).set({ alpha: .3 }).to({ alpha: 1 }, 200);
        }, _this);
        return _this;
    }
    return ModalLayer;
}(egret.DisplayObjectContainer));
__reflect(ModalLayer.prototype, "ModalLayer");
