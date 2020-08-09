class Tree{
    constructor(x,y,width,height){
        var options = {
            isStatic:true,
            
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        
        
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(img2,pos.x,pos.y);
        img2.resize(500,600)
    }
}