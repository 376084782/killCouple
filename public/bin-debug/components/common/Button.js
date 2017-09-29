var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Button = (function (_super) {
    __extends(Button, _super);
    function Button(bgType, staType) {
        var _this = _super.call(this) || this;
        var bgSrc, typeSrc;
        // bgType 0 : 紅色； 1 ： 灰色 ； typeSrc 0 : 準備 ； 1  ： 等待對方； 2 ：回到首頁
        bgType == 0 && (bgSrc = 'btn_public_n_png');
        bgType == 1 && (bgSrc = 'btn_public_p_png');
        staType == 0 && (typeSrc = 'btn_pic_djzb_png');
        staType == 1 && (typeSrc = 'btn_pic_dadf_png');
        staType == 2 && (typeSrc = 'btn_pic_hdsy_png');
        _this.btnBg = new Bitmap({
            source: bgSrc,
        });
        _this.addChild(_this.btnBg);
        _this.btnType = new Bitmap({
            source: typeSrc,
        });
        _this.btnType.x = (_this.btnBg.width - _this.btnType.width) / 2;
        _this.btnType.y = (_this.btnBg.height - _this.btnType.height) / 2 - 6;
        _this.addChild(_this.btnType);
        return _this;
    }
    Object.defineProperty(Button.prototype, "Bg", {
        get: function () {
            return this.btnBg.src;
        },
        set: function (val) {
            this.btnBg.src = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Button.prototype, "Type", {
        get: function () {
            return this.btnType.src;
        },
        set: function (val) {
            this.btnType.src = val;
        },
        enumerable: true,
        configurable: true
    });
    return Button;
}(egret.Sprite));
__reflect(Button.prototype, "Button");
