// Seleciona o canvas da section
const canvas = document.getElementById("dodecaCanvas");
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000); // Fundo preto no Three.js

const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });

function resizeRenderer() {
    const section = document.querySelector(".dodeca-section");
    const { width, height } = section.getBoundingClientRect();
    renderer.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}

resizeRenderer();

// Criando o dodecaedro
const geometry = new THREE.DodecahedronGeometry(2);
const edgesGeometry = new THREE.EdgesGeometry(geometry);
const edgesMaterial = new THREE.LineBasicMaterial({ color: 0x605d59, linewidth: 2 });
const edges = new THREE.LineSegments(edgesGeometry, edgesMaterial);

// Posicionando o dodecaedro
edges.position.set(0, 0, 7);// Move para cima e mais perto

scene.add(edges);

camera.position.z = 12;
camera.position.y = 0;
camera.position.x = 0;
    //camera.lookAt(edges.position);

let time = 0; // Variável para controlar o tempo do movimento
let mouseX = 0;
let mouseY = 0;

// Captura o movimento do mouse e normaliza os valores
window.addEventListener("mousemove", (event) => {
    const halfWidth = window.innerWidth / 2;
    const halfHeight = window.innerHeight / 2;

    mouseX = (event.clientX - halfWidth) / halfWidth; // Normaliza entre -1 e 1
    mouseY = (event.clientY - halfHeight) / halfHeight; // Normaliza entre -1 e 1
});

function animate() {
    requestAnimationFrame(animate);

    // Rotação normal
    edges.rotation.x += 0.002;
    edges.rotation.y += 0.002;

    // Movimento para cima e para baixo
    time += 0.02; // Controla a velocidade do movimento vertical
    edges.position.y = Math.sin(time) * 0.3; // Define o deslocamento vertical

    // Movimento baseado no mouse (multiplicadores ajustáveis)
    edges.position.x = mouseX * 0.3; // Move na horizontal
    edges.position.y += mouseY * 0.3; // Move na vertical (sem substituir a flutuação)

    renderer.render(scene, camera);
}

animate();

window.addEventListener('resize', resizeRenderer);