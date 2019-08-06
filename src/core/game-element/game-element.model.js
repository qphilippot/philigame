const Entity = require('@core/entity');

class GameElement extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.setTexture(settings.texture);
        this.setPosition(settings.position)
    }

    getX() {
        return this.data.position.x;
    }

    getY() {
        return this.data.position.y;
    }

    getWidth() {
        return this.data.size.width;
    }

    getHeight() {
        return this.data.size.height;
    }

    getPosition() {
        return this.data.position;
    }
    
    setPosition(position = {x: 0, y:0}) {
        this.data.position = position;
    }

    setSize(size = {width: 0, height:0}) {
        this.data.size = size;
    }

    setTexture(texture = null) {
        this.data.texture = texture;
    }

    render(context = null, x, y, w, h) {
        const d = this.data;
        const p = d.position;
        const s = d.size;
        
        console.log(typeof x);
        if (typeof x !== 'number') {
            x = p.x;
        }


        if (typeof y !== 'number') {
            y = p.y;
        }
 
        console.log('draw image', x, y, w || s.width, h || s.height)
        context.drawImage(d.texture, x, y, w || s.width, h || s.height);
        // context.drawImage(d.texture, x, y, w, h);
    }
}

module.exports = GameElement;