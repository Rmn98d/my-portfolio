let helloTl =gsap.timeline(
    {
        repeat:-0.1,
        repeatDelay: -0.1,
        yoyo: true
    }
);


helloTl.from(".arrow", {
    duration: 0.9, 
    y: -30,
    opacity:0.1,
  });
  
  helloTl.to(".arrow", {
    y: 0,
    duration: 0.1,  
  });


let tl =gsap.timeline()


 tl.from('.logo,.navbar-links a,.btn',{
    y:-200,
    duration:1.4,
   opacity:0,
   stagger:0.3,
    
  })
 
  tl.from('#h',{
    x:-5000,
    scale:-0.1,
    rotate:140,
    opacity:0,
    duration:0.9,
  
    
  },1)
  tl.from('#e',{
    x:-600,
    y:900,
    scale:-0.1,
    rotate:180,
    opacity:0,
    duration:1,

  },1)
  tl.from('#l',{
    x:900,
    y:-4000,
    scale:-0.1,
    rotate:-180,
    duration:1,

  },1)
  tl.from('#ll',{
   
    y:1000,
    x:7000,
    scale:-0.1,
    rotate:-180,
    opacity:0,
    duration:1,

  },1)
  tl.from('#o',{
    x:800,
    scale:-0.1,
    rotate:-140,
    opacity:0,
    duration:1,
  },1)

  tl.from('h4',{
   x:1000,
   duration:1,
  },0.8)
  tl.from('h3',{
    x:-1000,
   duration:1,

   },0.8)




gsap.registerPlugin(ScrollTrigger);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutSection",
    scroller:"body",
    start: "top 50%",
    end: "bottom 10%", 
  }
});

tl2.from(".left", {
  x:-1000,
  duration:1,
  scrub:true

})
tl2.from("#right", {
  x:1000,
  duration:1

},-0.1);

tl2.from("#html,#css,#js,#react,#ph,#figma",{
  rotate:15,
  repeat:-1,
  yoyoEase: true,
  duration:1
})

let tl4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".helloSection",
    scroller: "body",
    start: "top 50%",
    end: "bottom 10%",
    scrub: true,  // Ensures smooth scrolling with animation progress
  }
});

tl4.fromTo(".shape5", {
  rotate: 0
}, {
  rotate: 30 * 10, // Rotates 10 times during the scroll
  duration:1
});

tl4.fromTo(".shape6", {
  rotate: 0
}, {
  rotate: -30 * 10, 
  duration:1
});


let tl5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".aboutSection",
    scroller: "body",
    start: "top 50%",
    end: "top  50%",
    scrub: true,  
  }
});


tl5.to(".shape",{
  scale:1

})

tl2.from(".shape7", {
  rotate: -30 * 10, 
  duration:20,
  repeat:-1,
  ease:true,
  scrub:true,

},1);
