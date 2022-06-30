import React from 'react';
import { InvisiDiv } from '../../styles';

import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"

//=====-----=====-----=====-----=====----→APP STARTS HERE←-----=====-----=====-----=====-----=====
export const AnimatedBG = () => {
    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };

      const particlesLoaded = (container) => {
        console.log(container);
      };

      return (
        <Particles style={{ position: "fixed", zIndex: "-1" }}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
                color: {
                    value: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(82,169,139,1) 40%, rgba(255,255,255,1) 100%)",
                },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
                resize: true,
              },
              modes: {
                push: {
                  quantity: 4,
                },
                repulse: {
                  distance: 200,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },

              move: {
                direction: "bottom",
                enable: true,
                outModes: {
                  default: "destroy",
                },
                random: true,
                speed: 3,
                straight: true,
                
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },

              rotate: {
                animation: {
                  enable: true,
                  speed: 4,
                  sync: false,
                },
            },

              opacity: {
                value: 0.5,
              },
              shape: {
                type: "triangle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      );
    };