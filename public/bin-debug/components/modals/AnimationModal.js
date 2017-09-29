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
        _this.width = 710;
        _this.height = 186;
        var ct321Src = ['pic_djs_1_png', 'pic_djs_2_png', 'pic_djs_3_png'];
        return _this;
    }
    return AnimationModal;
}(ModalLayer));
__reflect(AnimationModal.prototype, "AnimationModal");
