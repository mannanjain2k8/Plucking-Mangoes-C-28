class Boy{
    constructor(x,y,width,height){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x;
        this.y = y
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        
        
    }
    display(){
        imageMode(CENTER)
        var pos = this.body.position;
        image(img,pos.x,pos.y);
        img.resize(300,300)
       
    }
}