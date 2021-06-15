const field = document.getElementById('field');
let physics = new SomeJsPhysics('field');
const circle = new CircleElement('myCircle');

keysPressed = [];

circle.posX = field.style.width.replace('px', '')/2;
circle.posY = field.style.height.replace('px', '')/2;

physics.add(circle);
physics.start(60);

toggleStop = () => {
    if (physics.running) {
        physics.stop();
    } else {
        physics.start()
    }
    console.log(physics.running ? 'Running' : 'Stopped');
}

physics.readKeys = () => {
    if (this.keysPressed.includes('d')) {
        circle.applyForceX(10);
    }

    if (this.keysPressed.includes('a')) {
        circle.applyForceX(-10);
    }

    if (this.keysPressed.includes('w')) {
        circle.applyForceY(-10);
    }

    if (this.keysPressed.includes('s')) {
        circle.applyForceY(10);
    }
}

document.addEventListener('keydown', (event) => {
    if (!keysPressed.includes(event.key)) {
        keysPressed.push(event.key);
    }
});

document.addEventListener('keyup', (event) => {
    keysPressed.splice(keysPressed.indexOf(event.key), 1);
});

document.addEventListener('click', (event) => {
    toggleStop();
});
