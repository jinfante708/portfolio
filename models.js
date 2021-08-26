import * as THREE from "./node_modules/three/build/three.module.js";

// Scene is like a container that holds all of our objects, cameras, and lights
const scene = new THREE.Scene();

/* 
  Camera mimics what the human eyeball sees
  - Field of View
  - Aspect Ratio (Based on user's browser window)
  - View Frustrum to control which objects are visible relative to the camera itself (Arguments 3 and 4)
      -0.1 and 1000 allows us to see pretty much everything from the camera lens
*/
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

/* Renderer renders the graphics to the scene
   - Needs to know what DOM elements to use 
*/
const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
  alpha: true
});


// Set Pixel Ratio to window's device pixel ratio
renderer.setPixelRatio( window.devicePixelRatio );

// Make it a full screen size canvas
renderer.setSize( window.innerWidth, window.innerHeight );

// render method draws out our scene
renderer.render( scene, camera );

/* Steps to creating an object 
   1. Geometry: the {x,y,z} points that make up a shape
   2. Material: the wrapping paper for an object
   3. Mesh: geometry + material
*/
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);
// Material usually requires a light source to bounce off of, but Basic Material doesn't
const material = new THREE.MeshStandardMaterial( { color: 0xff6347 } );

// Emits light in all directions 
const pointLight = new THREE.PointLight(0xffffff);

pointLight.position.set(5,5,5);

// Lighting across entire scene
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Lighting is confusing so three.js has a helper to show us the position of a pointLight
// const lightHelper = new THREE.PointLightHelper(pointLight);
// Grid helper gives a gray line since we're level with the grid
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

// Avatar
const jaysonTexture = new THREE.TextureLoader().load('/headshot.jpg');
const jayson = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial( { map: jaysonTexture } )
);

scene.add(jayson);

// Cube 1 (Next to quote block)
const quoteTexture = new THREE.TextureLoader();
const quoteArray = [
  new THREE.MeshBasicMaterial( { map: quoteTexture.load('/longboard.png') } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load('/crunch.png') } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load('/acoustic.png') } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load('/electric.png') } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load('/music.png') } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load('/basketball.png') } ),
];
const quote = new THREE.Mesh(
  new THREE.BoxGeometry(2,2,2),
  quoteArray
); 

scene.add(quote);

// Cube 2 (Next to About Me section)
const aboutMeTexture = new THREE.TextureLoader();
const aboutMeArray = [
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load('/bleach.png') } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load('/ca.png') } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load('/compsci.png') } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load('/flag.png') } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load('/sase.png') } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load('/stevens.png') } ),
];
const aboutMe = new THREE.Mesh(
  new THREE.BoxGeometry(2,2,2),
  aboutMeArray
); 

scene.add(aboutMe);

// Work Square 1
var workTexture1 = new THREE.PlaneGeometry(2,2,1,1);
var workTexture2 = new THREE.PlaneGeometry(2,2,1,1);

workTexture2.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

var textureFrontOne = new THREE.TextureLoader().load('/pnc.png');
var textureBackTwo = new THREE.TextureLoader().load('/ca.png');

var material1 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureFrontOne } );
var material2 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureBackTwo } );

var workCardOne = new THREE.Object3D();

var mesh1 = new THREE.Mesh(workTexture1, material1);
workCardOne.add(mesh1);
var mesh2 = new THREE.Mesh(workTexture2, material2);
workCardOne.add(mesh2);

scene.add(workCardOne);

// Work Square 2
var workTexture3 = new THREE.PlaneGeometry(2,2,1,1);
var workTexture4 = new THREE.PlaneGeometry(2,2,1,1);

workTexture4.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

var textureFrontThree = new THREE.TextureLoader().load('/ntc.png');
var textureBackFour = new THREE.TextureLoader().load('/numerix.png');

var material3 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureFrontThree } );
var material4 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: textureBackFour } );

var workCardTwo = new THREE.Object3D();

var mesh3 = new THREE.Mesh(workTexture3, material3);
workCardTwo.add(mesh3);
var mesh4 = new THREE.Mesh(workTexture4, material4);
workCardTwo.add(mesh4);

scene.add(workCardTwo);

// Project Card 1
var projectTexture1 = new THREE.PlaneGeometry(2,2,1,1);
var projectTexture2 = new THREE.PlaneGeometry(2,2,1,1);

projectTexture2.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

var projectTextureOne = new THREE.TextureLoader().load('/card.png');
var projectTextureTwo = new THREE.TextureLoader().load('/rutgers.png');

var material5 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: projectTextureOne } );
var material6 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: projectTextureTwo } );

var projectCardOne = new THREE.Object3D();

var mesh1 = new THREE.Mesh(projectTexture1, material5);
projectCardOne.add(mesh1);
var mesh2 = new THREE.Mesh(projectTexture2, material6);
projectCardOne.add(mesh2);

scene.add(projectCardOne);

// Project Card 2
var projectTexture3 = new THREE.PlaneGeometry(2,2,1,1);
var projectTexture4 = new THREE.PlaneGeometry(2,2,1,1);

projectTexture4.applyMatrix4(new THREE.Matrix4().makeRotationY(Math.PI));

var projectTextureThree = new THREE.TextureLoader().load('/agile.png');
var projectTextureFour = new THREE.TextureLoader().load('/transit.png');

var material7 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: projectTextureThree } );
var material8 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: projectTextureFour } );

var projectCardTwo = new THREE.Object3D();

var mesh1 = new THREE.Mesh(projectTexture3, material7);
projectCardTwo.add(mesh1);
var mesh2 = new THREE.Mesh(projectTexture4, material8);
projectCardTwo.add(mesh2);

scene.add(projectCardTwo);


// Three.js object positioning

jayson.position.z = -5;
jayson.position.x = 3;

quote.position.z = -5;
quote.position.x = -4;
quote.position.y = -4.5;

aboutMe.position.z = -5;
aboutMe.position.x = 4;
aboutMe.position.y = -9.5;

workCardOne.position.z = -5;
workCardOne.position.x = -5;
workCardOne.position.y = -15.1;

workCardTwo.position.z = -5;
workCardTwo.position.x = -5;
workCardTwo.position.y = -17.1;

projectCardOne.position.z = -5;
projectCardOne.position.x = 5;
projectCardOne.position.y = -21.3;

projectCardTwo.position.z = -5;
projectCardTwo.position.x = 5;
projectCardTwo.position.y = -24.3;

var mybutton = document.getElementById("myBtn");

function moveCamera() {
  // How far we are from the top of the webpage
  const t = document.body.getBoundingClientRect().top;

  jayson.rotation.y += 0.01;
  jayson.rotation.z += 0.01;

  // Needed so the three.js models appear to move in-line with the user scrolling
  camera.position.y = t * 0.008;

  if (document.documentElement.scrollTop > 20 || document.body.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

document.body.onscroll = moveCamera;
moveCamera();

// Recursive function that gives infinite loop to call render automatically (Similar to game loop)
function animate() {
  requestAnimationFrame( animate );

  jayson.rotation.y += 0.01;
  jayson.rotation.z += 0.01;

  quote.rotation.y += 0.01;
  quote.rotation.z += 0.01;

  aboutMe.rotation.y += 0.01;
  aboutMe.rotation.z += 0.01;

  workCardOne.rotation.y += 0.02;
  workCardTwo.rotation.y += 0.02;

  projectCardOne.rotation.y += 0.02;
  projectCardTwo.rotation.y += 0.02;

  renderer.render( scene, camera );
}

animate();