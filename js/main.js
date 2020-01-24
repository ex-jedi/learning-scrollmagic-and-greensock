// * Init ScrollMagic
const controller = new ScrollMagic.Controller();

// * Pin intro
let pinIntroScene = new ScrollMagic.Scene({
  triggerElement: '#intro',
  triggerHook: 0,
  duration: '30%',
})
  .setPin('#intro', { pushFollowers: false })
  .addTo(controller)
  .addIndicators({
    name: 'pin one',
    colorTrigger: 'orange',
    colorEnd: 'orange',
  }); // Requires a plugin;

// * Pin again
let pinIntroSceneTwo = new ScrollMagic.Scene({
  triggerElement: '#project01',
  triggerHook: 0.4,
})
  .setPin('#intro', { pushFollowers: false })
  .addTo(controller)
  .addIndicators({
    name: 'pin two',
    colorTrigger: 'purple',
    colorStart: 'purple',
    colorEnd: 'red',
  }); // Requires a plugin;;

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
