const app = {};

try {
    require('./class.loader')(app);
    require('@autoload')(app);
    require('./assets.loader')(app);
   
}

catch(error) {
    console.error(error);
}

finally {
    window.GameDong = app;
}

module.exports  = app;