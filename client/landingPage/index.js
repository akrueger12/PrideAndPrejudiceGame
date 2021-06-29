// const Phaser = require('phaser');

// const config = {
//     type: Phaser.CANVAS, // Which renderer to use
//     width: 0.8 * window.innerWidth,
//     height: 0.9 * window.innerHeight,
//     physics: {
//         default: 'arcade',
//     },
//     scene: {
//         preload: preload,
//         create: create,
//         update: update
//     }
// };

// var game = new Phaser.Game(config);

// function preload ()
// {
//     this.load.image('building-blocks', '/assets/tilesets/BuildingBlocks.png');
//     this.load.image('ground-blocks', '/assets/tilesets/GroundBlocks.png');
//     this.load.spritesheet('elizabeth', 'assets/sprites/Elizabeth.png', { frameWidth: 64, frameHeight: 128 });
//     this.load.tilemapTiledJSON('tutorialMap', 'assets/TileMaps/TutorialMap.json');
// }

// var layer;
// var rt;
// var elizabeth;
// function create ()
// {    
//     map = this.make.tilemap({ key: 'tutorialMap' });

//     var buildingTiles = map.addTilesetImage('BuildingBlocks', 'building-blocks');
//     var groundTiles = map.addTilesetImage('GroundBlocks', 'ground-blocks');

//     layer = map.createLayer('Ground', [groundTiles, buildingTiles], 0, 0);
//     layer2 = map.createLayer('Paths\/foliage', [groundTiles, buildingTiles], 0, 0);
//     layer3 = map.createLayer('Extra foliage', [groundTiles,buildingTiles], 0,0);

//     rt = this.add.renderTexture(0, 0, 32, 32);

    
//     elizabeth = this.physics.add.sprite(100, 100, 'elizabeth');

//     this.cameras.main.setBounds(0, 0, map.widthInPixels, map.heightInPixels);
//     this.cameras.main.startFollow(elizabeth, true);
    
//     this.anims.create({
//         key: 'walk-down',
//         frames: this.anims.generateFrameNumbers('elizabeth', {start: 0, end: 5} ),
//         frameRate: 3,
//         repeat: 0
//     });

//     this.anims.create({
//         key: 'walk-up',
//         frames: this.anims.generateFrameNumbers('elizabeth', {start: 6, end: 9} ),
//         frameRate: 3,
//         repeat: 0
//     });

//     this.anims.create({
//         key: 'walk-left',
//         frames: this.anims.generateFrameNumbers('elizabeth', {start: 10, end: 15} ),
//         frameRate: 4,
//         repeat: 0
//     });

//     this.anims.create({
//         key: 'walk-right',
//         frames: this.anims.generateFrameNumbers('elizabeth', {start: 16, end: 21} ),
//         frameRate: 4,
//         repeat: 0
//     });

//     rt.draw(layer);
//     rt.draw(layer2);
// }

// let keyA;
// let keyS;
// let keyD;
// let keyW;
// function update ()
// {
//     keyA = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A);
//     keyS = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
//     keyD = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
//     keyW = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
//     rt.draw(layer);
    
//     if (keyW.isDown && keyD.isDown) {
//         elizabeth.y-=3 / Math.sqrt(2);
//         elizabeth.x+=3 / Math.sqrt(2);
//         elizabeth.anims.play('walk-right', true);
//     } else if (keyW.isDown && keyA.isDown) {
//         elizabeth.y-=3 / Math.sqrt(2);
//         elizabeth.x-=3 / Math.sqrt(2);
//         elizabeth.anims.play('walk-left', true);
//     } else if (keyS.isDown && keyD.isDown){
//         elizabeth.y+=3 / Math.sqrt(2);
//         elizabeth.x+=3 / Math.sqrt(2);
//         elizabeth.anims.play('walk-right', true);
//     } else if (keyS.isDown && keyA.isDown) {
//         elizabeth.y+=3 / Math.sqrt(2);
//         elizabeth.x-=3 / Math.sqrt(2);
//         elizabeth.anims.play('walk-left', true);
//     } else if (keyS.isDown) {
//         elizabeth.y+=3;
//         elizabeth.anims.play('walk-down', true);
//     } else if (keyW.isDown) {
//         elizabeth.y-=3;
//         elizabeth.anims.play('walk-up', true);
//     } else if (keyD.isDown) {
//         elizabeth.x+=3;
//         elizabeth.anims.play('walk-right', true);
//     } else if (keyA.isDown) {
//         elizabeth.x-=3;
//         elizabeth.anims.play('walk-left', true);
//     }  else {
//         elizabeth.anims.pause();
//     }
// }
function togglePasswordVisibility(){
    var x = document.getElementById("passwordInput");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

function makePopupVisible(){
  var x = document.getElementById("infoPopup");
  x.style.display = "block";
}

function makePopupInvisible(){
  var x = document.getElementById("infoPopup");
  x.style.display = "none";
}

window.togglePasswordVisibility = togglePasswordVisibility;
window.makePopupVisible = makePopupVisible;
window.makePopupInvisible = makePopupInvisible;