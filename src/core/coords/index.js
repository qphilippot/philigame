const Coords2D = require('./coords2D.model');
const Coords3D = require('./coords3D.model');

const POOL = require('../components/POOL.model');


module.exports = {
    _2D: new POOL({
        type: Coords2D,
        capacity: 20
    }),
    
    _3D: new POOL({
        type: Coords3D
    })
};