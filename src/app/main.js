console.log('main hello');

const app = {};

try {

    require('./class.loader')(app);
    require('./assets.loader')(app);
    
}

catch(error) {
    console.error(error);
}

finally {
    console.log('app', app)
    window.GameDong = app;
    
    
    console.log('GameDong', app)
}

module.exports  = app;