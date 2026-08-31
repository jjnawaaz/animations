
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

