/**
 * 游戏結束界面
 * 
 */
class SceneOver extends egret.DisplayObjectContainer{
    public bg : egret.Bitmap = new egret.Bitmap(RES.getRes('public_bg_png'))


		private oScore : ScoreBar;
		private oRank : ScoreBar;
        private oTitle : TitleBar;

		private hBtn : Button;

        private diffScore : RankBar;
        private diffRank : RankBar;


    constructor(){
			super();
			this.addChild(this.bg)
      
			this.oScore = new ScoreBar(0);
			this.oScore.x = 60;
			this.oScore.y = 6;
			this.addChild(this.oScore);
			//測試
			this.oScore.score = '123456';
		
			this.oRank = new ScoreBar(1);
			this.oRank.x = 390;
			this.oRank.y = 6;
			this.addChild(this.oRank);

            this.oTitle = new TitleBar();
            this.oTitle.x = (UIConfig.stageW - this.oTitle.width)/2;
            this.oTitle.y = 50;
            this.addChild(this.oTitle);

            this.diffScore = new RankBar();
            this.diffScore.x = 110;
            this.diffScore.y = 265;
            this.addChild(this.diffScore);

            this.diffRank = new RankBar();
            this.diffRank.x = 370;
            this.diffRank.y = 265;
            this.addChild(this.diffRank);

			this.hBtn = new Button(0,2);
			this.hBtn.y = 335;
			this.hBtn.x = (UIConfig.stageW - this.hBtn.width)/2;
			this.addChild(this.hBtn);

			this.hBtn.touchEnabled = true;
			this.hBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,()=>{
				if(this.hBtn.Type == "btn_pic_hdsy_png")
					UImanager.to('hall') //回到首頁
			},this)

            EventManager.sub('showLevel',()=>{
				// this.oTitle.score = `你和${GameData.teamMateName}搭档在120秒共计干掉了${GameData.gameLevel}对情侣`;
				this.oTitle.score = `你和搭档在120秒共计干掉了${GameData.gameLevel}对情侣`;
			})

			//更新排名
			EventManager.sub('updataScore',(oData)=>{
				this.oScore.score = oData.score;
				this.oRank.score = oData.rank;

				let diffScore = GameData.oldScore - oData.score;
				let diffRank = GameData.oldRank - oData.rank;

				GameData.oldScore = oData.score;
				GameData.oldRank = oData.rank;

				this.diffScore.score = diffScore;
				this.diffRank.rank = diffRank;

			});

			//返回闯关情况
			let score = (GameData.gameLevel - 1) * 10;
			EventManager.pub('returnScore',score);


    }
}