var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Modal = (function (_super) {
    __extends(Modal, _super);
    function Modal(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        _this.bgMask = new Mask();
        _this.addChild(_this.bgMask);
        _this.bgMask.x = -(UImanager.container.width - _this.width) / 2;
        _this.bgMask.y = -(UImanager.container.height - _this.height) / 2;
        _this.modalBg = new egret.Shape();
        _this.modalBg.graphics.beginFill(0xfff5a5, 1);
        _this.modalBg.graphics.drawRect(0, 0, width, height);
        _this.modalBg.graphics.endFill();
        _this.addChild(_this.modalBg);
        return _this;
        // this.cirBg = new Bitmap({
        //     source: 'pic_djs_bg_png',       
        // }) 
        // this.cirBg.x = (width - this.cirBg.width)/2;
        // this.cirBg.y = (height - this.cirBg.height)/2;
        // this.addChild(this.cirBg);
    }
    return Modal;
}(egret.DisplayObjectContainer));
__reflect(Modal.prototype, "Modal");
;
