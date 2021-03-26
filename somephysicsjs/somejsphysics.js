class SomeJsPhysics {
    field = null;
    fieldElements = [];
    date = (new Date()).getTime();

    static height = null;
    static width = null;

    constructor(fieldId) {
        this.field = document.getElementById(fieldId);

        if (!this.field) {
            throw 'Field was not found';
        }

        SomeJsPhysics.height = this.field.style.height;
        SomeJsPhysics.width = this.field.style.width;
    }

    run = (dt) => {
        for (let element of this.fieldElements) {
            element.update(dt);
            element.draw();
        }
    }

    start = (fps) => {
        setInterval(() => {
            let dt = (new Date()).getTime() - this.date;
            this.run(dt/50);
            this.date = (new Date()).getTime();
        }, 1000/fps);
    }

    add = (element) => {
        this.fieldElements.push(element);
        this.field.innerHTML += element.html;
        element.domElement = document.getElementById(element.id);
    }
}