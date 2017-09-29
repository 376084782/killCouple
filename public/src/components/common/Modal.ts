
class Modal extends egret.DisplayObjectContainer{
    private bgMask : Mask;
    private modalBg : Bitmap;
    private modalCloseBtn : Bitmap;

    constructor(width, height){
        super();
        this.width = width;
        this.height = height;

        this.bgMask = new Mask();
        this.addChild(this.bgMask);

        this.bgMask.x = - (UImanager.container.width - this.width)/2;
        this.bgMask.y = - (UImanager.container.height - this.height)/2;

        this.modalBg = new Bitmap({
            source: 'pub_frame_bg_png',
            width: width,
            height: height,            
        }) 
        this.addChild(this.modalBg);
        this.modalCloseBtn = new Bitmap({
            source: 'pub_close_png',
            x: width - 30,
            y: 5,
        });
        this.modalCloseBtn.touchEnabled = true;
        this.addChild(this.modalCloseBtn);
        this.modalCloseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('关闭model');
            EventManager.pub('modal/onModalClose');
        }, this);
    }
};
