const Phaser = require('phaser');

const config = {
    type: Phaser.CANVAS, // Which renderer to use
    width: 0.8 * window.innerWidth,
    height: 0.9 * window.innerHeight,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    physics: {
        default: 'arcade',
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('background-tileset', 'assets/Tilesets/TutorialMapImage.png');
    this.load.spritesheet('elizabeth', 'assets/Sprites/Elizabeth.png', { frameWidth: 64, frameHeight: 128 });
    this.load.tilemapTiledJSON('newTutorial', 'assets/Tilemaps/NewTutorial.json');
}

var layer;
var rt;
var map;
var elizabeth;
function create ()
{    
    map = this.make.tilemap({ key: 'newTutorial' });

    var backgroundTiles = map.addTilesetImage('Background', 'background-tileset');

    layer = map.createLayer('Tile Layer 1', backgroundTiles, 0, 0);

    rt = this.add.renderTexture(0, 0, 16, 16);

    elizabeth = this.physics.add.sprite(250, 585, 'elizabeth');

    this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);

    this.cameras.main.startFollow(elizabeth, true);
    
    this.anims.create({
        key: 'walk-down',
        frames: this.anims.generateFrameNumbers('elizabeth', {start: 0, end: 5} ),
        frameRate: 3,
        repeat: 0
    });

    this.anims.create({
        key: 'walk-up',
        frames: this.anims.generateFrameNumbers('elizabeth', {start: 6, end: 9} ),
        frameRate: 3,
        repeat: 0
    });

    this.anims.create({
        key: 'walk-left',
        frames: this.anims.generateFrameNumbers('elizabeth', {start: 10, end: 15} ),
        frameRate: 4,
        repeat: 0
    });

    this.anims.create({
        key: 'walk-right',
        frames: this.anims.generateFrameNumbers('elizabeth', {start: 16, end: 21} ),
        frameRate: 4,
        repeat: 0
    });

     rt.draw(layer);
}

let keyA;
let keyS;
let keyD;
let keyW;
function update ()
{
    keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
    keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
    rt.draw(layer);
    
    if (keyW.isDown && keyD.isDown) {
        elizabeth.y-=3 / Math.sqrt(2);
        elizabeth.x+=3 / Math.sqrt(2);
        elizabeth.anims.play('walk-right', true);
    } else if (keyW.isDown && keyA.isDown) {
        elizabeth.y-=3 / Math.sqrt(2);
        elizabeth.x-=3 / Math.sqrt(2);
        elizabeth.anims.play('walk-left', true);
    } else if (keyS.isDown && keyD.isDown){
        elizabeth.y+=3 / Math.sqrt(2);
        elizabeth.x+=3 / Math.sqrt(2);
        elizabeth.anims.play('walk-right', true);
    } else if (keyS.isDown && keyA.isDown) {
        elizabeth.y+=3 / Math.sqrt(2);
        elizabeth.x-=3 / Math.sqrt(2);
        elizabeth.anims.play('walk-left', true);
    } else if (keyS.isDown) {
        elizabeth.y+=3;
        elizabeth.anims.play('walk-down', true);
    } else if (keyW.isDown) {
        elizabeth.y-=3;
        elizabeth.anims.play('walk-up', true);
    } else if (keyD.isDown) {
        elizabeth.x+=3;
        elizabeth.anims.play('walk-right', true);
    } else if (keyA.isDown) {
        elizabeth.x-=3;
        elizabeth.anims.play('walk-left', true);
    }  else {
        elizabeth.anims.pause();
    }
}