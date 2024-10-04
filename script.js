// var tl = gsap.timeline();
// tl.from("#page1",{
//     height:"100%",
//     duration:1,
//     delay:1
// })
// tl.from("#page2",{
//     height:"100%",
// })
// tl.from("#home",{
//     height:0,
//     stagger:1
// })
// tl.from("#featured",{
//     height:0
// })
// gsap.registerPlugin(ScrollTrigger);
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useLayoutEffect } from "react";

gsap.registerPlugin(ScrollTrigger);
gsap.to("#page1",{
    height:0,
    duration:1,
    delay:1
})
gsap.to("#page2",{
    height:0,
    duration:1,
    delay:2
})
gsap.to("#home",{
    height:"100%",
    duration:1,
    display:"block",
    delay:2.5
})
gsap.from("#homemain h1",{
    y:100,
    opacity:0,
    duration:0.19,
    delay:3,
    stagger:1,
    ease: "expoScale(1, 2)"
})
gsap.from("#homemain h3",{
    y:100,
    opacity:0,
    duration:0.5,
    delay:3.5
})
gsap.to("#featured",{
    height:"100%",
    width:"100%",
    display:"block",
    duration:1,
    delay:4
})

gsap.from("#featured .fheading h1",{
    y:100,
    opacity:0,
    scrollTrigger:{
        trigger:"#featured .fheading h1",
        scroller:"body",
        scrub:2,
        duration:1
    }
})
// gsap.from("#fImages #fleft #felem h3",{
//     y:100,
//     opacity:0,
//     scrollTrigger:{
//         trigger:"#featured .fheading h1",
//         scroller:"body",
//         scrub:2
//     }
// })