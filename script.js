/* [ GAME SATTINGS ] */

let main = document.querySelector('main'),
    section = document.querySelector('section'),
    user = document.getElementsByClassName('user'),
    enemy = document.getElementsByClassName('enemy'),
    scrollX = 0, scrollY = 0, above = true, under = true 

  
document.oncontextmenu = () => {
  document.location = 'index.html' 
  return false
}


/* [ GAME FUNCTIONS ] */
// function random(min,max){
//   return Math.floor(Math.random() * (max - min + 1)) + min
// }



/* [ MARKER ] */
function marker(x,y,z){
  let a = document.createElement('div');
  a.style.margin = y+'px 0 0 '+x+'px';
  a.style.width = '2px';
  a.style.height = '2px';
  a.style.background = (z) ? z : 'red';
  a.style.position = 'absolute';
  a.style.zIndex = 3;
  section.append(a);
} 




/* [ ACCOUTREMENT ] */
function addObject(z,x,y){ 
  section.innerHTML += `
  <div class="${z}"
  style="background:url(img/${z}.png) 
  no-repeat;margin:${y}px 0 0 ${x}px;
  display:block;">
  </div>`
} 
addObject('ammo',570,400)
addObject('medic',780,400)







/* [ ADD GAMERS ] */
let gamer = {

  'who': [
    'user','enemy','enemy','enemy',
    'enemy','enemy','enemy'
  ],

  'position': [
    200,150, 500,150, 600,150, 700,150, 
    800,150, 900,150, 1000,150
  ],

  'health': [
    100, 100, 100, 100, 
    100, 100, 100
  ],

  'ammo': [
    120, 120, 120, 120, 
    120, 120, 120
  ],

  'add': () => {
    let x = 0, y = 1
    for(let i=0; i<gamer['who'].length; i++){

      let div = document.createElement('div')
      div.style.margin = `${gamer['position'][y]}px 0 0 ${gamer['position'][x]}px`
      div.style.background = `url(img/${gamer['who'][i]}.png)`
      div.setAttribute('class', gamer['who'][i])
      div.setAttribute('index', i)
      section.append(div)
  
      let health = document.createElement('div')
      health.setAttribute('class','health')
      div.append(health)
  
      let scale = document.createElement('div')
      scale.setAttribute('class','scale')
      health.append(scale)

      let bottom = document.createElement('div')
      bottom.setAttribute('class', 'bottom')
      bottom.style.background = (gamer['who'][i] == 'enemy' ? 'rgba(255, 0, 0, 0)' : 'rgba(0, 128, 0, 0)')
      bottom.style.margin = `${gamer['position'][y]+65}px 0 0 ${gamer['position'][x]+15}px`
      section.append(bottom)
      x+=2, y+=2
    }
  }

}; gamer.add()





/* [ ... ] */
document.onclick = (e) => { shot(0, e.pageX, e.pageY) }


/* [ ОБСТРЕЛЯТЬ ПОЛЬЗОВАТЕЛЯ ] */
// let deg = 220;
// for(let i=1; i<=4; i++){
//   setTimeout(() => {
//     shot(1, 200, deg)
//     deg += 50;
//   }, i*1000)
// }


