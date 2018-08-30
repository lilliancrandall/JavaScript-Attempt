




function setup() {
createCanvas(windowWidth,windowHeight);

// background(127,255,212);
}

var a = 0;

const wrapperEl = document.querySelector('.wrapper');
  const numberOfEls = 90;
  const duration = 6000;
  const delay = duration / numberOfEls;

  let tl = anime.timeline({
    duration: delay,
    complete: function() { tl.restart(); }
  });

  function createEl(i) {
    let el = document.createElement('div');
    const rotate = (360 / numberOfEls) * i;
    const translateY = -50;
    const hue = Math.round(360 / numberOfEls * i);
    el.classList.add('el');
    el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
    el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
    tl.add({
      begin: function() {
        anime({
          targets: el,
          backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
          rotate: [rotate + 'deg', rotate + 10 +'deg'],
          translateY: [translateY + '%', translateY + 10 + '%'],
          scale: [1, 1.25],
          easing: 'easeInOutSine',
          direction: 'alternate',
          duration: duration * .1
        });
      }
    });
    wrapperEl.appendChild(el);
  };

  for (let i = 0; i < numberOfEls; i++) createEl(i);


function draw(){


  clear();



  a = (a + PI*0.01);
  noStroke();

  space();
  // draw moon either behind or infront planet
  if(cos(a)>0){
    planet();
    moon();
  } else {
    moon();
    planet();
  }

  moon2();
}

function moon(){
  x = sin(a) * 130 + 300;
  y = cos(a) * 20 + 300;

  fill(240,85,171);

  ellipse(x, y, 25, 25);
}

function moon2(){
  //blendMode(LIGHTEST);

  b = a * 1.63;
  x = sin(b) * 40;
  y = cos(b) * 80;

  coord = rotateXY(x,y,2.3);
  x = coord.x+300;
  y = coord.y+300;
  console.log(x)
  fill(240,85,171);

  ellipse(x, y, 10, 10);
}

function rotateXY(x,y, theta){
  return {
    x: x*cos(theta) - y*sin(theta),
    y: x*sin(theta) + y*cos(theta)
  };
}

function space(){
  fill(127,255,212);
  rect(0,0,windowWidth,windowHeight);
  fill(255);
  textFont('Futura');
  textSize(32);
text('LILLIAN CRANDALL', 400, 500);

}

function planet(){
  //blendMode(LIGHTEST);
  fill(255,182,193);
  //ellipse(150,150, 50, 50);
  ellipse(300,300, 80, 80);
  //blendMode(DARKEST);
  fill(127,255,255);
  ellipse(289,290, 80, 80);
  //ellipse(135,140, 60, 60);
  //blendMode(BLEND);
}
