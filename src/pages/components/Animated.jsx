import React from "react";

/*
 * Animated Component - A library to animate elements on scroll
 * Created by - Mohammad Sefatullah (mosefatullah)
 * 
 * Prefixes :-
   1. fade- (For fade animations)
   2. motion- (For motion animations)
 *
 */

export default function Animated({
  children,
  varient = "fade-in",
  speed = "",
  amount = 35,
  className = "",
}) {
  const element = React.useRef(null);
  const types = {
    "fade-in": ["__animation-fadeIn"],
    "fade-up": ["__animation-fadeUp"],
    "fade-left": ["__animation-fadeLeft"],
    "fade-right": ["__animation-fadeRight"],
    "motion-left": [
      "__animation-motionLeft",
      (n) => `translateX(${Math.abs(n / amount)}px)`,
    ],
    "motion-right": [
      "__animation-motionRight",
      (n) => `translateX(-${Math.abs(n / amount)}px)`,
    ],
    "motion-up": [
      "__animation-motionUp",
      (n) => `translateY(${Math.abs(n / amount)}px)`,
    ],
    "motion-down": [
      "__animation-motionDown",
      (n) => `translateY(-${Math.abs(n / amount)}px)`,
    ],
  };
  React.useEffect(() => {
    function animate(elem) {
      if (elem == null) return;
      var distInView = elem.getBoundingClientRect().top - window.innerHeight;
      if (distInView) {
        if (distInView < 0) {
          elem.classList.add("active");
        } else {
          elem.classList.remove("active");
        }
      }
    }

    function motion(elem, t) {
      window.addEventListener("scroll", function () {
        if (elem == null) return;
        if (window.innerWidth < 768)
          return (elem.style.transform = `translateX(0px) translateY(0px)`);
        var distInView = elem.getBoundingClientRect().top - window.innerHeight;
        if (
          distInView &&
          elem.getBoundingClientRect().top < window.innerHeight &&
          elem.getBoundingClientRect().bottom > 0
        ) {
          if (distInView < 0) {
            elem.style.transform = types[t][1](distInView);
          } else {
            elem.style.transform = `translateX(0px) translateY(0px)`;
          }
        }
      });
    }

    if (varient.includes("motion")) {
      motion(element.current, varient);
    } else {
      animate(element.current);
      window.addEventListener("scroll", function () {
        animate(element.current);
      });
    }
  }, []);
  return (
    <div
      className={"__animation " + types[varient][0] + " " + className}
      ref={element}
      data-speed={speed}
      data-animation={varient}
    >
      {children}
    </div>
  );
}