function shot(index, shotX, shotY){

  // marker(e.pageX-main.getBoundingClientRect().x+main.scrollLeft,
  // e.pageY-main.getBoundingClientRect().y+main.scrollTop,'green')

  let shooter = section.querySelector(`[index="${index}"]`),

  x = 0, y = 0, 
  userX = shooter.offsetLeft+50, 
  userY = shooter.offsetTop+50, 

  pageX = shotX-main.getBoundingClientRect().x+main.scrollLeft, 
  pageY = shotY-main.getBoundingClientRect().y+main.scrollTop, 

  a = pageX-userX, b = pageY-userY, k = b/a 


  /* [ СОЗДАТЬ ПУЛЮ ] */
  // let bullet = document.createElement('div')
  // bullet.setAttribute('class', 'bullet')
  // section.append(bullet)


  for(let i=0; i<=40; i++){

    if(Math.abs(a) < Math.abs(b)){
      (pageY>userY ? y+=10 : y-=10), x=y/k
    } else {
      (pageX>userX ? x+=10 : x-=10), y=k*x
    }

    let bullet = document.createElement('div')
    bullet.setAttribute('class', 'bullet')
    bullet.style.margin = `${y+userY}px 0 0 ${x+userX}px`
    if(i == 40) bullet.style.background = 'blue';
    section.append(bullet)

    // bullet.style.margin = `${y+userY}px 0 0 ${x+userX}px`

    // if(i == 40){
    //   setTimeout(() => {
    //     bullet.remove()
    //   }, 1000)
    // }

    /* [ ЕСЛИ ПУЛЯ ПОПАДАЕТ НА КРАЙ КАРТЫ УДАЛЯЕМ ЕЕ ] */
    if(bullet.getBoundingClientRect().x < main.getBoundingClientRect().x){ bullet.remove(); break }
    if(bullet.getBoundingClientRect().y < main.getBoundingClientRect().y){ bullet.remove(); break }
    if(bullet.getBoundingClientRect().x > main.offsetWidth+main.getBoundingClientRect().x){ bullet.remove(); break }
    if(bullet.getBoundingClientRect().y > main.clientHeight+main.getBoundingClientRect().y){ bullet.remove(); break }


    /* [ ПРОВЕРЯЕМ ВО ЧТО ПОПАЛА ПУЛЯ ] */
    let cockshot = document.elementFromPoint(
      bullet.getBoundingClientRect().x,
      bullet.getBoundingClientRect().y
    )

    /* [ ЕСЛИ ПУЛЯ ПОПАДАЕТ В СТЕНУ ] */
    if(cockshot.className == 'bottom' && cockshot.style.background == 'rgba(0, 0, 0, 0)'){ 
      bullet.remove(); break 
    }

    /* [ ЕСЛИ ПУЛЯ ПОПАЛА ВО ВРАГА ] */
    if(shooter.className != 'enemy' && cockshot.className == 'enemy'){ 
      let index = cockshot.getAttribute('index')
      changeHealthGamer(index, -15)
      bullet.remove()
      break
    }

    /* [ ЕСЛИ ПУЛЯ ПОПАЛА В ПОЛЬЗОВАТЕЛЯ ] */
    if(shooter.className != 'user' && cockshot.className == 'user'){
      let index = cockshot.getAttribute('index')
      changeHealthGamer(index, -15)
      bullet.remove()
      break
    }
    
  } 
}




/* [ ADD WALLS ] */
let walls = [
  60,2, 132,2, 30,36, 2,72,
  460,72, 532,72, 604,72,
  820,72, 892,72, 320,350,
  604,350, 820,350, 892,350
]

function addWall(x,y){
  let wall = document.createElement('div')
  wall.setAttribute('class', 'wall')
  wall.style.margin = `${y}px 0 0 ${x}px`
  section.append(wall)

  let bottom = document.createElement('div')
  bottom.setAttribute('class', 'bottom')
  bottom.style.background = 'rgba(0, 0, 0, 0)'
  bottom.style.margin = `${y+65}px 0 0 ${x+15}px`
  section.append(bottom)
}

for(let i=0; i<walls.length-1; i++){
  let j = i; j++
  addWall(walls[i],walls[j])
  i++
}



