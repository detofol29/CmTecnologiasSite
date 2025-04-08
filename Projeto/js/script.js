// Seleciona o canvas
const canvas = document.getElementById("dodecaCanvas");

// Cena e câmera
const cena = new THREE.Scene();
cena.background = new THREE.Color(0x000000); // Fundo preto

const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
camera.position.set(0, 0, 12); // Posição inicial da câmera

// Renderizador
const renderizador = new THREE.WebGLRenderer({ canvas, alpha: true });

// Variáveis de controle
let tempo = 0;
let posMouseX = 0;
let posMouseY = 0;

let dodecaedro;

// ========== Funções ==========

// Ajusta o tamanho do renderizador com base na seção
function redimensionarRenderizador() {
    const secao = document.querySelector(".dodeca-section");
    const { width, height } = secao.getBoundingClientRect();

    renderizador.setSize(width, height);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
}


function criarDodecaedro() {
    const geometria = new THREE.DodecahedronGeometry(2);
    const geometriaBordas = new THREE.EdgesGeometry(geometria);
    const materialBordas = new THREE.LineBasicMaterial({ color: 0x605d59 });

    dodecaedro = new THREE.LineSegments(geometriaBordas, materialBordas);
    dodecaedro.position.set(0, 0, 7);

    cena.add(dodecaedro);
}


function registrarMovimentoMouse() {
    window.addEventListener("mousemove", (evento) => {
        const larguraMetade = window.innerWidth / 2;
        const alturaMetade = window.innerHeight / 2;

        posMouseX = (evento.clientX - larguraMetade) / larguraMetade;
        posMouseY = (evento.clientY - alturaMetade) / alturaMetade;
    });
}


function animar() {
    requestAnimationFrame(animar);

    if (!dodecaedro) return;

    dodecaedro.rotation.x += 0.002;
    dodecaedro.rotation.y += 0.002;

    tempo += 0.02;
    dodecaedro.position.y = Math.sin(tempo) * 0.3;
    dodecaedro.position.x = posMouseX * 0.3;
    dodecaedro.position.y += posMouseY * 0.3;

    renderizador.render(cena, camera);
}


function iniciarCena() {
    redimensionarRenderizador();
    criarDodecaedro();
    registrarMovimentoMouse();
    animar();
}


window.addEventListener("resize", redimensionarRenderizador);

iniciarCena();



// Canvas 2
const canvas2 = document.getElementById("dodecaCanvas2");

const cena2 = new THREE.Scene();
cena2.background = new THREE.Color(0x000000);

const camera2 = new THREE.PerspectiveCamera(75, canvas2.clientWidth / canvas2.clientHeight, 0.1, 1000);
camera2.position.set(0, 0, 12);

const renderizador2 = new THREE.WebGLRenderer({ canvas: canvas2, alpha: true });

let dodecaedro2;
let tempo2 = 0;

function redimensionarRenderizador2() {
    const secao = document.querySelector(".second-canvas");
    const { width, height } = secao.getBoundingClientRect();

    renderizador2.setSize(width, height);
    camera2.aspect = width / height;
    camera2.updateProjectionMatrix();
}

function criarDodecaedro2() {
    const geometria = new THREE.DodecahedronGeometry(1.5);
    const geometriaBordas = new THREE.EdgesGeometry(geometria);
    const materialBordas = new THREE.LineBasicMaterial({ color: 0x605d59 });

    dodecaedro2 = new THREE.LineSegments(geometriaBordas, materialBordas);
    dodecaedro2.position.set(0, 0, 7);

    cena2.add(dodecaedro2);
}

function animar2() {
    requestAnimationFrame(animar2);

    if (!dodecaedro2) return;

    dodecaedro2.rotation.x += 0.003;
    dodecaedro2.rotation.y += 0.003;

    tempo2 += 0.02;
    dodecaedro2.position.y = Math.sin(tempo2) * 0.2;

    renderizador2.render(cena2, camera2);
}

function iniciarCena2() {
    redimensionarRenderizador2();
    criarDodecaedro2();
    animar2();
}

window.addEventListener("resize", redimensionarRenderizador2);
iniciarCena2();

