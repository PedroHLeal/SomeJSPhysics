class SomeJsPhysics {
    field = null;
    fieldElements = [];
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
        for (const i in this.fieldElements) {
            const element = this.fieldElements[i];
            element.domElement = document.getElementById(element.id);
            element.update(dt);
            element.draw();

            if (element.shouldDestroy) {
                this.remove(element.id);
                this.fieldElements.splice(i, 1);
            }
        }
    }

    start = (fps) => {
        this.running = true;
        let date = (new Date()).getTime()
        this.interval = setInterval(() => {
            let dt = (new Date()).getTime() - date;
            this.run(dt/50);
            date = (new Date()).getTime();
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
