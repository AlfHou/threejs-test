import * as THREE from "three";


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 50, 0);
camera.up.set(0, 0, 1);
camera.lookAt(0, 0, 0);


const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const objects = [];

const radius = 1;
const widthSegments = 6;
const heightSegments = 6;
const sphereGeometry = new THREE.SphereBufferGeometry(radius, widthSegments, heightSegments);

const solarSystem = new THREE.Object3D();
scene.add(solarSystem);
objects.push(solarSystem);

const sunMaterial = new THREE.MeshPhongMaterial({ emissive: 0xFFFF00 });
const sunMesh = new THREE.Mesh(sphereGeometry, sunMaterial);
sunMesh.scale.set(5, 5, 5);

solarSystem.add(sunMesh);
objects.push(sunMesh);

const color = 0xFFFFFF;
const intensity = 3;
const light = new THREE.PointLight(color, intensity);

scene.add(light);

const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x2233FF, emissive: 0x112244 });
const earthMesh = new THREE.Mesh(sphereGeometry, earthMaterial);
earthMesh.position.x = 10;

solarSystem.add(earthMesh);
objects.push(earthMesh);

function animate(time) {
    time *= 0.001;

    requestAnimationFrame(animate);
    objects.forEach((obj) => {
        obj.rotation.y = time;
    });
    renderer.render(scene, camera);
}

animate();
