var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    return GameData;
}());
GameData.countDown = 0;
GameData.tCopy = ["点错会减少5秒哦", "对友点错，减少5秒！", "你点错了，减少5秒！"];
GameData.fCopy = ["目前你们都没有找到情侣哦，抓紧时间找到他们并拆散这对情侣吧", "你已锁定情侣，帮助对方也找到这对狗男女，即可干掉这对情侣！", "对方已锁定情侣，多听一下对方的描述，会帮助你更快的找到这对情侣哦"];
__reflect(GameData.prototype, "GameData");
