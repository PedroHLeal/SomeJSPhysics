class SomeJsPhysics {
    field = null;
    fieldElements = [];
    date = (new Date()).getTime();
    pause = false;
    interval = null;
    running = false;

    static height = null;
    static width = null;

    readKeys = () => {};

    constructor(fieldId) {
        this.field = document.getElementById(fieldId);

        if (!this.field) {
            throw 'Field was not found';
        }

        SomeJsPhysics.height = this.field.style.height;
        SomeJsPhysics.width = this.field.style.width;
    }

    run = (dt) => {
        if (this.pause) return;
        this.readKeys();
        for (let element of this.fieldElements) {
            element.domElement = document.getElementById(element.id);
            element.update(dt);
            element.draw();
        }
    }

    start = (fps) => {
        this.running = true;
        this.interval = setInterval(() => {
            let dt = (new Date()).getTime() - this.date;
            this.run(dt/50);
            this.date = (new Date()).getTime();
        }, 1000/fps);
    }

    stop = () => {
        this.running = false;
        clearInterval(this.interval);
    }

    togglePause = () => {
        this.pause = !this.pause;
    }

    add = (element) => {
        this.fieldElements.push(element);
        this.field.innerHTML += element.html;
    }

    remove = (id) => {
        let element = document.getElementById(id);
        this.field.removeChild(element);
    }

    getElements = () => {
        return this.fieldElements;
    }
}
