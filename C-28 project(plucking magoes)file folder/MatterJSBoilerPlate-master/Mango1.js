class Mango1{
    constructor(x,y,width,height){
        var options = {
            'isStatic':true,
            'restitution': 0,
            'friction': 1
           
            
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        
        
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(img4,pos.x,pos.y);
        img4.resize(95,95)
    }
}