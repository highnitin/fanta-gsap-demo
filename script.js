const tl = gsap.timeline({scrollTrigger:{
    trigger:"#section2",
    start: "0% 95%",
    end: "60% 50%",
    scrub:true,
    markers:false
}});


tl.to("#fanta",{
top:"120%",
left:"5%",
duration:2,
}, 'heroAnimation')

tl.to("#orange2",{
top:"160%",
left:"25%",
zIndex:"9",
duration: 2,
}, 'heroAnimation')

tl.to("#orange1", {
    top:"160%",
    left:"70%",
    duration: 2,
}, 'heroAnimation')

tl.to("#leaf1", {
    top:"105%",
    left:"70%",
    zIndex:"3",
    rotation: 75,
    duration: 2,
}, 'heroAnimation')

tl.to("#leaf2", {
    top:"115%",
    left:"8%",
    zIndex:"3",
    rotation: 180,
    duration: 2,
}, 'heroAnimation')

const tl2 = gsap.timeline({scrollTrigger:{
    trigger:"#section3",
    start: "0% 95%",
    end: "50% 55%",
    scrub:true,
    markers:false
}});

tl2.from("#cocacola",{
    rotation: "-90deg",
    top:"10%",
    right:"30%",
    duration:3,
}, "can")

tl2.from("#lemonC",{
    rotation: "-90deg",
    top:"10%",
    right:"30%",
    duration:3,
}, "can")

tl2.from("#pepsi",{
    rotation: "90deg",
    top:"10%",
    left:"30%",
    duration:3,
    // left:"50%",
}, "can")

tl2.from("#lemonP",{
    rotation: "90deg",
    top:"10%",
    left:"30%",
    duration:3,
    // left:"50%",
}, "can")

const tl3 = gsap.timeline({scrollTrigger:{
    trigger:"#section3",
    start: "0% 95%",
    end: "35% 35%",
    scrub:true,
    markers:false
}});

tl3.to("#fanta", {
    top:"218%",
    left:"30%",
    width:"40%",
    // rotation: 360,
    ease: "linear",
    duration: 2,
}, 'secondSection')

tl3.to("#orange2", {
    top:"207%",
    left:"40%",
    width:"20%",
    zIndex:"3",
    // rotation: 180,
    duration: 2,
}, 'secondSection')



// splitType with lenis


gsap.registerPlugin(ScrollTrigger)

const splitTypes = document.querySelectorAll('.reveal-type')

splitTypes.forEach((char,i) => {

    const bg = char.dataset.bgColor
    const fg = char.dataset.fgColor

    const text = new SplitType(char, { types: 'chars'})

    gsap.fromTo(text.chars, 
        {
            color: bg,
        },
        {
            color: fg,
            duration: 0.6,
            stagger: 0.9,
            scrollTrigger: {
                trigger: char,
                start: '5% 80%',
                end: '85% 20%',
                scrub: true,
                markers: false,
                toggleActions: 'play play reverse reverse'
            }
    })
})


const lenis = new Lenis()

lenis.on('scroll', (e) => {
console.log(e)
})

function raf(time) {
lenis.raf(time)
requestAnimationFrame(raf)
}

requestAnimationFrame(raf)

