var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var face = createSprite(35, 386, 30, 100);
face.shapeColor = "white";
var face = createSprite(80, 370, 30, 400);
face.shapeColor = "white";
var face = createSprite(120, 370, 30, 300);
face.shapeColor = "white";
var face = createSprite(165, 380, 30, 500);
face.shapeColor = "white";
var face = createSprite(210, 388, 30, 350);
face.shapeColor = "white";
var face = createSprite(250, 390, 30, 450);
face.shapeColor = "white";
var face = createSprite (290, 389, 30, 250);
face.shapeColor = "white"; 
var face = createSprite(333, 387, 30, 350);
face.shapeColor = "white";
var face = createSprite(290, 389, 30, 250) ;
face.shapeColor = "white"; 

function draw() { 
  background("black");
  drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
