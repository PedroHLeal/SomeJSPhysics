class PhysicsElement extends Drawable {
    velX = 0; velY = 0;
    accX = 0; accY = 0;
    posX = 0; posY = 0;
    forceX = 0; forceY = 0;

    update = (dt) => {
        this.accX = this.forceX * dt;
        this.accY = this.forceY * dt;

        this.velX += this.accX * dt;
        this.velY += this.accY * dt;
        this.posX += this.velX * dt;
        this.posY += this.velY * dt;

        this.clearForces()
    };

    applyForceX = (fx) => {
        this.forceX += fx;
    }

    applyForceY = (fy) => {
        this.forceY += fy;
    }

    clearForces = () => {
        this.forceX = 0;
        this.forceY = 0;
    }

    draw = () => {}
}
