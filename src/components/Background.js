    import React, {Component} from 'react'
    import '../scss/Background.scss';

    import anime from "animejs";

    class Background extends Component{
       componentDidMount(){

         let tl = anime.timeline({
           easeing: 'easeOutExpo',
           duration: 1000
         })
         tl.add({
           targets: '.background-section .grid-space',
           easing: 'easeInExpo',
           backgroundColor: 'rgb(255, 73, 78)',
           delay: anime.stagger(100)
         })
         tl.add({
           targets: '.background-section .grid-space',
           easing: 'easeInExpo',
           width: '0',
           backgroundColor: 'rgb(173, 166, 255)',
           delay: anime.stagger(200)
         }, )
         tl.add({
           targets: '.background-section .grid-space',
           easing: 'easeInExpo',
           width: '100%',
           backgroundColor: 'rgb(0, 0, 0)',
           delay: anime.stagger(20)
         })
         tl.add({
           targets: 'h1',
           duration: 1000,
           top: '20%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         }, '+=700' )
         tl.add({
           targets: '#a',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#b',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#c',
           duration: 500,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#d',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#e',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#f',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#g',
           duration: 400,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#h',
           duration: 200,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#i',
           duration: 700,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#j',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#k',
           duration: 300,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#l',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#m',
           duration:700,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#n',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#o',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#p',
           duration: 400,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#q',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#r',
           duration: 100,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: '#s',
           duration: 900,
           top: '40%',
           height: '10px',
           opacity: 1,
           color: 'rgb(255, 255, 255)',
         })
         tl.add({
           targets: 'span',
           duration: 2000,
           left: '55%',
           top: '50%',
           height: '10px',
           opacity: 0,
           color: 'rgb(255, 255, 255)',
           transition: 10
         },'+=3100m1')

                // Circle animation
                  let tll = anime.timeline({
                     easing: 'easeInOutQuart',
                     duration: 4000
                 })
                 tll.add({
                   targets: 'svg',
                   opacity: 1,
                   delay :2500
                 }, '+=6000')
                 tll.add({
                     targets: 'svg',
                     keyframes: [
                         {scale: .7, rotate: '0deg'},
                         {scale: 1, rotate: '360deg'}
                     ],
                     duration: 3000
                 },"-=2500")
                  tll.add({
                    targets: ['#logo', 'faTurbulence', 'feDisplacementMap'],
                    baseFrequency: 0,
                    numOctaves: 0,
                    scale: 1,
                    rotate: '360deg',
                    fill: '#e1ff8a',
                  }, "-= 4000")
                  tll.add({
                      targets: ['svg', '#logo', 'faTurbulence', 'feDisplacementMap'],
                      scale: 0,
                      fill: '#949bff',
                      duration: 500
                  })
  }
      render(){
        return (
          <section class="background-section">
          <h1>Hi, Im Luke!</h1>
          <span id="a">L</span>
          <span id="b">O</span>
          <span id="c">L</span>
          <span id="d"> </span>
          <span id="e">L</span>
          <span id="f">O</span>
          <span id="g">L</span>
          <span id="h"> </span>
          <span id="i">L</span>
          <span id="j">O</span>
          <span id="k">L</span>
          <span id="l"> </span>
          <span id="m">L</span>
          <span id="n">O</span>
          <span id="o">L</span>
          <span id="p">L</span>
          <span id="q">.</span>
          <span id="r">J</span>
          <span id="s">S</span>
          <svg  viewBox="0 0 248 248.667">
                <filter id="displacementFilter">

                <feTurbulence type="turbulence" baseFrequency="0.05"
                  numOctaves="20" result="turbulence"/>
                <feDisplacementMap in2="turbulence" in="SourceGraphic"
                  scale="50" xChannelSelector="R" yChannelSelector="G"/>
                </filter>
             <path id="logo"   d="M109.8,41.8c-37.6,0-68,30.4-68,68s30.4,68,68,68s68-30.4,68-68S147.4,41.8,109.8,41.8z M109.8,175.3
	            c-36.2,0-65.5-29.3-65.5-65.5c0-36.2,29.3-65.5,65.5-65.5s65.5,29.3,65.5,65.5C175.3,146,146,175.3,109.8,175.3z"/>
              <path id="logo"  d="M109.8,54.8c-30.4,0-55,24.6-55,55c0,30.4,24.6,55,55,55s55-24.6,55-55C164.8,79.5,140.2,54.8,109.8,54.8z
	             M109.8,149.8c-22.1,0-40-17.9-40-40s17.9-40,40-40s40,17.9,40,40S131.9,149.8,109.8,149.8z"/>
        </svg>
          <div class="grid-space"></div>
        </section>
        )
      }
    }

  export default Background
