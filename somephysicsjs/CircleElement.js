class CircleElement extends PhysicsElement{
    html = '<div id=":id" style="width: 50px; height: 50px; border-radius: 25px; background-color: white; position: absolute"></div>'
    domElement = null;

    constructor(id) {
        super();
        this.id = id;
        this.html = this.html.replace(':id', id);
    }

    draw = () => {
        this.domElement.style.left = (this.posX - 25).toString();
        this.domElement.style.top = (this.posY - 25).toString();
    }
}