/* [ ИЗМЕНИТЬ ЗДОРОВЬЕ ] */
function changeHealthGamer(index, value){
  let scale = section.getElementsByClassName('scale')[index]
  let health = section.getElementsByClassName('health')[index]
  health.style.display = 'block'
  
  if(gamer['health'][index]>75){  
    scale.style.background = 'greenyellow'
  } else if(gamer['health'][index]>50){
    scale.style.background = 'yellow'
  } else if(gamer['health'][index]>25){
    scale.style.background = 'orange'
  } else {
    scale.style.background = 'red'
  } 

  if(value > 0){
    gamer['health'][index] = value
  } else {
    gamer['health'][index] -= (value*-1) 
  }
  scale.style.width = gamer['health'][index]+'px'

  if(gamer['health'][index] <= 0){
    revival(index)
  }

  // setTimeout(() => {
  //   health.style.display = 'none'
  // }, 3000)
}

/* [ ВОЗРОЖДЕНИЕ ] */
function revival(index){
  section.querySelector(`[index="${index}"]`).style.display = 'none'
  section.getElementsByClassName('bottom')[index].style.display = 'none'
}



// section.getElementsByClassName('bottom')[0].style.background = 'gray'

// marker(gamer['position'][0]+27, gamer['position'][1]+64,'yellow')  // 0
// marker(gamer['position'][0]+31, gamer['position'][1]+62,'orange')  // 1
// marker(gamer['position'][0]+98, gamer['position'][1]+62,'red')  // 2
// marker(gamer['position'][0]+100,gamer['position'][1]+66,'red')  // 3
// marker(gamer['position'][0]+72, gamer['position'][1]+100,'red') // 4
// marker(gamer['position'][0]+68, gamer['position'][1]+102,'red') // 5
// marker(gamer['position'][0],    gamer['position'][1]+102,'red') // 6
// marker(gamer['position'][0]-2,  gamer['position'][1]+100,'red') // 7



