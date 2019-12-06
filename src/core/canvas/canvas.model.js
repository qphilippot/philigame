class Canvas {
    constructor(settings = {}) {
        this.node = this.getNode(settings);
        this.context = this.node.getContext('2d');
        this.init_Size(settings);
        this.init_Resolution(settings);
        this.init_Ratio();
       
        if (settings.name) {
            this.setName(settings.name);
        }

        this.container = this.getContainer(settings);
        
        if (this.container === null) {
            const parent = this.node.parentNode;
            if (parent) {
                this.container = parent;
                this.container.appendChild(this.node);
            }
        }

        else {
            this.container.appendChild(this.node);
        }
    }

    setName(name) {
        this.name = name;
        this.node.setAttribute('data-name', name);
    }

    setContainer(container) {
        this.contaner = container;
        this.container.appendChild(this.node);
        return this;
    }

    addClass(className) {
        this.node.classList.add(className);
        return this;
    }

    removeClass(className) {
        this.node.classList.remove(className);
        return this;
    }

    toggleClass(className) {
        this.node.classList.toggle(className);
        return this;
    }

    getNode(settings) {
        const type = typeof settings.node; 
        if (type === 'string') {
            return document.querySelector(settings.node);
        }

        else if (type === 'object') {
            return settings.node;
        }

        else {
            return document.createElement('canvas');
        }   
    }

    getContainer(settings) {
        const type = typeof settings.container;   
  
        if (type === 'string') {
            return document.getElementById(settings.container);
        }

        else if (type === 'object') {
            return settings.container;
        }

        else {
            return null;    
        }   
    }
    
    setBackground(color) {
        this.node.style.background = color;
        return this;
    }

    disableEvent() {
        this.node.style.pointerEvents = 'none';
        return this;
    }

    enableEvent() {
        this.node.style.pointerEvents = 'auto';
        return this;
    }

    init_Size(settings) {
        this.size = {};
        const size = settings.size;
        if (typeof size === 'undefined') {
            this.setSize(
                300,
                300,
                false
            );
            
        }

        else {
            this.setSize(
                size.width, 
                size.height,
                false
            );
        }

    }


    init_Resolution(settings) {
        this.resolution = {};
        const resolution = settings.resolution;

        if (typeof resolution === 'undefined') {    
            this.setResolution(
                this.size.width,
                this.size.height
            );
        }

        else {
            
            this.setResolution(
                resolution.width, 
                resolution.height
            );
        }

    }

    clear() {
        const resolution = this.resolution;
        this.context.clearRect(
            0, 0, 
            resolution.width, resolution.height
        );
    }

    init_Ratio() {
        this.ratio = {};
        this.updateRatio();
    }

    setSize(width, height, refreshRatio = true) {
        this.size.width = width;
        this.size.height = height;

        this.node.style.width = width + 'px';
        this.node.style.height = height + 'px';
        
        if (refreshRatio === true) {
            this.updateRatio();
        }
    }

    getSize() {
        return this.size;
    }

    getWidth() {
        return this.size.width;
    }

    getHeight() {
        return this.size.height;
    }

    getInnerWidth() {
        return this.resolution.width;
    }

    getInnerHeight() {
        return this.resolution.height;
    }

    getResolution() {
        return JSON.parse(JSON.stringify(this.resolution));
    }

    setResolution(width, height) {
        this.node.width = width;
        this.node.height = height;

        this.resolution.width = width;
        this.resolution.height = height;
    }

    updateRatio() {
        const size = this.size;
        const ratio = this.ratio;
        const resolution = this.resolution;

        if (size.width === 0 || size.height === 0) {
            ratio.x = 1;
            ratio.y = 1;
        }

        else {
            ratio.x = resolution.width / size.width;
            ratio.y = resolution.height / size.height;
        }
    }

    getPixelsCoordsFromPageCoords(coords) {
        const x = coords.x - this.node.offsetLeft + window.scrollX;
        const y = coords.y - this.node.offsetTop + window.scrollY;
        return {x, y};
    }

    getCellCoordsFromPixelCoords(coords) {
        const ratio  = this.ratio;
        const x      = Math.floor(coords.x * ratio.x);
        const y      = Math.floor(coords.y * ratio.y);
        return {x, y};
    }

    getNormalizedPosition(coords) {
        const x = (coords.x - this.node.offsetLeft + window.scrollX) / this.size.width;
        const y = (coords.y - this.node.offsetTop + window.scrollY) / this.size.height;
        return {x, y};
    }
}

module.exports = Canvas;