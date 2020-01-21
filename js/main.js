// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

// * Create Scene
const ourScene = new ScrollMagic.Scene({
  triggerElement: '#project01 img',
  // duration: '90%',
  triggerHook: 0.8,
  reverse: false,
})
  .setClassToggle('#project01', 'fade-in')
  .addIndicators({
    name: 'fade scene 1',
    colorTrigger: 'black',
    colorStart: '#79c695',
    colorEnd: 'red',
  }) // Requires a plugin
  .addTo(controller);

// * Create Scene
const ourScene2 = new ScrollMagic.Scene({
  triggerElement: '#project02 img',
  // duration: '90%',
  triggerHook: 0.8,
  reverse: false,
})
  .setClassToggle('#project02', 'fade-in')
  .addIndicators({
    name: 'fade scene 2',
    colorTrigger: 'black',
    colorStart: '#79c695',
    colorEnd: 'red',
  }) // Requires a plugin
  .addTo(controller);

// * Create Scene
const ourScene3 = new ScrollMagic.Scene({
  triggerElement: '#project03 img',
  // duration: '90%',
  triggerHook: 0.8,
  reverse: false,
})
  .setClassToggle('#project03', 'fade-in')
  .addIndicators({
    name: 'fade scene 3',
    colorTrigger: 'black',
    colorStart: '#79c695',
    colorEnd: 'red',
  }) // Requires a plugin
  .addTo(controller);
