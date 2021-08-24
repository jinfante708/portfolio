import './style.css'

import * as THREE from 'three';

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

let scene, camera, renderer;
var crow, controls;

function init() {
   scene = new THREE.Scene();
   scene.background = new THREE.Color(0xdddddd);

   camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight , 0.1, 1000)
   camera.position.set(-100, 50, 35);

   const hlight = new THREE.AmbientLight (0x404040);
   scene.add(hlight);

   const directionalLight = new THREE.DirectionalLight(0xffffff,0.5);
   scene.add(directionalLight);

   renderer = new THREE.WebGLRenderer({
      antialias:true,
      alpha: true,
      canvas: document.querySelector('#bg')
   });
   renderer.setSize(window.innerWidth, window.innerHeight);
   document.body.appendChild(renderer.domElement);

   let loader = new GLTFLoader();
   loader.load('scene.gltf', function(gltf) {
      crow = gltf.scene.children[0];
      scene.add(crow);
      animate();
   });

   controls = new OrbitControls(camera, renderer.domElement);
   // controls.addEventListener('change', renderer);
   controls.enableDamping = true;
   controls.dampingFactor = 0.25;
   controls.enableZoom = true;
   // controls.autoRotate = true;
}

function animate() {
   // crow.rotation.z += 0.01;
   controls.update()
   requestAnimationFrame(animate);
   renderer.render(scene, camera);
}

init();