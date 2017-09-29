class People extends egret.Sprite{
    private pBg : Bitmap;

    constructor(){
        super();
        this.width = 70;
        this.height = 160;
        this.pBg = new Bitmap({
            source:'pic_dsg_1_png',
            width:70,
            height:160,
            x:0,
            y:0,
        })
        this.addChild(this.pBg);
    }
}