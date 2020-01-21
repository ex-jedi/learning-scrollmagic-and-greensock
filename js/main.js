// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

// * Collect elements to fade in
const projects = document.querySelectorAll('.project');
let counter = 1;

projects.forEach(function(item) {
  // * Create Scene
  const ourScene = new ScrollMagic.Scene({
    triggerElement: item.children[0],
    // duration: '90%',
    triggerHook: 0.8,
    // reverse: false,
  })
    .setClassToggle(item, 'fade-in')
    .addIndicators({
      name: `fade scene ${counter}`,
      colorTrigger: 'black',
      colorStart: '#79c695',
      colorEnd: 'red',
    }) // Requires a plugin
    .addTo(controller);
  counter++;
});
