var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AnimationModal = (function (_super) {
    __extends(AnimationModal, _super);
    function AnimationModal() {
        var _this = _super.call(this, 710, 186) || this;
        _this.ct321 = [];
        _this.width = 710;
        _this.height = 186;
        _this.x = (UImanager.container.width - _this.width) / 2;
        console.log('Imanager.stageH:', UImanager.stageH);
        _this.y = (UImanager.container.height - _this.height) / 2;
        var ct321Src = ['pic_djs_1_png', 'pic_djs_2_png', 'pic_djs_3_png'];
        for (var i = 0; i < ct321Src.length; i++) {
            _this.ct321[i] = new Bitmap({
                source: ct321Src[i],
            });
            _this.ct321[i].x = (710 - _this.ct321[i].width) / 2;
            _this.ct321[i].y = (186 - _this.ct321[i].height) / 2;
            _this.ct321[i].visible = false;
            if (i == 2)
                _this.ct321[i].visible = true;
            _this.addChild(_this.ct321[i]);
        }
        _this.pBoy = new Bitmap({
            source: 'pic_man_fk_png',
            x: 360,
        });
        _this.pBoy.y = (186 - _this.pBoy.height) / 2;
        _this.addChild(_this.pBoy);
        _this.pGirl = new Bitmap({
            x: 80,
            source: 'pic_woman_fk_png',
        });
        _this.pGirl.y = (186 - _this.pGirl.height) / 2;
        _this.addChild(_this.pGirl);
        _this.aniTimer = new egret.Timer(1000, GameData.ctTime);
        EventManager.sub("startCT", function () {
            _this.start();
            var boy = _this.pBoy;
            var girl = _this.pGirl;
            //开始动画
            egret.Tween.get(boy).to({ x: boy.x + GameData.offX }, 2000, egret.Ease.sineIn);
            egret.Tween.get(girl).to({ x: girl.x - GameData.offX }, 2000, egret.Ease.sineIn);
        });
        return _this;
    }
    AnimationModal.prototype.start = function () {
        // this.aniTimer.repeatCount = 3;
        this.ctCount = GameData.ctTime;
        this.aniTimer.addEventListener(egret.TimerEvent.TIMER, this.subTime, this);
        this.aniTimer.addEventListener(egret.TimerEvent.TIMER_COMPLETE, this.timeOver, this);
        this.aniTimer.reset();
        this.aniTimer.start();
    };
    AnimationModal.prototype.subTime = function () {
        // if (this.ctCount == 0) {
        // return;
        // }
        this.ctCount -= 1;
        if (this.ctCount == 2) {
            this.ct321[1].visible = true;
            this.ct321[0].visible = false;
            this.ct321[2].visible = false;
        }
        else if (this.ctCount == 1) {
            this.ct321[1].visible = false;
            this.ct321[0].visible = true;
            this.ct321[2].visible = false;
        }
    };
    AnimationModal.prototype.timeOver = function () {
        console.log("???");
        EventManager.pub('sendMessage', { state: 'next' });
    };
    return AnimationModal;
}(ModalLayer));
__reflect(AnimationModal.prototype, "AnimationModal");
