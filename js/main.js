// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

// * Create Scene
const ourScene = new ScrollMagic.Scene({
  triggerElement: '#project01 img',
  duration: '90%',
  triggerHook: 0.9,
})
  .setClassToggle('#project01', 'fade-in')
  .addIndicators({
    name: 'fade Scene',
    colorTrigger: 'black',
    colorStart: '#79c695',
    colorEnd: 'red',
  }) // Requires a plugin
  .addTo(controller);
