var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TextField = (function (_super) {
    __extends(TextField, _super);
    //初始化
    function TextField(config) {
        var _this = _super.call(this) || this;
        var self = _this;
        //属性赋值
        if (typeof config === 'string') {
            self.text = config;
        }
        else if (typeof config === 'object') {
            self.fontFamily = config.fontFamily || 'PingFang SC,Microsoft YaHei';
            config.text != undefined && (self.text = config.text);
            config.color != undefined && (self.textColor = config.color);
            config.size != undefined && (self.size = config.size);
            config.bold != undefined && (self.bold = config.bold);
            config.width != undefined && (self.width = config.width);
            config.height != undefined && (self.height = config.height);
            config.x != undefined && (self.x = config.x);
            config.y != undefined && (self.y = config.y);
            config.rotation && (self.rotation = config.rotation);
            config.anchorCenter != undefined && (self.anchorOffsetX = self.width / 2);
            config.anchorCenter != undefined && (self.anchorOffsetY = self.height / 2);
            config.anchorOffsetX != undefined && (self.anchorOffsetX = config.anchorOffsetX);
            config.anchorOffsetY != undefined && (self.anchorOffsetY = config.anchorOffsetY);
            config.textAlign != undefined && (self.textAlign = config.textAlign);
            config.verticalAlign != undefined && (self.verticalAlign = config.verticalAlign);
            config.lineSpacing != undefined && (self.lineSpacing = config.lineSpacing);
            config.multiline != undefined && (self.multiline = config.multiline);
        }
        return _this;
    }
    Object.defineProperty(TextField.prototype, "ID", {
        /*******************属性******************/
        /*******************方法******************/
        // public set text(val){
        //   this.text = val;
        // }
        set: function (val) {
            this.text = "ID:" + val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TextField.prototype, "IP", {
        set: function (val) {
            this.text = "IP:" + val;
        },
        enumerable: true,
        configurable: true
    });
    return TextField;
}(egret.TextField));
__reflect(TextField.prototype, "TextField");
