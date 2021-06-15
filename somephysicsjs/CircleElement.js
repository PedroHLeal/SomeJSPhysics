class CircleElement extends PhysicsElement{
    html = '<div id=":id" style="width: 100px; height: 100px; border-radius: 50px; background-color: white; position: absolute"></div>'
    domElement = null;

    constructor(id) {
        super();
        this.id = id;
        this.html = this.html.replace(':id', id);
    }

    draw = () => {
        this.domElement.style.left = (this.posX - 50).toString();
        this.domElement.style.top = (this.posY - 50).toString();
    }
}
