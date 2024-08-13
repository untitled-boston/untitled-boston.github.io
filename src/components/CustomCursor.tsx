import React, { useEffect, useRef } from "react";
import { TweenLite, Back, Power4 } from "gsap";
import Hammer from "hammerjs";
import "../assets/css/CustomCursor.css";

const CustomCursor: React.FC = () => {
  const pointerRef = useRef<HTMLDivElement>(null);
  const pannerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pointer = pointerRef.current;
    const panner = pannerRef.current;

    const pointerSize = 16; // Assuming this is the size from CSS
    const limitX = () => window.innerWidth - (panner?.offsetWidth || 0);

    const getOffset = (el: HTMLElement) => {
      const rect = el.getBoundingClientRect();
      return {
        left: rect.left + window.scrollX,
        top: rect.top + window.scrollY,
      };
    };

    const isLeftOutOfScreen = () => getOffset(panner!).left > window.innerWidth;
    const isRightOutOfScreen = () => getOffset(panner!).left < 0;

    // Initially position the pointer off-screen
    TweenLite.set(pointer, { left: "-100px", top: "-100px" });

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX - pointerSize / 2 + "px";
      const y = e.clientY - pointerSize / 2 + "px";
      const target = e.target as HTMLElement;

      TweenLite.to(pointer, 0.5, {
        ease: Back.easeOut.config(1.7),
        left: x,
        top: y,
      });

      if (target.localName !== "html") {
        const parentElement = target.parentNode as HTMLElement | null;

        if (
          target.localName === "a" ||
          target.dataset.cursor === "false" ||
          (parentElement && parentElement.dataset.cursor === "false")
        ) {
          TweenLite.to(pointer, 1, { ease: Power4.easeOut, scale: 0 });
        } else {
          TweenLite.to(pointer, 1, { ease: Power4.easeOut, scale: 1 });
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (
        e.target instanceof HTMLElement &&
        (e.target.dataset.cursor === "stretch" ||
          (e.target.parentNode instanceof HTMLElement &&
            e.target.parentNode.dataset.cursor === "stretch"))
      ) {
        TweenLite.to(pointer, 0.3, {
          ease: Power4.easeOut,
          rotation: 0,
          width: pointerSize + 15,
          height: pointerSize - 10,
        });
      }
    };

    const handleMouseUp = () => {
      TweenLite.to(pointer, 0.3, {
        ease: Power4.easeOut,
        rotation: 45,
        width: pointerSize,
        height: pointerSize,
      });
    };

    const hammertime = new Hammer(panner!);
    hammertime.on("pan", function (ev) {
      const x = ev.center.x;

      TweenLite.to(panner, 1, { ease: Back.easeOut.config(1.7), left: x });
      TweenLite.to(panner, 1, {
        css: { className: "+=panning" },
        immediateRender: false,
      });

      if (ev.isFinal) {
        TweenLite.to(panner, 1, {
          css: { className: "-=panning" },
          immediateRender: false,
        });
        setTimeout(() => {
          if (x < 0) {
            TweenLite.to(panner, 1, {
              ease: Back.easeOut.config(1.7),
              left: 0,
            });
          }
          if (x > limitX()) {
            TweenLite.to(panner, 1, {
              ease: Back.easeOut.config(1.7),
              left: limitX(),
            });
          }
        }, 1000);
      }
    });

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("resize", () => {
      setTimeout(() => {
        if (isRightOutOfScreen()) {
          TweenLite.to(panner, 1, { ease: Back.easeOut.config(1.7), left: 0 });
        }
        if (isLeftOutOfScreen()) {
          TweenLite.to(panner, 1, {
            ease: Back.easeOut.config(1.7),
            left: limitX(),
          });
        }
      }, 1000);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      <div id="pointer" ref={pointerRef}></div>
      <div id="panner" ref={pannerRef}></div>
    </>
  );
};

export default CustomCursor;
