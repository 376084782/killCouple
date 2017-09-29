var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 游戏結束界面
 *
 */
var SceneOver = (function (_super) {
    __extends(SceneOver, _super);
    function SceneOver() {
        var _this = _super.call(this) || this;
        _this.bg = new egret.Bitmap(RES.getRes('public_bg_png'));
        _this.addChild(_this.bg);
        _this.oScore = new ScoreBar(0);
        _this.oScore.x = 60;
        _this.oScore.y = 6;
        _this.addChild(_this.oScore);
        //測試
        _this.oScore.score = '123456';
        _this.oRank = new ScoreBar(1);
        _this.oRank.x = 390;
        _this.oRank.y = 6;
        _this.addChild(_this.oRank);
        _this.oTitle = new TitleBar();
        _this.oTitle.x = (UIConfig.stageW - _this.oTitle.width) / 2;
        _this.oTitle.y = 110;
        _this.addChild(_this.oTitle);
        _this.diffScore = new RankBar();
        _this.diffScore.x = 110;
        _this.diffScore.y = 250;
        _this.addChild(_this.diffScore);
        _this.diffRank = new RankBar();
        _this.diffRank.x = 370;
        _this.diffRank.y = 250;
        _this.addChild(_this.diffRank);
        _this.hBtn = new Button(0, 2);
        _this.hBtn.y = 342;
        _this.hBtn.x = (UIConfig.stageW - _this.hBtn.width) / 2;
        _this.addChild(_this.hBtn);
        _this.hBtn.touchEnabled = true;
        _this.hBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.hBtn.Type == "btn_pic_hdsy_png")
                EventManager.pub(""); //回到首頁
        }, _this);
        return _this;
    }
    return SceneOver;
}(egret.DisplayObjectContainer));
__reflect(SceneOver.prototype, "SceneOver");