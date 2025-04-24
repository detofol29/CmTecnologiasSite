// Inicializa o mapa centralizado no Brasil
const map = L.map('map').setView([-14.2350, -51.9253], 4); // Coordenadas centrais do Brasil

// Adiciona o tile layer (mapa base)
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; OpenStreetMap contributors & Carto',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);


const cidades = [
  { nome: 'Manaus', coords: [-3.1019, -60.0250] },
  { nome: 'Palmas', coords: [-10.1675, -48.3277] },
  { nome: 'Rio Verde', coords: [-17.7875, -50.9177] },
  { nome: 'Ceres', coords: [-15.3089, -49.5983] },
  { nome: 'Barra do Garças', coords: [-15.8900, -52.2567] },
  { nome: 'Aruanã', coords: [-14.9170, -51.0755] },
  { nome: 'Goiânia', coords: [-16.6786, -49.2540] },
  { nome: 'Anápolis', coords: [-16.3267, -48.9528] },
  { nome: 'Caldas Novas', coords: [-17.7403, -48.6217] },
  { nome: 'Piracanjuba', coords: [-17.3000, -49.0167] },
  { nome: 'Brasília', coords: [-15.7797, -47.9297] },
  { nome: 'Formosa', coords: [-15.5392, -47.3342] }
];

// Adiciona os marcadores no mapa
const iconePersonalizado = L.icon({
  iconUrl: 'https://cdn-icons-png.flaticon.com/512/1762/1762168.png', // pode ser SVG, PNG, etc.
  iconSize: [32, 32], // tamanho do ícone [largura, altura]
  iconAnchor: [16, 32], // ponto do ícone que fica ancorado no mapa
  popupAnchor: [0, -32] // onde aparece o popup relativo ao ícone
});
cidades.forEach((cidade) => {
  L.marker(cidade.coords, {icon: iconePersonalizado})
    .addTo(map)
    .bindPopup(`<strong>${cidade.nome}</strong>`);
});

const grupoDeMarcadores = L.featureGroup();

cidades.forEach((cidade) => {
  const marker = L.marker(cidade.coords).bindPopup(`<strong>${cidade.nome}</strong>`);
  grupoDeMarcadores.addLayer(marker);
});

// Adicionar marcadores personalizados


// L.marker([-15.7797, -47.9297], { icon: iconePersonalizado }).addTo(map)
//   .bindPopup("Brasília");

//grupoDeMarcadores.addTo(map);
map.fitBounds(grupoDeMarcadores.getBounds());