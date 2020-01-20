const controller = new ScrollMagic.Controller();

const ourScene = new ScrollMagic.Scene({
  triggerElement: '#project01',
})
  .setClassToggle('#project01', 'fade-in')
  .addTo(controller);
