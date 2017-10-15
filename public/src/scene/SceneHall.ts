/**
 * 游戏开始界面
 * 
 */
class SceneHall extends egret.DisplayObjectContainer{
    public bg : egret.Bitmap = new egret.Bitmap(RES.getRes('public_bg_png'))
    private hLogo : Bitmap;
    private hDes : Bitmap;

	private hScore : ScoreBar;
	private hRank : ScoreBar;

	private hBtn : Button;

    constructor(){
			super();
			this.init();
			this.fListen();
    }

	init(){
			this && this.removeChildren();
			
			this.addChild(this.bg)
      
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
				source:'pic_logo_png',
				width: 526,
				height: 240,
				y: 60,
			})
			this.hLogo.x = (UIConfig.stageW - this.hLogo.width)/2;
			this.addChild(this.hLogo);

			this.hDes = new Bitmap({
				source:'text_lszql_png',
				y:305,
			})
			this.hDes.x = (UIConfig.stageW - this.hDes.width)/2;
			this.addChild(this.hDes);

			this.hBtn = new Button(0,0);
			this.hBtn.y = 342;
			this.hBtn.x = (UIConfig.stageW - this.hBtn.width)/2;
			this.addChild(this.hBtn);

			this.hBtn.touchEnabled = true;
			this.hBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				if(this.hBtn.Bg == "btn_public_n_png")
					EventManager.pub('sendMessage',{state:'ready',nId:GameData.nId,roomId : GameData.roomId}); //玩家準備
				this.hBtn.Bg = 'btn_public_p_png';
				this.hBtn.Type = 'btn_pic_dadf_png';
			},this)

	}

	fListen(){

		//更新排名
		EventManager.sub('updataScore',(oData)=>{

			if(oData.score != null && oData.rank != null){

				this.hScore.visible = true;
				this.hRank.visible = true;

				this.hScore.score = oData.score;
				this.hRank.score = oData.rank;

				GameData.oldScore = oData.score;
				GameData.oldRank = oData.rank;
			}

		});

	}

  onLeave() {
	  this.init();
  }
}