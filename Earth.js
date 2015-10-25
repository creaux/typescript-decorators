

export class Earth {

  trees: [string];

  constructor() {
    this.trees = [];
  }

  public plant(seed) {
    this.trees.push(seed);
  }
  
}
