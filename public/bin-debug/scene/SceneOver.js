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
        _this.oScore.visible = false;
        _this.oRank = new ScoreBar(1);
        _this.oRank.x = 390;
        _this.oRank.y = 6;
        _this.addChild(_this.oRank);
        _this.oRank.visible = false;
        _this.oTitle = new TitleBar();
        _this.oTitle.x = (UIConfig.stageW - _this.oTitle.width) / 2;
        _this.oTitle.y = 50;
        _this.addChild(_this.oTitle);
        _this.diffScore = new RankBar();
        _this.diffScore.x = 110;
        _this.diffScore.y = 265;
        _this.addChild(_this.diffScore);
        _this.diffRank = new RankBar();
        _this.diffRank.x = 370;
        _this.diffRank.y = 265;
        _this.addChild(_this.diffRank);
        _this.hBtn = new Button(0, 2);
        _this.hBtn.y = 335;
        _this.hBtn.x = (UIConfig.stageW - _this.hBtn.width) / 2;
        _this.addChild(_this.hBtn);
        _this.hBtn.touchEnabled = true;
        _this.hBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.hBtn.Type == "btn_pic_hdsy_png")
                UImanager.to('hall'); //回到首頁
        }, _this);
        EventManager.sub('showLevel', function () {
            // this.oTitle.score = `你和${GameData.teamMateName}搭档在120秒共计干掉了${GameData.gameLevel}对情侣`;
            _this.oTitle.score = "\u4F60\u548C\u642D\u6863\u5728120\u79D2\u5171\u8BA1\u5E72\u6389\u4E86" + GameData.gameLevel + "\u5BF9\u60C5\u4FA3";
        });
        //更新排名
        EventManager.sub('updataScore', function (oData) {
            if (oData.score != null && oData.rank != null) {
                _this.oScore.visible = true;
                _this.oRank.visible = true;
                _this.oScore.score = oData.score;
                _this.oRank.score = oData.rank;
                var diffScore = GameData.oldScore - oData.score;
                var diffRank = GameData.oldRank - oData.rank;
                GameData.oldScore = oData.score;
                GameData.oldRank = oData.rank;
                _this.diffScore.score = diffScore;
                _this.diffRank.rank = diffRank;
            }
        });
        return _this;
    }
    return SceneOver;
}(egret.DisplayObjectContainer));
__reflect(SceneOver.prototype, "SceneOver");
