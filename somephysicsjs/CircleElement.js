class CircleElement {
    html = '<div id=":id" style="width: 100px; height: 100px; border-radius: 50px; background-color: white; position: absolute"></div>'
    domElement = null;
    accX = 0; accY = 0;
    velX = 0; velY = 0;
    posX = 0; posY = 0;
    id = '';

    constructor(id) {
        this.id = id;
        this.html = this.html.replace(':id', id);
    }

    update = (dt) => {
        this.velX += this.accX * dt;
        this.velY += this.accY * dt;
        this.posX += this.velX * dt;
        this.posY += this.velY * dt;

        if (this.posY + 100 >= SomeJsPhysics.height.replace('px', '') && this.velY > 0) {
            this.velY = -this.velY;
        }


        if (this.posX + 100 >= SomeJsPhysics.width.replace('px', '')) {
            this.velX = -this.velX;
        }
    }

    draw = () => {
        this.domElement.style.left = this.posX;
        this.domElement.style.top = this.posY;
    }
}