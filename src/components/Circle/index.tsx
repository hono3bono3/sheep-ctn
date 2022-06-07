import p5 from "p5";

let r, s;
let hexagons: Hexagon[];

class Hexagon {
  p: p5;
  x: number;
  y: number;
  r: number;
  name: string;
  constructor(p: p5, x: number, y: number, r: number, name: string) {
    this.p = p;
    this.x = x;
    this.y = y;
    this.r = r;
    this.name = name;
  }

  render() {
    this.p.noFill();
    this.p.stroke(0);
    this.hexagon();
    this.p.text(this.name, this.x, this.y);
  }

  hexagon() {
    this.p.beginShape();
    for (let a = 0; a < 2 * this.p.PI; a += (2 * this.p.PI) / 6) {
      let x2 = this.p.cos(a) * this.r;
      let y2 = this.p.sin(a) * this.r;
      this.p.vertex(this.x + x2, this.y + y2);
    }
    this.p.endShape(this.p.CLOSE);
  }
}

export const Circle = (p: p5) => {
  p.setup = () => {
    p.createCanvas(640, 640);

    p.textAlign(p.CENTER, p.CENTER);

    r = 64;
    s = p.sqrt((3 * p.pow(r, 2)) / 4);
    hexagons = [];
    // create hexagons
    let counter = 0;
    for (let y = 0; y < p.height + s; y += 2 * s) {
      for (let x = 0; x < p.width + r; x += 3 * r) {
        hexagons.push(new Hexagon(p, x, y, r, String(counter++)));
        hexagons.push(new Hexagon(p, x + 1.5 * r, y + s, r, String(counter++)));
      }
    }
  };
  p.draw = () => {
    p.background(220);
    let nearesHexagon: Hexagon;
    hexagons.forEach((h) => {
      h.render();
      if (nearesHexagon === undefined) {
        nearesHexagon = h;
      }
    });
  };
};
