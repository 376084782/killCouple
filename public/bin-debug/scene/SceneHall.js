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
        _this.addChild(_this.bg);
        _this.hScore = new ScoreBar(0);
        _this.hScore.x = 60;
        _this.hScore.y = 6;
        _this.addChild(_this.hScore);
        //測試
        _this.hScore.score = '123456';
        _this.hRank = new ScoreBar(1);
        _this.hRank.x = 390;
        _this.hRank.y = 6;
        _this.addChild(_this.hRank);
        _this.hLogo = new Bitmap({
            source: 'pic_logo_png',
            width: 526,
            height: 240,
            y: 60,
        });
        _this.hLogo.x = (UIConfig.stageW - _this.hLogo.width) / 2;
        _this.addChild(_this.hLogo);
        _this.hDes = new Bitmap({
            source: 'text_lszql_png',
            y: 305,
        });
        _this.hDes.x = (UIConfig.stageW - _this.hDes.width) / 2;
        _this.addChild(_this.hDes);
        _this.hBtn = new Button(0, 0);
        _this.hBtn.y = 342;
        _this.hBtn.x = (UIConfig.stageW - _this.hBtn.width) / 2;
        _this.addChild(_this.hBtn);
        _this.hBtn.touchEnabled = true;
        _this.hBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            if (_this.hBtn.Bg == "btn_public_n_png")
                EventManager.pub('sendMessage', { state: 'ready', nId: GameData.nId, roomId: GameData.roomId }); //玩家準備
            _this.hBtn.Bg = 'btn_public_p_png';
            _this.hBtn.Type = 'btn_pic_dadf_png';
        }, _this);
        return _this;
    }
    return SceneHall;
}(egret.DisplayObjectContainer));
__reflect(SceneHall.prototype, "SceneHall");
