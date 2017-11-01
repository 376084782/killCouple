var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var OfflineModal = (function (_super) {
    __extends(OfflineModal, _super);
    function OfflineModal() {
        var _this = _super.call(this) || this;
        _this.width = 408;
        _this.height = 262;
        _this.x = (UIConfig.width - 408) / 2;
        _this.y = 80;
        var bg = new Bitmap('modal-bg_png');
        _this.addChild(bg);
        var title = new Bitmap('modal-title_png');
        _this.addChild(title);
        title.x = 166;
        title.y = 10;
        _this.spText = new TextField({
            size: 22,
            y: 100,
            x: 0,
            width: 408,
            text: '您已断开连接，即将退出游戏...',
            color: 0x8a542e,
            bold: true,
            textAlign: 'center'
        });
        _this.addChild(_this.spText);
        var btn = new Bitmap('btn-sure_png');
        _this.addChild(btn);
        btn.x = 100;
        btn.y = 170;
        btn.touchEnabled = true;
        btn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            EventManager.pub("closeGame");
            EventManager.pub('modal/onCloseOffline');
        }, _this);
        return _this;
    }
    return OfflineModal;
}(egret.DisplayObjectContainer));
__reflect(OfflineModal.prototype, "OfflineModal");
