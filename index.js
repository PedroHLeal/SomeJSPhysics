let physics = new SomeJsPhysics('field');

const circle = new CircleElement('myCircle');
physics.add(circle);

circle.accY = 1;

physics.start(1);
console.log(circle);
console.log(physics);
