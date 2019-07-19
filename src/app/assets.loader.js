module.exports = (GameDong) => {
    const AssetManager = GameDong.AssetManager;

    console.log('asset manager', AssetManager);
    AssetManager.store('tile', require('@assets/tiles/tile.png'));
};