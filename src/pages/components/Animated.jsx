import React from "react";

/*
 * Animated Component - A library to animate elements on scroll
 * Created by - Mohammad Sefatullah (mosefatullah)
 * 
 * Prefixes :-
   1. fade- (For fade animations)
   2. motion- (For motion animations)
   2. txt- (For text animations)
   3. bg- (For background animations)
 *
 */

export default function Animated({
  children,
  varient = "fade-in",
  speed = "",
  amount = 35,
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
        if (window.innerWidth < 768) return;
        var distInView = elem.getBoundingClientRect().top - window.innerHeight;
        if (distInView) {
          if (distInView < 0) {
            elem.style.transform = types[t][1](distInView);
          } else {
            elem.style.transform = `translateX(0px) translateY(0px)`;
          }
        }
      });
    }

    function applyThat(t) {
      if (t.includes("motion")) {
        motion(element.current, t);
      } else {
        animate(element.current);
        window.addEventListener("scroll", function () {
          animate(element.current);
        });
      }
    }

    if (varient.split(" ").length > 1) {
      varient.split(" ").forEach((type) => {
        applyThat(type);
      });
    } else {
      applyThat(varient);
    }
  }, []);
  return (
    <div
      className={
        "__animation " + varient.split(" ").length > 1
          ? varient
              .split(" ")
              .map((type) => types[type][0])
              .join(" ")
          : types[varient][0]
      }
      ref={element}
      data-speed={speed}
      data-animation={varient}
    >
      {children}
    </div>
  );
}
