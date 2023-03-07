const civilAircrafts = [
  "assets/avion-civil-1.jpg",
  "assets/avion-civil-2.jpg",
  "assets/avion-civil-3.jpg",
  "assets/avion-civil-4.jpg",
  "assets/avion-civil-5.jpg",
];

const militaryAircrafts = [
  "assets/avion-militar-1.jpg",
  "assets/avion-militar-2.jpg",
  "assets/avion-militar-3.jpg",
  "assets/avion-militar-4.jpg",
  "assets/avion-militar-5.jpg",
];

const civilHelicopters = [
  "assets/helicoptero-civil-1.jpg",
  "assets/helicoptero-civil-2.jpg",
  "assets/helicoptero-civil-3.jpg",
  "assets/helicoptero-civil-4.jpg",
  "assets/helicoptero-civil-5.jpg",
];

const militaryHelicopter = [
  "assets/helicoptero-militar-1.jpg",
  "assets/helicoptero-militar-2.jpg",
  "assets/helicoptero-militar-3.jpg",
  "assets/helicoptero-militar-4.jpg",
  "assets/helicoptero-militar-5.jpg",
];

class Gallery {
  constructor(civiles, militares) {
    this.civiles = civiles;
    this.militares = militares;
  }

  _getRamdonIndex(lenght) {
    const index = Math.floor(Math.random() * length);
    return index;
  }

  getRandomCivil() {
    return this.civiles[this._getRamdonIndex(this.civiles.lenght)];
  }

  getRandomMilitary() {
    return this.militares[this._getRamdonIndex(this.militares.lenght)];
  }

  getAll() {
    return this.civiles.concat(this.militares);
  }
}

class Painter {
  constructor() {
    this.createGallery();
  }

  createGallery() {
    const section = document.createElement('section');
    document.body.appendChild(section);
    this.gallery = section;
  }

  createImageTag(imageUrl) {
    const picture = document.createElement('picture');
    const img = document.createElement('img');
    
    img.src=imageUrl;
    picture.appendChild(img);

    return picture;
  }

  paintSingleImage(imageUrl) {
    
    this.gallery.appendChild(this.createImageTag(imageUrl));
  }

  paintMultipleImages(arrayOfImages) {

    for (let i = 0; i < arrayOfImages.length; i++) {
      this.gallery.appendChild(this.createImageTag(arrayOfImages[i]))
      
    }
  }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();

const civiles = [civilAircrafts, civilHelicopters];
const militares = [militaryAircrafts, militaryHelicopter];

console.log(aircrafts);
console.log(helicopters);
console.log(aircrafts.getRandomCivil());
console.log(helicopters.getRandomCivil());
console.log(aircrafts.getRandomMilitary());
console.log(aircrafts.getAll());

/*
console.log(aircrafts.getRandomMilitary());
console.log(helicopters.getRandomMilitary());
*/
