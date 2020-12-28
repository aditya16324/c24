class AdityaBox{

    constructor(p,q,l,m)
    {

        this.box=Bodies.rectangle(p,q,l,m);
        World.add(world,this.box);
        this.width=l
        this.height=m
    }
display(){
rectMode(CENTER)
    rect(this.box.position.x,this.box.position.y,this.width,this.hight)
}

}