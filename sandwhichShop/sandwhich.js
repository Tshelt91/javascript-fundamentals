class Sandwhich {
  #bun;
  #meat;
  #vegetables;
  #cheese;
  constructor(bun, meat, vegetables, cheese) {
    this.#bun = bun;
    this.#cheese = cheese;
    this.#meat = meat;
    this.vegetables = vegetables;
  }

  get bun() {
    return this.#bun;
  }

  get cheese() {
    return this.#cheese;
  }

  get meat() {
    return this.#meat;
  }

  get vegetables() {
    return this.#vegetables;
  }

  showInfo(){
    const bun = this.#bun[0];
    const cheese = this.#cheese[0];
    const meat = this.#meat.slice[0-5];
    let veggies = "";

    console.log(bun);
    console.log();
  }
}

// Your sandwhich:
// Bun - Rye 
