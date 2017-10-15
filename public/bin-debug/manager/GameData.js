var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameData = (function () {
    function GameData() {
    }
    return GameData;
}());
GameData.countDown = 0;
GameData.ctTime = 2;
GameData.teamMateName = 'XX';
GameData.offX = 50;
GameData.isAnswer = false;
GameData.tCopy = ["点错会减少5秒哦", "对友点错，减少5秒！", "你点错了，减少5秒！"];
GameData.fCopy = ["目前你们都没有找到情侣哦，抓紧时间找到他们并拆散这对情侣吧", "你已锁定情侣，帮助对方也找到这对狗男女，即可干掉这对情侣！", "对方已锁定情侣，听取对方的建议，你可以更快的找到情侣哦", "恭喜你们都成功的锁定了情侣，马上进入下一关！"];
__reflect(GameData.prototype, "GameData");
