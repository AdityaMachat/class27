class Chain{
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04,
            length:10,
        }
        this.body=Constraint.create(options);
        World.add(world,this.body);
    }
    display(){
        var pos1= this.body.bodyA.position;
        var pos2= this.body.bodyB.position;
        strokeWeight(4);
        line(pos1.x,pos1.y,pos2.x,pos2.y);
    }
}