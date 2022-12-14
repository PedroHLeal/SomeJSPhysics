class SomeJsPhysics {
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
        const indexesToDestroy = [];
        this.readKeys(dt);
        for (const i in this.fieldElements) {
            const element = this.fieldElements[i];
            element.domElement = document.getElementById(element.id);
            element.update(dt);
            element.draw(this.camera);

            if (this.onCollision && element.collider) {
                for (const colliderElement of this.fieldElements) {
                    if (colliderElement != element && colliderElement.getBoundingBox && element.getBoundingBox) {
                        for (const point of colliderElement.getBoundingBox()) {
                            if (element.collider(element.getBoundingBox(), point)) {
                                this.onCollision(element, colliderElement);
                                break;
                            }
                        }
                    }
                }
            }

            if (element.shouldDestroy) {
                this.remove(element.id);
                indexesToDestroy.push(i);
            }
        }

        indexesToDestroy.reverse();

        for (const idx of indexesToDestroy) {
            this.fieldElements.splice(parseInt(idx), 1);
        }

        this.postUpdate();
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
