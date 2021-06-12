class Ground {
    constructor(x,y,width,height) {
        var option = {
            isStatic: true
        }
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    }
    display(){
        rectMode(CENTER);
        fill()
        rect(pos.x, pos.y, this.width, this.width);
    }
};