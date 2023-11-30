import React, { useEffect } from 'react'
import './empyStyle.css';
import anime from 'animejs';


const Index = () => {

  useEffect(() => {
    const animateText = () => {
  anime.timeline({loop: true})
  .add({
    targets: '.ml8 .circle-container',
    scale: [0, 1],
    duration: 1100,
    easing: "easeInOutExpo",
    offset: '-=1000'
  }).add({
    targets: '.ml8 .circle-dark',
    scale: [0, 1],
    duration: 1100,
    easing: "easeOutExpo",
    offset: '-=600'
  }).add({
    targets: '.ml8 .letters-left',
    scale: [0, 1],
    duration: 1200,
    offset: '-=550'
  }).add({
    targets: '.ml8 .bang',
    scale: [0, 1],
    rotateZ: [45, 15],
    duration: 1200,
    offset: '-=1000'
  }).add({
    targets: '.ml8',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1400
  });

anime({
  targets: '.ml8 .circle-dark-dashed',
  rotateZ: 360,
  duration: 8000,
  easing: "linear",
  loop: true
});
}
animateText()
}, []);
 
  
  return (
    <div className='animacion2'>
    <div className='centered-components'>
    <h2 className="ml8">
  <span className="letters-container">
    <span className="letters letters-left">crea una</span>
    <span className="letters bang">Tarea</span>
  </span>
  <span className="circle circle-white"></span>
  <span className="circle circle-dark"></span>
  <span className="circle circle-container"><span className="circle circle-dark-dashed"></span></span>
</h2>
</div>

</div>
  )
}

export default Index
