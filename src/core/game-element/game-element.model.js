const Entity = require('@core/entity');

class GameElement extends Entity {
    constructor(settings = {}) {
        super(settings);

        this.setTexture(settings.texture);
        this.setPosition(settings.position)
    }


    setPosition(position = {x: 0, y:0}) {
        this.data.position = position;
    }

    setSize(size = {width: 0, height:0}) {
        this.data.size = size;
    }

    setTexture(texture = null) {
        console.log('setTexture', texture);
        
        this.data.texture = texture;
    }

    render(context = null, x, y, w, h) {
        const d = this.data;
        const p = d.position;
        const s = d.size;

        context.drawImage(d.texture, p.x, p.y, s.width, s.height);
        // context.drawImage(d.texture, x, y, w, h);
    }
}

module.exports = GameElement;