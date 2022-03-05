/* [ GAME SATTINGS ] */

let main = document.querySelector('main'),
    section = document.querySelector('section'),
    user = document.getElementsByClassName('user'),
    enemy = document.getElementsByClassName('enemy'),
    scrollX = 0, scrollY = 0

  
document.oncontextmenu = () => {
  document.location = 'index.html' 
  return false
}

/* [ Z-INDEX ] */
function zIndex(x,y){
  return Math.floor(y/35)*(Math.floor(y/35)+Math.floor(x/71))
}

/* [ MARKER ] */
function marker(x,y,z){
  let a = document.createElement('div');
  a.style.margin = y+'px 0 0 '+x+'px';
  a.style.width = '2px';
  a.style.height = '2px';
  a.style.background = (z) ? z : 'red';
  a.style.position = 'absolute';
  a.style.zIndex = 1000;
  section.append(a);
} 









/* [ ADD GAMERS ] */
let gamer = {

  // 'who': [
  //   'user','enemy','enemy','enemy',
  //   'enemy','enemy','enemy'
  // ],

  // 'position': [
  //   200,200, 300,200, 460,200, 730,200, 
  //   800,200, 900,200, 1000,200, 400,360
  // ],


  'who': [
    'user'
  ],

  'position': [
    200,200
  ],

  /* [ ПРЕДЛОЖЕНИЕ: РАЗБИТЬ МАССИВ ЧТОБЫ 
    ИЗБАВИТСЯ ОТ ВЫЧИСЛЕНИЯ КООРДИНАТ ] */
  // 'x': [200,400,500,730,800,900,1000],
  // 'y': [200,200,200,200,200,200, 200],

  'health': [
    100, 100, 100, 100, 100, 100, 100
  ],

  'ammo': [
    120, 120, 120, 120, 120, 120, 120
  ],

  'add': () => {
    let x = 0, y = 1 // deleted
    for(let i=0; i<gamer['who'].length; i++){

      // let zIndex = Math.floor((gamer['position'][y]+65)/35)+Math.floor((gamer['position'][x]+15)/71)
      // let zIndex = Math.floor((gamer['position'][y]+65)/35)+Math.floor((gamer['position'][x])+30/71)

      let div = document.createElement('div')
      div.style.margin = `${gamer['position'][y]}px 0 0 ${gamer['position'][x]}px`
      div.style.background = `url(img/${gamer['who'][i]}.png)`
      div.style.zIndex = zIndex(gamer['position'][x],gamer['position'][y])
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
      bottom.setAttribute('bottom', i)
      bottom.style.background = (gamer['who'][i] == 'enemy' ? 'rgba(255, 0, 0, 0)' : 'rgba(0, 128, 0, 0)')
      // bottom.style.background = (gamer['who'][i] == 'enemy' ? 'rgba(255, 0, 0, 0)' : 'green')
      bottom.style.margin = `${gamer['position'][y]+65}px 0 0 ${gamer['position'][x]+15}px`
      //bottom.style.zIndex = zIndex(gamer['position'][x],gamer['position'][y])+1
      bottom.style.zIndex = 1000
      section.append(bottom)

      /* [ ... ] */
      // console.log('user-y: '+gamer['position'][y]+' user-z: '+zIndex)

      x+=2, y+=2 // deleted
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

    //** [ ОБЪЕДИНИТЬ ] */

    /* [ ЕСЛИ ПУЛЯ ПОПАЛА В ПОЛЬЗОВАТЕЛЯ ] */
    if(shooter.className != 'user' && cockshot.className == 'user'){
      let index = cockshot.getAttribute('index')
      changeHealthGamer(index, -15)
      bullet.remove()
      break
    }
    
  } 
}

















function good(){
  for(let i=0; i<700; i+=35){
    for(let j=0; j<1420; j+=71){
      let a = document.createElement('div');
      a.style.margin = `${i}px 0 0 ${j}px`;
      a.style.width = '2px';
      a.style.height = '2px';
      a.style.background = 'red';
      a.style.position = 'absolute';
      a.style.zIndex = 1000;
      a.innerHTML = zIndex(j,i)
      section.append(a);
    }
  }

} // good()

















/* [ ADD WALLS ] */
let walls = [

  336,70, 568,70, 639,70, 710,70, 852,70, 

  156,350,  376,350, 
  
  548,350, 1261,350
]

for(let i=0; i<walls.length-1; i++){
  let j = i; j++
  
  let wall = document.createElement('div')
  wall.setAttribute('class', 'wall')
  wall.style.margin = `${walls[j]}px 0 0 ${walls[i]}px`
  wall.style.zIndex = zIndex(walls[i],walls[j])

  /* [ ... ] */
  wall.innerHTML = zIndex(walls[i],walls[j])
  wall.style.textAlign = 'center'
  wall.style.color = 'blue'

  section.append(wall)

  let bottom = document.createElement('div')
  bottom.setAttribute('class', 'bottom')
  bottom.style.background = 'rgba(0, 0, 0, 0)'
  // bottom.style.background = 'gray'
  bottom.style.margin = `${walls[j]+65}px 0 0 ${walls[i]+15}px`  
  bottom.style.zIndex = 1000
  section.append(bottom)

  //marker(walls[i], walls[j], 'green')

  i++
}

//** [ ОБЪЕДИНИТЬ ] */

/* [ ACCOUTREMENT ] */
let ammo = 0, medic = 0
function addObject(z,x,y){ 

  let obj = document.createElement('div')
  obj.style.background = `url(img/${z}.png)`
  obj.style.margin = `${y}px 0 0 ${x}px`
  obj.style.zIndex = zIndex(x,y)
  obj.style.display = 'block'
  obj.setAttribute('class', z)
  section.append(obj)

  let bottom = document.createElement('div')
  bottom.setAttribute('class', 'bottom')
  bottom.setAttribute('index', (z == 'medic' ? (medic, medic++) : (ammo, ammo++)))
  bottom.style.background = (z == 'medic' ? 'rgba(255, 255, 0, 0)' : 'rgba(0, 0, 255, 0)')
  bottom.style.margin = `${y+65}px 0 0 ${x+15}px`
  bottom.style.zIndex = zIndex(x,y)+1
  section.append(bottom)
} 
// addObject('ammo',  576, 396)
// addObject('medic', 792, 397)















/* [ ИЗМЕНИТЬ ЗДОРОВЬЕ ] */
function changeHealthGamer(index, value){
  let scale = section.getElementsByClassName('scale')[index],
      health = section.getElementsByClassName('health')[index]
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
    section.querySelector(`[index="${index}"]`)
    .style.display = 'none'
    section.getElementsByClassName('bottom')
    [index].style.display = 'none'
  }

  setTimeout(() => {
    health.style.display = 'none'
  }, 3000)
}



