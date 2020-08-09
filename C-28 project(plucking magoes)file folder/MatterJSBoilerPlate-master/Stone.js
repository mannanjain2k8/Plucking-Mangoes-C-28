class Stone{
    constructor(x,y,width,height){
        var options = {
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.x = x ;
        this.y = y;
        this.width = width;
        this.height = height;
        World.add(world,this.body)
        
        
    }
    
    display(){
        push();
       
        var pos = this.body.position;
        imageMode(CENTER);
        image(img1,pos.x,pos.y);
        img1.resize(70,70)
        pop();
    }
}