/* [ СЦЕНАРИЙ СОПРИКОСНОВЕНИЯ С ОБЬЕКТОМ ПРИ ДВИЖЕНИИ ] */
function touch(index){

  let shooter = section.querySelector(`[index="${index}"]`), 
  bottom = section.getElementsByClassName('bottom')[index], 
  x = 0, y = 1,

  elem = [
    document.elementFromPoint(shooter.getBoundingClientRect().x+27, shooter.getBoundingClientRect().y+64),  // 0
    document.elementFromPoint(shooter.getBoundingClientRect().x+31, shooter.getBoundingClientRect().y+62),  // 1
    document.elementFromPoint(shooter.getBoundingClientRect().x+98, shooter.getBoundingClientRect().y+62),  // 2
    document.elementFromPoint(shooter.getBoundingClientRect().x+100,shooter.getBoundingClientRect().y+66),  // 3
    document.elementFromPoint(shooter.getBoundingClientRect().x+72, shooter.getBoundingClientRect().y+100), // 4
    document.elementFromPoint(shooter.getBoundingClientRect().x+68, shooter.getBoundingClientRect().y+102), // 5
    document.elementFromPoint(shooter.getBoundingClientRect().x,    shooter.getBoundingClientRect().y+102), // 6
    document.elementFromPoint(shooter.getBoundingClientRect().x-2,  shooter.getBoundingClientRect().y+100), // 7
    document.elementFromPoint(shooter.getBoundingClientRect().x-2,  shooter.getBoundingClientRect().y+36),  // 8
    document.elementFromPoint(shooter.getBoundingClientRect().x+30, shooter.getBoundingClientRect().y-2),   // 9
    document.elementFromPoint(shooter.getBoundingClientRect().x+100,shooter.getBoundingClientRect().y-2)    // 10
  ]


  /* [ ПОЗИЦИИ КООРДИНАТ В МАССИВЕ GAMER ] */
  x+=index+index, y+=index+index

  /* [ ОПРЕДЕЛЯЕМ ГРАНИЦИ КАРТЫ ] */
  if(gamer['position'][x]<0){ gamer['position'][x]+=2 } 
  if(gamer['position'][y]<0){ gamer['position'][y]+=2 } 
  if(gamer['position'][x]>main.offsetWidth-100) { gamer['position'][x]-=2 }
  if(gamer['position'][y]>main.scrollHeight-100){ gamer['position'][y]-=2 }


  // В elem попадает элемент с которым произошло столкновение
  for(let i=0; i<elem.length; i++){

    /* [ ЕСЛИ СОПРЕКОСНУЛИСЬ С ПОТРОНАМИ ... ] */
    if(elem[i].className == 'ammo'){
       elem[i].style.display = 'none'

      setTimeout(() => {
        elem[i].style.display = 'block'
      }, 3000)

      if(gamer['ammo'][index] < 120) gamer['ammo'][index] += 10; 
      break
    }


    /* [ ЕСЛИ СОПРЕКОСНУЛИСЬ С АПТЕЧКОЙ ... ] */
    if(elem[i].className == 'medic'){
       elem[i].style.display = 'none'

      setTimeout(() => {
        elem[i].style.display = 'block'
      }, 3000)

      changeHealthGamer(index, 100)
      break
    }


    /* [ КОГО ОТОБРАЗИТЬ СВЕРХУ ] */
    if(elem[i].className == 'wall' || elem[i].className == 'enemy'){

      if(i == 8 || i == 9 || i == 10){
        if(under) shooter.style.zIndex = 4;
        if(i == 8) above = false;
      }if(i == 3 || i == 5 || i == 6){ 
        if(above) shooter.style.zIndex = 1;
        if(i == 3) under = false;
      } continue
    } 


    /* [ ЕСЛИ СОПРЕКОСНУЛИСЬ С СТЕНОЙ ... ] */
    if(elem[i].className == 'bottom'){
      if(i == 0 || i == 7){ gamer['position'][x]+=2; if(index == 0){ scrollX+=2 } }
      if(i == 3 || i == 4){ gamer['position'][x]-=2; if(index == 0){ scrollX-=2 } }
      if(i == 1 || i == 2){ gamer['position'][y]+=2; if(index == 0){ scrollY+=2 } }
      if(i == 6 || i == 5){ gamer['position'][y]-=2; if(index == 0){ scrollY-=2 } }
      break
    }


    /* [ НЕТ КАСАНИЯ ] */
    if(elem[i].className == '' || elem[i].className == 'user'){
      if(i == 8) above = true; if(i == 3) under = true; 
    } 

  }

  /* [ ДВИЖЕНИЕ ЭКРАНА ЗА ПОЛЬЗОВАТЕЛЕМ ] */
  if(index == 0) document.querySelector('main').scrollTo(scrollX,scrollY);
  shooter.style.margin = `${gamer['position'][y]}px 0 0 ${gamer['position'][x]}px`
  bottom.style.margin = `${gamer['position'][y]+65}px 0 0 ${gamer['position'][x]+15}px`
}










/* [ ПЕРЕМЕЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ] */
let intervalX = 0, intervalY = 0

document.onkeydown = (e) => {
  switch(e.code){
    case 'KeyW': if(!intervalY) intervalY = setInterval(() => { touch(0), gamer['position'][1]-=2, scrollY-=2; }, 10); break
    case 'KeyS': if(!intervalY) intervalY = setInterval(() => { touch(0), gamer['position'][1]+=2, scrollY+=2; }, 10); break
    case 'KeyA': if(!intervalX) intervalX = setInterval(() => { touch(0), gamer['position'][0]-=2, scrollX-=2; }, 10); break
    case 'KeyD': if(!intervalX) intervalX = setInterval(() => { touch(0), gamer['position'][0]+=2, scrollX+=2; }, 10); break
  }
}

document.onkeyup = (e) => {
  switch(e.code){
    case 'KeyW': clearInterval(intervalY), intervalY = 0; break
    case 'KeyS': clearInterval(intervalY), intervalY = 0; break
    case 'KeyA': clearInterval(intervalX), intervalX = 0; break
    case 'KeyD': clearInterval(intervalX), intervalX = 0; break
  }
}




