var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ImageLoader = (function (_super) {
    __extends(ImageLoader, _super);
    function ImageLoader(config) {
        var _this = _super.call(this) || this;
        var self = _this;
        // 记录必要参数
        self.imgMask = config['mask'] || null;
        self.W = config['width'] || 0;
        self.H = config['height'] || 0;
        if (config['maskConfig']) {
            // 存在遮罩配置属性时绘制一个遮罩
            self.imgMask = new egret.Shape();
            self.imgMask.graphics.beginFill(0xcccccc);
            self.imgMask.graphics.drawRoundRect(0, 0, config['maskConfig'][0] || 0, config['maskConfig'][1] || 0, config['maskConfig'][2] || 0);
            self.imgMask.graphics.endFill();
        }
        self.src = config['src'];
        _this.x = config['x'] || _this.x;
        _this.y = config['y'] || _this.y;
        return _this;
    }
    Object.defineProperty(ImageLoader.prototype, "src", {
        get: function () {
            return this._src;
        },
        set: function (src) {
            this._src = src;
            this.setSrc(src);
        },
        enumerable: true,
        configurable: true
    });
    ImageLoader.prototype.setSrc = function (src) {
        var self = this;
        // 不存在src属性时return
        if (!src)
            return;
        // 创建图像加载器
        var imgLoader = new egret.ImageLoader;
        imgLoader.once(egret.Event.COMPLETE, function (evt) {
            self.removeChildren();
            var loader = evt.currentTarget;
            // 加载完成，创建图片
            self.image = new egret.Bitmap(loader.data);
            // 按需缩放图片
            self.W && (self.image.scaleX = self.W / self.image.width);
            self.H && (self.image.scaleY = self.H / self.image.height);
            if (self.imgMask) {
                //如果存在遮罩属性，为图片增加遮罩
                self.addChild(self.imgMask);
                self.image.mask = self.imgMask;
            }
            self.addChild(self.image);
        }, this);
        imgLoader.load(src);
    };
    return ImageLoader;
}(egret.Sprite));
__reflect(ImageLoader.prototype, "ImageLoader");
