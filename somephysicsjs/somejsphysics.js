export default class SomeJsPhysics {
    field = null;
    fieldElements = [];
    pause = false;
    interval = null;
    running = false;
    camera = {x: 0, y: 0};

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

    postUpdate = () => {}

    run = (dt) => {
        if (this.pause) return;
        this.readKeys(dt);
        for (const i in this.fieldElements) {
            const element = this.fieldElements[i];
            element.domElement = document.getElementById(element.id);
            element.update(dt);
            this.postUpdate(element, i);
            if (!element.shouldDestroy) {
                element.draw(this.camera);
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

    getById = (id) => {
        return this.fieldElements.find((element) => element.id === id);
    }
}
