class SceneGame extends egret.DisplayObjectContainer{
    public bg : egret.Bitmap = new egret.Bitmap(RES.getRes('public_bg2_png'))
    private touchLayer : egret.Shape;
    private findTip : FindTip;
    private gClock : Clock;
    private timeTip : TimeTip;
    private killTip : KillTip;

    private folkMap : egret.Sprite;
    private peoples : Array<People> = [];

    private pCir : Bitmap;


    constructor(){
        super();

        this.addChild(this.bg);
        this.findTip = new FindTip();
        this.findTip.x= 20;
        this.findTip.y = 5;
        this.addChild(this.findTip);

        this.gClock = new Clock();
        this.gClock.x = (UIConfig.stageW - this.gClock.width)/2;
        this.gClock.y = 15;
        this.addChild(this.gClock);

        this.timeTip = new TimeTip();
        this.timeTip.x = 440;
        this.timeTip.y = 13;
        this.addChild(this.timeTip);

        this.killTip = new KillTip();
        this.killTip.x = (UIConfig.stageW - this.killTip.width - 10);
        this.killTip.y = 10;
        this.addChild(this.killTip);

        this.touchLayer = new egret.Shape();
        this.touchLayer.graphics.beginFill(0x000000,0);
        this.touchLayer.graphics.drawRect(0,0,710,362);
        this.touchLayer.graphics.endFill();
        this.touchLayer.x = 0;
        this.touchLayer.y = 64;
        this.addChild(this.touchLayer);
        this.touchLayer.touchEnabled = true;
        this.touchLayer.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
            EventManager.pub('sendMessage',{state:'find',answer:-1})
            // console.log("點錯")
        },this)

        this.folkMap = new egret.Sprite();
        this.folkMap.width = 710;
        this.folkMap.height = 362;
        this.folkMap.x = 0;
        this.folkMap.y = 64;
        this.addChild(this.folkMap);

        this.pCir =  new Bitmap({
            source:'pic_sdk_png',
        })
        this.pCir.width /= 2;
        this.pCir.height /= 2;

        EventManager.sub('currentOff',(level)=>{
            this.killTip.level = level;
        })

        EventManager.sub('produceMap',(mapInfo)=>{
            //初始化地图
            this.resetAll();

            for(var i =0 ; i <mapInfo.length; i++){
                var tempXY = mapInfo[i].split(',');
                this.peoples[i] = new People(tempXY[2]);
                this.peoples[i].x = parseInt(tempXY[0]);
                this.peoples[i].y = parseInt(tempXY[1]);
                if(parseInt(tempXY[3]) == 1){

                    this.peoples[i].skewY = 180;
                }
                this.peoples[i].scaleX = .5;
                this.peoples[i].scaleY = .5;
                this.folkMap.addChild(this.peoples[i]);
            }
        })

        EventManager.sub('isLover',(answer)=>{
            GameData.loverID = answer;
            this.peoples[answer].touchEnabled = true;

            this.pCir.x = - (this.pCir.width - this.peoples[answer].width)/2 + this.peoples[answer].x - (this.peoples[answer].width)/2;
            this.pCir.y = (this.peoples[answer].height - this.pCir.height)/2 + this.peoples[answer].y;
            this.pCir.visible = false;
            this.addChild(this.pCir);

            this.peoples[answer].addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
                // this.pCir.visible = true;
                // console.log("點對")
                // console.log("2342342")
                EventManager.pub('sendMessage',{state:'find',answer:GameData.loverID})
            },this)
        })

        EventManager.sub('openRedCir',()=>{
            this.pCir.visible = true;
        })

        EventManager.sub('findFalse',(data)=>{
            //更新提示
            if(data.answerId == GameData.nId){
                //是自己答错
                this.timeTip.cont = GameData.tCopy[2];
            }else {
                //对方答错
                this.timeTip.cont = GameData.tCopy[1];
            }
            //校准时间
            this.gClock.time = data.timeLeft;
        })
        EventManager.sub('findTrue',(data)=>{
            if(data.answerId == GameData.nId){
                //是自己答对
                this.findTip.cont = GameData.fCopy[1];
                EventManager.pub('openRedCir')
                //关闭触控
                this.touchLayer.touchEnabled = false;
                this.peoples[GameData.loverID].touchEnabled = false;
            }else {
                //对方答对    
                //判断自己是否已经答对
                if(GameData.isAnswer){
                    this.findTip.cont = GameData.fCopy[3];
                }else if(!GameData.isAnswer){
                    this.findTip.cont = GameData.fCopy[2];
                    GameData.isAnswer = true;
                }
            }
        })

        EventManager.sub('stopTime',()=>{
            this.gClock.cTime.stop();
        })
        EventManager.sub('storeLevel',(level)=>{
            GameData.gameLevel = level;
        })

    }

    private resetAll(){
         this.peoples= [];
         this.folkMap && this.folkMap.removeChildren();
         this.touchLayer.touchEnabled = true;
         this.findTip.cont = GameData.fCopy[0];
         this.timeTip.cont = GameData.tCopy[0];
         GameData.isAnswer = false;

    }


}