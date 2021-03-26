let physics = new SomeJsPhysics('field');

const circle = new CircleElement('myCircle');
physics.add(circle);

circle.accY = 5;
circle.velX = 20;

physics.start(60);
