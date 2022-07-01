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
        <Particles style={{ position: "fixed", zIndex: "-1", height:"100%" }}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
                color: {
                    value: "linear-gradient(0deg, rgba(2,0,36,1) 0%, rgba(82,169,139,1) 40%, rgba(190,190,199,1) 100%)",
                },
            },
            fpsLimit: 60,

            particles: {
              color: {
                value: 
                        "rgb(180,195,200)",
                fill: false,
              },

            move: {
                direction: "bottom",
                enable: true,
                outModes: "out",
                random: true,
                speed: 3,
                straight: true,
              },
            number: {
              density: {
                  enable: true,
                  area: 700,
                },
                value: 190,
              },
            
            roll: {
              darken: {
                enable: true,
                value: 30,
              },
              enlighten: {
                enable: true,
                value: 30,
              },
              enable: true,
              mode: "horizontal",
              speed: {
                min: 10,
                max: 15,
              },
            },

            rotate: {
                animation: {
                  enable: true,
                  speed: 8,
                  sync: false,
                },
            },

              opacity: {
                value: 0.5,
              },
              shape: {
                type: ["square", "triangle", "polygon"],
              },
              size: {
                value: { min: 6, max: 7 },
              },

              zIndex: {
                value: { min: 0, max: 100 }
              }
            },
            detectRetina: true,
          }}
        />
      );
    };