var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ScoreBar = (function (_super) {
    __extends(ScoreBar, _super);
    function ScoreBar(type) {
        var _this = _super.call(this) || this;
        // type 0 : 縂得分 ； 1 ： 縂排名
        var src;
        type == 0 && (src = "pic_zdf_png");
        type == 1 && (src = "pic_zpm_png");
        _this.sType = new Bitmap({
            source: src,
        });
        _this.addChild(_this.sType);
        _this.sBg = new Bitmap({
            source: 'public_bgk_png',
            width: 115,
            height: 35,
        });
        _this.sBg.x = _this.sType.width;
        _this.addChild(_this.sBg);
        _this.sCont = new BitmapText({
            text: '',
            source: 'pic_sz_fnt',
            // size: 21,
            width: 115,
            height: 34,
            textAlign: 'center',
            verticalAlign: 'middle',
        });
        _this.sCont.x = _this.sBg.x + 5;
        _this.sCont.y = _this.sBg.y;
        _this.addChild(_this.sCont);
        return _this;
    }
    Object.defineProperty(ScoreBar.prototype, "score", {
        get: function () {
            return this.sCont.text;
        },
        set: function (val) {
            this.sCont.text = val;
        },
        enumerable: true,
        configurable: true
    });
    return ScoreBar;
}(egret.DisplayObjectContainer));
__reflect(ScoreBar.prototype, "ScoreBar");