// section.getElementsByClassName('bottom')[0].style.background = 'red'
// marker(gamer['position'][0]+29, gamer['position'][1],'red')  
// marker(gamer['position'][0]-2, gamer['position'][1]+100,'orange') // 7 


// marker(gamer['position'][0]+98, gamer['position'][1]+62,'red')     // 2
// marker(gamer['position'][0]+100,gamer['position'][1]+66,'red')     // 3
// marker(gamer['position'][0]+72, gamer['position'][1]+100,'red')    // 4
// marker(gamer['position'][0]+68, gamer['position'][1]+102,'red')    // 5
// marker(gamer['position'][0],    gamer['position'][1]+102,'green')    // 6
// marker(gamer['position'][0]+100,    gamer['position'][1]-2,'blue')    // 10
// marker(gamer['position'][0]-2,  gamer['position'][1]+100,'red')    // 7



/* [ СЦЕНАРИЙ СОПРИКОСНОВЕНИЯ С ОБЬЕКТОМ ПРИ ДВИЖЕНИИ ] */

function touch(index){
  let step = 0

  let shooter = section.querySelector(`[index="${index}"]`), 
  bottom = section.querySelector(`[bottom="${index}"]`), 
  x = 0, y = 1, // deleted

  elem = [
    document.elementFromPoint(shooter.getBoundingClientRect().x+25, shooter.getBoundingClientRect().y+66),  // 0
    document.elementFromPoint(shooter.getBoundingClientRect().x+31, shooter.getBoundingClientRect().y+62),  // 1
    document.elementFromPoint(shooter.getBoundingClientRect().x+98, shooter.getBoundingClientRect().y+62),  // 2
    document.elementFromPoint(shooter.getBoundingClientRect().x+100,shooter.getBoundingClientRect().y+66),  // 3
    document.elementFromPoint(shooter.getBoundingClientRect().x+72, shooter.getBoundingClientRect().y+100), // 4
    document.elementFromPoint(shooter.getBoundingClientRect().x+68, shooter.getBoundingClientRect().y+102), // 5
    document.elementFromPoint(shooter.getBoundingClientRect().x,    shooter.getBoundingClientRect().y+102), // 6
    document.elementFromPoint(shooter.getBoundingClientRect().x-2,  shooter.getBoundingClientRect().y+100), // 7

    document.elementFromPoint(shooter.getBoundingClientRect().x-2,  shooter.getBoundingClientRect().y+36),  // 8
    //document.elementFromPoint(shooter.getBoundingClientRect().x+30, shooter.getBoundingClientRect().y-2),   // 9
    document.elementFromPoint(shooter.getBoundingClientRect().x+100,shooter.getBoundingClientRect().y-2)    // 10
  ]

  /* [ ПОЗИЦИИ КООРДИНАТ В МАССИВЕ GAMER ] */
  x+=index+index, y+=index+index // deleted

  /* [ ОПРЕДЕЛЯЕМ ГРАНИЦИ КАРТЫ ] */
  if(gamer['position'][x]<0){ gamer['position'][x]+=2 } // gamer['x'][i]
  if(gamer['position'][y]<0){ gamer['position'][y]+=2 } 
  if(gamer['position'][x]>main.offsetWidth-100) { gamer['position'][x]-=2 }
  if(gamer['position'][y]>main.scrollHeight-100){ gamer['position'][y]-=2 }


  // В elem попадает элемент с которым произошло столкновение
  for(let i=0; i<elem.length; i++){

    /* [ ЕСЛИ СОПРЕКОСНУЛИСЬ С ПОТРОНАМИ ... ] */
    if(elem[i].style.background == 'rgba(0, 0, 255, 0)'){ 
       elem[i].style.display = 'none'

      let ammo = section.getElementsByClassName('ammo')
      [elem[i].getAttribute('index')]
      ammo.style.display = 'none'

      setTimeout(() => {
        elem[i].style.display = 'block'
        ammo.style.display = 'block'
      }, 3000)

      if(gamer['ammo'][index] < 120) gamer['ammo'][index] += 10; 
      break
    }

    //** [ ОБЪЕДИНИТЬ ] */

    /* [ ЕСЛИ СОПРЕКОСНУЛИСЬ С АПТЕЧКОЙ ... ] */
    if(elem[i].style.background == 'rgba(255, 255, 0, 0)'){ 
       elem[i].style.display = 'none'

      let medic = section.getElementsByClassName('medic')
      [elem[i].getAttribute('index')]
      medic.style.display = 'none'
       
      setTimeout(() => {
        elem[i].style.display = 'block'
        medic.style.display = 'block'
      }, 3000)

      changeHealthGamer(index, 100)
      break
    }

    /* [ ... ] */
    if(elem[i].className == 'wall' || 
      elem[i].className == 'enemy' ||
      elem[i].className == 'bottom'){
      if(i == 7 || i == 8 ) step = 35;
      if(i == 3 || i == 10) step =  0;
    }

    /* [ ЕСЛИ СОПРЕКОСНУЛИСЬ СО СТЕНОЙ ... ] */
    if(elem[i].className == 'bottom'){
      if(i == 0 || i == 7){ gamer['position'][x]+=2; if(index == 0){ scrollX+=2 } }
      if(i == 3 || i == 4){ gamer['position'][x]-=2; if(index == 0){ scrollX-=2 } }
      if(i == 1 || i == 2){ gamer['position'][y]+=2; if(index == 0){ scrollY+=2 } }
      if(i == 6 || i == 5){ gamer['position'][y]-=2; if(index == 0){ scrollY-=2 } }
      break
    }

  }


  /* [ ДВИЖЕНИЕ ЭКРАНА ЗА ПОЛЬЗОВАТЕЛЕМ ] */
  if(index == 0) document.querySelector('main').scrollTo(scrollX, scrollY);

  /* [ Z-INDEX ] */
  // let zIndex = Math.floor((gamer['position'][y]+65)/34)+Math.floor((gamer['position'][x]+15)/71)
  // let zIndex = Math.floor((gamer['position'][y]+65)/35)+Math.floor((gamer['position'][x]+30)/71)

  /* [ ... ] */
  shooter.style.margin = `${gamer['position'][y]}px 0 0 ${gamer['position'][x]}px`
  shooter.style.zIndex = zIndex(gamer['position'][x],gamer['position'][y]+step)

  /* [ ... ] */
  bottom.style.margin = `${gamer['position'][y]+65}px 0 0 ${gamer['position'][x]+15}px`
  bottom.style.zIndex = 1000 // Максимальный z-index

  /* [ ... ] */
  section.getElementsByClassName('scale')[0].innerHTML = zIndex(gamer['position'][x],gamer['position'][y])
  section.getElementsByClassName('scale')[0].style.color = 'blue'

  //console.log(step)
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




