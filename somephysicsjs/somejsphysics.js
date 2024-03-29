export default class SomeJsPhysics {
  field = null;
  fieldElements = [];
  pause = false;
  interval = null;
  running = false;

  static height = null;
  static width = null;
  previousIntervalIterationCompleted = true;

  readKeys = () => {};

  constructor(fieldId) {
    this.field = document.getElementById(fieldId);

    if (!this.field) {
      throw "Field was not found";
    }

    SomeJsPhysics.height = this.field.style.height;
    SomeJsPhysics.width = this.field.style.width;
  }

  update = () => {};

  run = (dt) => {
    if (this.pause) return;
    this.readKeys(dt);
    for (const i in this.fieldElements) {
      const element = this.fieldElements[i];
      element.domElement = document.getElementById(element.id);
      this.update(element, i, dt);
    }
  };

  start = (fps) => {
    this.running = true;
    let date = new Date().getTime();
    this.interval = setInterval(() => {
        if (this.previousIntervalIterationCompleted) {
            this.previousIntervalIterationCompleted = false;
            let dt = new Date().getTime() - date;
            this.run(dt / 50);
            date = new Date().getTime();
            this.previousIntervalIterationCompleted = true;
        }
    }, 1000 / fps);
  };

  stop = () => {
    this.running = false;
    clearInterval(this.interval);
  };

  togglePause = () => {
    this.pause = !this.pause;
  };

  add = (element) => {
    this.fieldElements.push(element);
    this.field.innerHTML += element.html;
  };

  remove = (element) => {
    this.removeFieldElement(element);
    let domElement = document.getElementById(element.id);
    this.field.removeChild(domElement);
  };

  getElements = () => {
    return this.fieldElements;
  };

  getById = (id) => {
    return this.fieldElements.find((element) => element.id === id);
  };

  getElementIndex = (element) => {
    return this.fieldElements.findIndex((e) => e.id === element.id);
  } 

  removeFieldElement = (element) => {
    this.fieldElements.splice(this.getElementIndex(element), 1);
  };
}
