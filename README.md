
Timing Rules / Guidelines 

3. Timing in UI

There isn't one magic number, but generally:

Micro interaction

Things like:

button hover
icon change
color change

often feel good around:

~100–300ms
Component transitions

Cards, menus, panels:

~300–600ms
Large/spectacular transitions

Page reveals, hero animations:

~600ms+




GSAP - 

gsap.to()
CURRENT ─────────→ TARGET


gsap.from()
START ────────────→ CURRENT


gsap.fromTo()
START ────────────→ TARGET


TIMELINE -

WITHOUT TIMELINE 

gsap.to(".box", {
    x: 300,
    duration: 1
});

gsap.to(".box", {
    rotation: 180,
    duration: 1,
    delay: 1
});

gsap.to(".other", {
    opacity: 1,
    duration: 1,
    delay: 2
});


TIMELINE 

"+=0.5"
   ↑
timeline END + 0.5


"-=0.5"
   ↑
timeline END - 0.5


"<"
 ↑
previous START


">"
 ↑
previous END



GSAP ScrollTrigger - start / end.  start: element ( top - center - bottom ) viewport ( top - center - bottom)

GSAP 

FLIP - First Last Invert Play


MOUSE SCROLL - 

LERP - formula - current += (target - current) * factor; 
VELOCITY -  currentX = event.clientX -> velocityX = currentX - previousX -> previousX = currentX



SMOOTH SCROLL - 


lenis - smoothens the scroll can add lerp to increase and decrease the speed of scroll
damping - can basically add sort of like speed lowering slowly when coming to rest
Step 1 — Detect mouse velocity
let currentX = event.clientX;

velocityX = currentX - previousX;

previousX = currentX;

Step 2 — Move position using velocity

positionX += velocityX;
positionY += velocityY;

Step 3 — Apply damping
velocityX *= 0.9;
velocityY *= 0.9;
       