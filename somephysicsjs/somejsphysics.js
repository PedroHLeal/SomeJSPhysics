class SomeJsPhysics {
    field = null;
    fieldElements = [];
    dt = 0;

    constructor(fieldId) {
        console.log('teste');
        this.field = document.getElementById(fieldId);
        console.log(this.field);
        if (!this.field) {
            throw 'Field was not found';
        }
    }

    run = () => {
        for (let element of this.fieldElements) {
            element.update();
            element.draw();
        }
    }

    start = (fps) => {
        let date = (new Date()).getTime();
        setInterval(() => {
            this.run();
            this.dt = (new Date()).getTime();
        }, 1000/fps);
    }

    add = (element) => {
        this.fieldElements.push(element);
        this.field.innerHTML += element.html;
        element.domElement = document.getElementById(element.id);
    }
}