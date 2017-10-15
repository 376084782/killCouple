var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * 游戏开始界面
 *
 */
var SceneHall = (function (_super) {
    __extends(SceneHall, _super);
    function SceneHall() {
        var _this = _super.call(this) || this;
        _this.bg = new egret.Bitmap(RES.getRes('public_bg_png'));
        _this.init();
        _this.fListen();
        return _this;
    }
    SceneHall.prototype.init = function () {
        var _this = this;
        this && this.removeChildren();
        this.addChild(this.bg);
        this.hScore = new ScoreBar(0);
        this.hScore.x = 60;
        this.hScore.y = 6;
        this.addChild(this.hScore);
        //測試
        this.hScore.score = '156';
        this.hScore.visible = false;
        this.hRank = new ScoreBar(1);
        this.hRank.x = 390;
        this.hRank.y = 6;
        this.addChild(this.hRank);
        this.hRank.score = '123456';
        this.hRank.visible = false;
        this.hLogo = new Bitmap({
            source: 'pic_logo_png',
            width: 526,
            height: 240,
            y: 60,
        });
        this.hLogo.x = (UIConfig.stageW - this.hLogo.width) / 2;
        this.addChild(this.hLogo);
        this.hDes = new Bitmap({
            source: 'text_lszql_png',
            y: 305,
        });
        this.hDes.x = (UIConfig.stageW - this.hDes.width) / 2;
        this.addChild(this.hDes);
        this.hBtn = new Button(0, 0);
        this.hBtn.y = 342;
        this.hBtn.x = (UIConfig.stageW - this.hBtn.width) / 2;
        this.addChild(this.hBtn);
        this.hBtn.touchEnabled = true;
        this.hBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.hBtn.Bg == "btn_public_n_png")
                EventManager.pub('sendMessage', { state: 'ready', nId: GameData.nId, roomId: GameData.roomId }); //玩家準備
            _this.hBtn.Bg = 'btn_public_p_png';
            _this.hBtn.Type = 'btn_pic_dadf_png';
        }, this);
    };
    SceneHall.prototype.fListen = function () {
        var _this = this;
        //更新排名
        EventManager.sub('updataScore', function (oData) {
            if (oData.score != null && oData.rank != null) {
                _this.hScore.visible = true;
                _this.hRank.visible = true;
                _this.hScore.score = oData.score;
                _this.hRank.score = oData.rank;
                GameData.oldScore = oData.score;
                GameData.oldRank = oData.rank;
            }
        });
    };
    SceneHall.prototype.onLeave = function () {
        this.init();
    };
    return SceneHall;
}(egret.DisplayObjectContainer));
__reflect(SceneHall.prototype, "SceneHall");
