const field = document.getElementById('field');
let physics = new SomeJsPhysics('field');

keysPressed = [];
circleNumber = 10;

for (let i = 0; i < circleNumber; i++) {
    const circle = new CircleElement(`circle${i}`);
    circle.posX = (field.getBoundingClientRect().width/circleNumber) * i;
    circle.posY = field.getBoundingClientRect().height/2;
    physics.add(circle);
}

physics.start(60);

toggleStop = () => {
    physics.running
        ? physics.stop()
        : physics.start(60)
    console.log(physics.running ? 'Running' : 'Stopped');
}

moveAllCircles = (forceFn, force) => {
    for (const circle of physics.fieldElements) {
        circle[forceFn](force)
    }
}

physics.readKeys = () => {
    if (this.keysPressed.includes('d')) {
        moveAllCircles("applyForceX", 10)
    }

    if (this.keysPressed.includes('a')) {
        moveAllCircles("applyForceX", -10)
    }

    if (this.keysPressed.includes('w')) {
        moveAllCircles("applyForceY", -10)
    }

    if (this.keysPressed.includes('s')) {
        moveAllCircles("applyForceY", 10)
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
