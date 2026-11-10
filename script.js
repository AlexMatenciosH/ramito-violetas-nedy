const bouquet = document.querySelector('#bouquet');
const scene = document.querySelector('#bouquetScene');
const bloomButton = document.querySelector('#bloomButton');
const microcopy = document.querySelector('#microcopy');
const message = document.querySelector('#flowerMessage');
const qualityTitle = document.querySelector('#qualityTitle');
const qualityText = document.querySelector('#qualityText');
const flowers = [...document.querySelectorAll('.flower')];

const compliments = [
  ['Tu constancia', 'Eres muy trabajadora; la dedicación con que persigues tus metas se nota.'],
  ['Tu independencia', 'Tienes una manera propia y admirable de abrirte camino.'],
  ['Tu fortaleza', 'Incluso en los días difíciles, hay una fuerza enorme dentro de ti.'],
  ['Tu determinación', 'Cuando algo importa, tu determinación habla por ti.'],
  ['Tu talento', 'Eres una gran profesional y sabemos que vas a llegar muy lejos.'],
  ['Tu belleza', 'Eres muy linda, y tu forma de ser te hace aún más especial.'],
  ['Tu valentía', 'Te atreves a seguir, aprender y crecer a tu propio ritmo.'],
  ['Tu esencia', 'Tienes algo único que hace más bonito el mundo de quienes te rodean.'],
  ['Todo lo que viene', 'Hay muchísimo por delante para ti. Confía en todo lo que ya eres.']
];

flowers.forEach((flower, index) => {
  flower.disabled = true;
  flower.setAttribute('aria-label', `Violeta ${index + 1}: ${compliments[index][0]}`);
  flower.addEventListener('click', () => {
    flowers.forEach(item => item.classList.toggle('selected', item === flower));
    qualityTitle.textContent = compliments[index][0];
    qualityText.textContent = compliments[index][1];
    message.classList.add('visible');
    scene.classList.add('scene-awake');
  });
});

bloomButton.addEventListener('click', () => {
  const isBloomed = bouquet.classList.toggle('bloomed');
  bloomButton.querySelector('span').textContent = isBloomed ? 'Guardar el ramito' : 'Hacer florecer';
  microcopy.textContent = isBloomed ? 'Cada violeta guarda una cualidad tuya: toca para descubrirla.' : 'Un toque y empieza la sorpresa.';
  flowers.forEach(flower => {
    flower.disabled = !isBloomed;
    flower.classList.remove('selected');
  });
  if (isBloomed) {
    qualityTitle.textContent = 'Nueve violetas, nueve motivos';
    qualityText.textContent = 'Cada flor guarda algo que admiramos de ti.';
    message.classList.add('visible');
    scene.classList.add('scene-awake');
  } else {
    message.classList.remove('visible');
    scene.classList.remove('scene-awake');
  }
});
