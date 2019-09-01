class Tile {
    constructor(settings = {}) {
        this.src = settings.value;
        this.name = settings.name;
        this.setImg(settings.img);

        this.details = settings.details

    }

    setImg(img = new Image()) {
        this.img = img;
        this.loaded = img.height !== 0;
    }

    isLoaded() {
        return this.loaded;
    }

    load() {
        return new Promise(resolve => {
            const img = new Image();
            img.onload = () => {
                this.setImg(img);
                this.img = img;
                resolve(img);
            };

            img.src = this.src;
            img.name = this.name;
        });
    }

    setDetails(details) {
        this.details = details;
    }
}

module.exports = Tile;