import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim
//import { loadFull } from "tsparticles"; // loads tsparticles
import { useCallback, useMemo } from "react";

// tsParticles Repository: https://github.com/matteobruni/tsparticles
// tsParticles Website: https://particles.js.org/
const ParticlesComponent = (props) => {
  // using useMemo is not mandatory, but it's recommended since this value can be memoized if static
  const options = useMemo(() => {
    // using an empty options object will load the default options, which are static particles with no background and 3px radius, opacity 100%, white color
    // all options can be found here: https://particles.js.org/docs/interfaces/Options_Interfaces_IOptions.IOptions.html
    return {
      // "fullScreen": {
      //   "zIndex": -1,
      //   "enable": true
      // },
      // "interactivity": {
      //   "events": {
      //     "onClick": {
      //       "mode": "push"
      //     },
      //     "onHover": {
      //       "enable": true,
      //       "mode": "bubble"
      //     }
      //   },
      //   "modes": {
      //     "attract": {
      //       "distance": 200,
      //       "duration": 0.4,
      //       "easing": "ease-out-quad",
      //       "factor": 1,
      //       "maxSpeed": 50,
      //       "speed": 1
      //     },
      //     "bounce": {
      //       "distance": 200
      //     },
      //     "bubble": {
      //       "distance": 400,
      //       "duration": 2,
      //       "mix": false,
      //       "opacity": 0.8,
      //       "color": {
      //         "value": "#ff0000"
      //       },
      //       "size": 40,
      //       "divs": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "mix": false,
      //         "selectors": []
      //       }
      //     },
      //     "connect": {
      //       "distance": 80,
      //       "links": {
      //         "opacity": 0.5
      //       },
      //       "radius": 60
      //     },
      //     "grab": {
      //       "distance": 400,
      //       "links": {
      //         "blink": false,
      //         "consent": false,
      //         "opacity": 1
      //       }
      //     },
      //     "push": {
      //       "default": true,
      //       "groups": [],
      //       "quantity": 4
      //     },
      //     "remove": {
      //       "quantity": 2
      //     },
      //     "repulse": {
      //       "distance": 200,
      //       "duration": 0.4,
      //       "factor": 100,
      //       "speed": 1,
      //       "maxSpeed": 50,
      //       "easing": "ease-out-quad",
      //       "divs": {
      //         "distance": 200,
      //         "duration": 0.4,
      //         "factor": 100,
      //         "speed": 1,
      //         "maxSpeed": 50,
      //         "easing": "ease-out-quad",
      //         "selectors": []
      //       }
      //     },
      //     "trail": {
      //       "delay": 1,
      //       "pauseOnStop": false,
      //       "quantity": 1
      //     },
      //     "light": {
      //       "area": {
      //         "gradient": {
      //           "start": {
      //             "value": "#ffffff"
      //           },
      //           "stop": {
      //             "value": "#000000"
      //           }
      //         },
      //         "radius": 1000
      //       },
      //       "shadow": {
      //         "color": {
      //           "value": "#000000"
      //         },
      //         "length": 2000
      //       }
      //     }
      //   }
      // },
      // "particles": {
      //   "color": {
      //     "value": "#1b1e34"
      //   },
      //   "move": {
      //     "attract": {
      //       "rotate": {
      //         "x": 600,
      //         "y": 1200
      //       }
      //     },
      //     "enable": true,
      //     "outModes": {
      //       "bottom": "out",
      //       "left": "out",
      //       "right": "out",
      //       "top": "out"
      //     },
      //     "speed": 8
      //   },
      //   "number": {
      //     "density": {
      //       "enable": true
      //     },
      //     "value": 6
      //   },
      //   "opacity": {
      //     "random": {
      //       "enable": true,
      //       "minimumValue": 0.3
      //     },
      //     "value": {
      //       "min": 0.3,
      //       "max": 0.5
      //     },
      //     "animation": {
      //       "speed": 1,
      //       "minimumValue": 0.1
      //     }
      //   },
      //   "shape": {
      //     "options": {
      //       "polygon": {
      //         "sides": 6
      //       },
      //       "star": {
      //         "sides": 6
      //       }
      //     },
      //     "type": "polygon"
      //   },
      //   "size": {
      //     "random": {
      //       "enable": true,
      //       "minimumValue": 100
      //     },
      //     "value": {
      //       "min": 100,
      //       "max": 160
      //     },
      //     "animation": {
      //       "minimumValue": 40
      //     }
      //   },
      //   "life": {
      //     "count": 0,
      //     "delay": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 0,
      //       "sync": false
      //     },
      //     "duration": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0.0001
      //       },
      //       "value": 0,
      //       "sync": false
      //     }
      //   },
      //   "roll": {
      //     "darken": {
      //       "enable": false,
      //       "value": 0
      //     },
      //     "enable": false,
      //     "enlighten": {
      //       "enable": false,
      //       "value": 0
      //     },
      //     "mode": "vertical",
      //     "speed": 25
      //   },
      //   "tilt": {
      //     "random": {
      //       "enable": false,
      //       "minimumValue": 0
      //     },
      //     "value": 0,
      //     "animation": {
      //       "enable": false,
      //       "speed": 0,
      //       "decay": 0,
      //       "sync": false
      //     },
      //     "direction": "clockwise",
      //     "enable": false
      //   },
      //   "twinkle": {
      //     "lines": {
      //       "enable": false,
      //       "frequency": 0.05,
      //       "opacity": 1
      //     },
      //     "particles": {
      //       "enable": false,
      //       "frequency": 0.05,
      //       "opacity": 1
      //     }
      //   },
      //   "wobble": {
      //     "distance": 5,
      //     "enable": false,
      //     "speed": {
      //       "angle": 50,
      //       "move": 10
      //     }
      //   },
      //   "orbit": {
      //     "animation": {
      //       "count": 0,
      //       "enable": false,
      //       "speed": 1,
      //       "decay": 0,
      //       "sync": false
      //     },
      //     "enable": false,
      //     "opacity": 1,
      //     "rotation": {
      //       "random": {
      //         "enable": false,
      //         "minimumValue": 0
      //       },
      //       "value": 45
      //     },
      //     "width": 1
      //   },
      //   "links": {
      //     "blink": false,
      //     "color": {
      //       "value": "#ffffff"
      //     },
      //     "consent": false,
      //     "distance": 200,
      //     "enable": false,
      //     "frequency": 1,
      //     "opacity": 1,
      //     "shadow": {
      //       "blur": 5,
      //       "color": {
      //         "value": "#000"
      //       },
      //       "enable": false
      //     },
      //     "triangles": {
      //       "enable": false,
      //       "frequency": 1
      //     },
      //     "width": 2,
      //     "warp": false
      //   },
      //   "repulse": {
      //     "random": {
      //       "enable": false,
      //       "minimumValue": 0
      //     },
      //     "value": 0,
      //     "enabled": false,
      //     "distance": 1,
      //     "duration": 1,
      //     "factor": 1,
      //     "speed": 1
      //   }
      // }


      "fullScreen": {
        "zIndex": -1
      },
      "interactivity": {
        "events": {
          "onClick": {
            "enable": true,
            "mode": "push"
          },
          "onHover": {
            "enable": true,
            "mode": "repulse"
          }
        },
        "modes": {
          "attract": {
            "distance": 200,
            "duration": 0.4,
            "easing": "ease-out-quad",
            "factor": 1,
            "maxSpeed": 50,
            "speed": 1
          },
          "bounce": {
            "distance": 200
          },
          "bubble": {
            "distance": 200,
            "duration": 0.4,
            "mix": false
          },
          "connect": {
            "distance": 80,
            "links": {
              "opacity": 0.5
            },
            "radius": 60
          },
          "grab": {
            "distance": 100,
            "links": {
              "blink": false,
              "consent": false,
              "opacity": 1
            }
          },
          "push": {
            "default": true,
            "groups": [],
            "quantity": 4
          },
          "remove": {
            "quantity": 2
          },
          "repulse": {
            "distance": 200,
            "duration": 0.4,
            "factor": 100,
            "speed": 1,
            "maxSpeed": 50,
            "easing": "ease-out-quad",
            "divs": {
              "distance": 200,
              "duration": 0.4,
              "factor": 100,
              "speed": 1,
              "maxSpeed": 50,
              "easing": "ease-out-quad",
              "selectors": []
            }
          },
          "trail": {
            "delay": 1,
            "pauseOnStop": false,
            "quantity": 1
          },
          "light": {
            "area": {
              "gradient": {
                "start": {
                  "value": "#ffffff"
                },
                "stop": {
                  "value": "#000000"
                }
              },
              "radius": 1000
            },
            "shadow": {
              "color": {
                "value": "#000000"
              },
              "length": 2000
            }
          }
        }
      },
      "particles": {
        "color": {
          "value": "#000000",
          "animation": {
            "h": {
              "enable": true,
              "speed": 20
            }
          }
        },
        "move": {
          "enable": true,
          "outModes": {
            "bottom": "out",
            "left": "out",
            "right": "out",
            "top": "out"
          },
          "speed": 6
        },
        "number": {
          "density": {
            "enable": true
          },
          "value": 80
        },
        "opacity": {
          "value": 0.5
        },
        "size": {
          "value": {
            "min": 1,
            "max": 5
          }
        },
        "life": {
          "count": 0,
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0,
            "sync": false
          },
          "duration": {
            "random": {
              "enable": false,
              "minimumValue": 0.0001
            },
            "value": 0,
            "sync": false
          }
        },
        "roll": {
          "darken": {
            "enable": false,
            "value": 0
          },
          "enable": false,
          "enlighten": {
            "enable": false,
            "value": 0
          },
          "mode": "vertical",
          "speed": 25
        },
        "tilt": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "animation": {
            "enable": false,
            "speed": 0,
            "decay": 0,
            "sync": false
          },
          "direction": "clockwise",
          "enable": false
        },
        "twinkle": {
          "lines": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          },
          "particles": {
            "enable": false,
            "frequency": 0.05,
            "opacity": 1
          }
        },
        "wobble": {
          "distance": 5,
          "enable": false,
          "speed": {
            "angle": 50,
            "move": 10
          }
        },
        "orbit": {
          "animation": {
            "count": 0,
            "enable": false,
            "speed": 1,
            "decay": 0,
            "sync": false
          },
          "enable": false,
          "opacity": 1,
          "rotation": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 45
          },
          "width": 1
        },
        "links": {
          "blink": false,
          "color": {
            "value": "#000000"
          },
          "consent": false,
          "distance": 100,
          "enable": true,
          "frequency": 1,
          "opacity": 0.4,
          "shadow": {
            "blur": 5,
            "color": {
              "value": "#000"
            },
            "enable": false
          },
          "triangles": {
            "enable": false,
            "frequency": 1
          },
          "width": 1,
          "warp": false
        },
        "repulse": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "enabled": false,
          "distance": 1,
          "duration": 1,
          "factor": 1,
          "speed": 1
        }
      }
    };
  }, []);

  // useCallback is not mandatory, but it's recommended since this callback can be memoized if static
  const particlesInit = useCallback((engine) => {
    loadSlim(engine);
    // loadFull(engine); // for this sample the slim version is enough, choose whatever you prefer, slim is smaller in size but doesn't have all the plugins and the mouse trail feature
  }, []);

  // setting an id can be useful for identifying the right particles component, this is useful for multiple instances or reusable components
  return <Particles id={props.id} init={particlesInit} options={options} />;
};

export default ParticlesComponent;