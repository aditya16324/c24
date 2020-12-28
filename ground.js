class ground{

    constructor(p,q,l,m)
    {
var order={
isStatic:true

}
        this.box=Bodies.rectangle(p,q,l,m,order);
        World.add(world,this.box);
        this.width=l
        this.height=m
    }
display(){
    rectMode(CENTER)
    rect(this.box.position.x,this.box.position.y,this.width,this.hight)
}

}