const Camera = require('../camera');
const Map = require('../../map');

module.exports = {
    getCamera() {
        return new Camera({
            radius: 5,
            position: {
                x: 0.5,
                y: 0.5
            }
        });
    },
    
    getEnvironment() {
        return new Map({
            name: 'map',
            nbRows: 100,
            nbColumns: 100
        });
    } 
};