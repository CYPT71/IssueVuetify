const options = {
  fullScreen: {
    enable: true,
    zIndex: -1
  },
  fpsLimit: 300,
  particles: {
      number: {
        value: 300,
        density: {
          enable: true,
          value_area: 721.5354273894853
        }
      },
      color: {
        value: '#9C9492'
      },
      shape: {
        type: 'circle',
        stroke: {
          width: 0,
          color: '#9C9492'
        },
        polygon: {
          nb_sides: 12
        },
        image: {
          src: 'img/github.svg',
          width: 100,
          height: 100
        }
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 0,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#9C9492',
        opacity: 0.4,
        width: 1
      },
      move: {
        enable: true,
        speed: 3.1565905665290903,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'bounce',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detect_on: 'canvas',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 182.71737276780266,
          line_linked: {
            opacity: 1
          }
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3
        },
        repulse: {
          distance: 40.603860615067255,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        },
        remove: {
          particles_nb: 2
        }
      }
    },
  
  detectRetina: true
}
export default options;