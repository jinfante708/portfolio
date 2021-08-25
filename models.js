// import './style.css'

// import * as THREE from 'three';
import * as THREE from "./node_modules/three/build/three.module.js";

import headshot from '/assets/Headshot.jpg';

import longboard from '/assets/Square1/longboard.png';
import crunch from '/assets/Square1/crunch.png';
import acoustic from '/assets/Square1/acoustic.png';
import electric from '/assets/Square1/electric.png';
import music from '/assets/Square1/music.png';
import basketball from '/assets/Square1/basketball.png';

import bleach from '/assets/Square2/bleach.png';
import ca from '/assets/Square2/ca.png';
import compsci from '/assets/Square2/compsci.png';
import flag from '/assets/Square2/flag.png';
import sase from '/assets/Square2/sase.png';
import stevens from '/assets/Square2/stevens.png';

import ntc from '/assets/Square3/ntc.png';
import numerix from '/assets/Square3/numerix.png';
import pnc from '/assets/Square3/pnc.png';

import agile from '/assets/Square4/agile.png';
import card from '/assets/Square4/card.png';
import rutgers from '/assets/Square4/rutgers.png';
import transit from '/assets/Square4/transit.png';


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

// const renderer = new THREE.WebGLRenderer();

// Set Pixel Ratio to window's device pixel ratio
renderer.setPixelRatio( window.devicePixelRatio );

// Make it a full screen size canvas
renderer.setSize( window.innerWidth, window.innerHeight );

// Camera is currently positioned at middle of scene so move it along z-axis
// camera.position.setZ(30);
// camera.position.setX(-3);

// document.body.appendChild( renderer.domElement );

// render method draws out our scene
renderer.render( scene, camera );

/* Steps to creating an object 
   1. Geometry: the {x,y,z} points that make up a shape
   2. Material: the wrapping paper for an object
   3. Mesh: geometry + material
*/
const geometry = new THREE.TorusGeometry( 10, 3, 16, 100);
// Material usually requires a light source to bounce off of, but Basic Material doesn't
// const material = new THREE.MeshBasicMaterial( { color: 0xFF6347, wireframe: true } );
const material = new THREE.MeshStandardMaterial( { color: 0xff6347 } );
const torus = new THREE.Mesh( geometry, material );

// scene.add(torus);

// Emits light in all directions 
const pointLight = new THREE.PointLight(0xffffff);

// Light is positioned inside of the torus
pointLight.position.set(5,5,5);

// Light is positioned farther away and lights up a larger area
// pointLight.position.set(20,20,20);

// Lighting across entire scene
const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Lighting is confusing so three.js has a helper to show us the position of a pointLight
// const lightHelper = new THREE.PointLightHelper(pointLight);
// Grid helper gives a gray line since we're level with the grid
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper);

// const controls = new OrbitControls(camera, renderer.domElement);

// Populate background with random shapes
function addStar() {
  const geometry = new THREE.SphereGeometry(0.25, 24, 24);
  const material = new THREE.MeshStandardMaterial( { color: 0xffffff } );
  const star = new THREE.Mesh( geometry, material );

  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));

  star.position.set(x, y, z);
  scene.add(star);
}

// Array(200).fill().forEach(addStar);

// Background

// const spaceTexture = new THREE.TextureLoader().load('peterandrz.JPG');
// scene.background = spaceTexture;

// Avatar

const jaysonTexture = new THREE.TextureLoader().load(headshot);
const jayson = new THREE.Mesh(
  new THREE.BoxGeometry(3,3,3),
  new THREE.MeshBasicMaterial( { map: jaysonTexture } )
);

scene.add(jayson);

const quoteTexture = new THREE.TextureLoader();
quoteTexture.setPath('/assets/');
const quoteArray = [
  new THREE.MeshBasicMaterial( { map: quoteTexture.load(longboard) } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load(crunch) } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load(acoustic) } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load(electric) } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load(music) } ),
  new THREE.MeshBasicMaterial( { map: quoteTexture.load(basketball) } ),
];
const quote = new THREE.Mesh(
  new THREE.BoxGeometry(2,2,2),
  quoteArray
); 

scene.add(quote);

