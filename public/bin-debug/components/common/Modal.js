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
        _this.modalBg = new Bitmap({
            source: 'pub_frame_bg_png',
            width: width,
            height: height,
        });
        _this.addChild(_this.modalBg);
        _this.modalCloseBtn = new Bitmap({
            source: 'pub_close_png',
            x: width - 30,
            y: 5,
        });
        _this.modalCloseBtn.touchEnabled = true;
        _this.addChild(_this.modalCloseBtn);
        _this.modalCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('关闭model');
            EventManager.pub('modal/onModalClose');
        }, _this);
        return _this;
    }
    return Modal;
}(egret.DisplayObjectContainer));
__reflect(Modal.prototype, "Modal");
;
