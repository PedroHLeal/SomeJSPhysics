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

    update = () => {
        this.velX += this.accX;
        this.velY += this.accY;
        this.posX += this.velX;
        this.posY += this.velY;
    }

    draw = () => {
        this.domElement.style.left = this.posX;
        this.domElement.style.top = this.posY;
    }
}