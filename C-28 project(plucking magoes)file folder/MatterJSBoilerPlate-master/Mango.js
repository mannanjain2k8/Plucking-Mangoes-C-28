class Mango{
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
        image(img3,pos.x,pos.y);
        img3.resize(70,70)
    }
}