const aboutMeTexture = new THREE.TextureLoader();
aboutMeTexture.setPath('/assets/');
const aboutMeArray = [
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load(bleach) } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load(ca) } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load(compsci) } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load(flag) } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load(sase) } ),
  new THREE.MeshBasicMaterial( { map: aboutMeTexture.load(stevens) } ),
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

var textureFrontOne = new THREE.TextureLoader().load('/assets/pnc.png');
var textureBackTwo = new THREE.TextureLoader().load('/assets/ca.png');

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

var textureFrontThree = new THREE.TextureLoader().load('/assets/ntc.png');
var textureBackFour = new THREE.TextureLoader().load('/assets/numerix.png');

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

var projectTextureOne = new THREE.TextureLoader().load('/assets/card.png');
var projectTextureTwo = new THREE.TextureLoader().load('/assets/rutgers.png');

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

var projectTextureThree = new THREE.TextureLoader().load('/assets/agile.png');
var projectTextureFour = new THREE.TextureLoader().load('/assets/transit.png');

var material7 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: projectTextureThree } );
var material8 = new THREE.MeshBasicMaterial( { color: 0xffffff, map: projectTextureFour } );

var projectCardTwo = new THREE.Object3D();

var mesh1 = new THREE.Mesh(projectTexture3, material7);
projectCardTwo.add(mesh1);
var mesh2 = new THREE.Mesh(projectTexture4, material8);
projectCardTwo.add(mesh2);

scene.add(projectCardTwo);

// Moon
// const hunnidTexture = new THREE.TextureLoader().load('100.png');
// const hunnid = new THREE.Mesh(
//   new THREE.SphereGeometry(3,32,32),
//   new THREE.MeshStandardMaterial({
//     map: hunnidTexture,
//   })
// );

// scene.add(hunnid);

// hunnid.position.z = 30;
// hunnid.position.setX(-10);

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
workCardOne.position.y = -14.75;

workCardTwo.position.z = -5;
workCardTwo.position.x = -5;
workCardTwo.position.y = -16.75;

projectCardOne.position.z = -5;
projectCardOne.position.x = 5;
projectCardOne.position.y = -21.3;

projectCardTwo.position.z = -5;
projectCardTwo.position.x = 5;
projectCardTwo.position.y = -24.3;

var item2 = document.getElementById("item2");

var mybutton = document.getElementById("myBtn");

function moveCamera() {
  // How far we are from the top of the webpage
  const t = document.body.getBoundingClientRect().top;

  // hunnid.rotation.x += 0.05;
  // hunnid.rotation.y += 0.075;
  // hunnid.rotation.z += 0.05;

  jayson.rotation.y += 0.01;
  jayson.rotation.z += 0.01;

  // camera.position.z = t * -0.01;
  // camera.position.x = t * -0.0002;
  // camera.rotation.y = t * -0.0002;

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

// var mesh1x = 2.1;
// var mesh1y = 3;

// var mesh2x = 3;
// var mesh2y = 3;


function animate() {
  requestAnimationFrame( animate );

  // torus.rotation.x += 0.01;
  // torus.rotation.y += 0.005;
  // torus.rotation.z += 0.01;

  // hunnid.rotation.x += 0.005;

  jayson.rotation.y += 0.01;
  jayson.rotation.z += 0.01;

  quote.rotation.y += 0.01;
  quote.rotation.z += 0.01;

  aboutMe.rotation.y += 0.01;
  aboutMe.rotation.z += 0.01;

  // workCardOne.rotation.x += 0.05;
  workCardOne.rotation.y += 0.02;
  // workCardOne.rotation.z += 0.5;

  // while (mesh1.scale.x < mesh1x){
  //   mesh1.scale.x += 0.001;
  //   mesh1.scale.y += 0.001;
  //   mesh2.scale.x += 0.001;
  //   mesh2.scale.y += 0.001;
  // }

  // while (mesh1.scale.x > 2){
  //   mesh1.scale.x -= 0.001;
  //   mesh1.scale.y -= 0.001;
  //   mesh2.scale.x -= 0.001;
  //   mesh2.scale.y -= 0.001;
  // }

  // workCardTwo.rotation.x += 0.05;
  workCardTwo.rotation.y += 0.02;
  // workCardTwo.rotation.z += 0.5;

  projectCardOne.rotation.y += 0.02;

  projectCardTwo.rotation.y += 0.02;
  // controls.update();

  renderer.render( scene, camera );
}

animate();