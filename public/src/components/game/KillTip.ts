class KillTip extends egret.Sprite{
    private levTip : TextField;
    private killTip : TextField;

    constructor(){
        super();

        this.levTip = new TextField({
            text:'Level 1',
            color:'black',
            size:14,
            fontFamily:'YOUYUAN',
            textAlign: 'right',
            width:136,
            bold:true,
        })
        this.addChild(this.levTip);

        this.killTip = new TextField({
            text:'已干掉情侣:999',
            color:'black',
            size:16,
            fontFamily:'YOUYUAN',
            textAlign: 'right',
            y:20,
            width:136,
            bold:true,
        })
        this.addChild(this.killTip);


    }
}