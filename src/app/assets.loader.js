module.exports = (GameDong) => {
    const AssetManager = GameDong.AssetManager;

    console.log('asset manager', AssetManager);
    AssetManager.store('tile', require('@assets/tiles/tile.png'));
    AssetManager.store('a', require('@assets/tiles/a.png'));
};