// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

// * Create Scene
const ourScene = new ScrollMagic.Scene({
  triggerElement: '#project01',
})
  .setClassToggle('#project01', 'fade-in')
  .addIndicators({
    name: 'fade Scene',
    colorTrigger: 'black',
    indent: 200,
    colorStart: '#79c695',
  }) // Requires a plugin
  .addTo(controller);
