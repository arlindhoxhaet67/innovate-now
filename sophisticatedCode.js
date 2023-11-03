/*  sophisticatedCode.js

   This code generates a simulation of a virtual universe 
   and allows users to interact with it by creating celestial bodies,
   simulating their movements, and observing their attributes.
*/

class CelestialBody {
  constructor(name, mass, position, velocity) {
    this.name = name;
    this.mass = mass;
    this.position = position;
    this.velocity = velocity;
  }

  updatePosition(deltaTime) {
    this.position.x += this.velocity.x * deltaTime;
    this.position.y += this.velocity.y * deltaTime;
    this.position.z += this.velocity.z * deltaTime;
  }

  gravitationalForce(other) {
    const G = 6.674 * 10 ** -11;
    const distance = Math.sqrt(
      (this.position.x - other.position.x) ** 2 +
      (this.position.y - other.position.y) ** 2 +
      (this.position.z - other.position.z) ** 2
    );
    const forceMagnitude = (G * this.mass * other.mass) / distance ** 2;
    const direction = {
      x: (other.position.x - this.position.x) / distance,
      y: (other.position.y - this.position.y) / distance,
      z: (other.position.z - this.position.z) / distance,
    };
    const force = {
      x: forceMagnitude * direction.x,
      y: forceMagnitude * direction.y,
      z: forceMagnitude * direction.z,
    };
    return force;
  }
}

class Universe {
  constructor() {
    this.bodies = [];
  }

  addCelestialBody(celestialBody) {
    this.bodies.push(celestialBody);
  }

  simulate(deltaTime, totalSeconds) {
    const steps = Math.round(totalSeconds / deltaTime);
    for (let step = 0; step < steps; step++) {
      for (let i = 0; i < this.bodies.length; i++) {
        const bodyA = this.bodies[i];
        let netForce = { x: 0, y: 0, z: 0 };
        for (let j = 0; j < this.bodies.length; j++) {
          if (i !== j) {
            const bodyB = this.bodies[j];
            const force = bodyA.gravitationalForce(bodyB);
            netForce.x += force.x;
            netForce.y += force.y;
            netForce.z += force.z;
          }
        }
        const acceleration = {
          x: netForce.x / bodyA.mass,
          y: netForce.y / bodyA.mass,
          z: netForce.z / bodyA.mass,
        };
        bodyA.velocity.x += acceleration.x * deltaTime;
        bodyA.velocity.y += acceleration.y * deltaTime;
        bodyA.velocity.z += acceleration.z * deltaTime;
        bodyA.updatePosition(deltaTime);
      }
    }
  }

  printBodies() {
    for (let i = 0; i < this.bodies.length; i++) {
      const body = this.bodies[i];
      console.log(`Name: ${body.name}`);
      console.log(`  Mass: ${body.mass}`);
      console.log(`  Position: (${body.position.x}, ${body.position.y}, ${body.position.z})`);
      console.log(`  Velocity: (${body.velocity.x}, ${body.velocity.y}, ${body.velocity.z})`);
      console.log("---------------------------");
    }
  }
}

// Create a Universe
const universe = new Universe();

// Create Celestial bodies
const sun = new CelestialBody(
  "Sun",
  1.989 * 10 ** 30,
  { x: 0, y: 0, z: 0 },
  { x: 0, y: 0, z: 0 }
);
const earth = new CelestialBody(
  "Earth",
  5.972 * 10 ** 24,
  { x: 149.6 * 10 ** 9, y: 0, z: 0 },
  { x: 0, y: 29.78 * 10 ** 3, z: 0 }
);

// Add Celestial bodies to the Universe
universe.addCelestialBody(sun);
universe.addCelestialBody(earth);

// Simulate the Universe for 10 days with a time step of 1 hour
universe.simulate(3600, 10 * 24 * 3600);

// Print the final state of the Celestial bodies
universe.printBodies();