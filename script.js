/* [ GAME SATTINGS ] */
let main = document.querySelector('main'),
    section = document.querySelector('section'),
    user = document.getElementsByClassName('user'),
    enemy = document.getElementsByClassName('enemy'),
    scrollX = 0, scrollY = 0, intervalX = 0, intervalY = 0,
    control = 0, intervalShot, shotX = 0, shotY = 0

  
/* [ ПОЛУЧИТЬ КОНТРОЛЬ НАД ПЕРСОНАЖЕМ ] */
document.oncontextmenu = (e) => {

  let className = e.target.className,
      background = e.target.style.background,
      event = e.target

  if(className == 'user' || className == 'enemy' ||
    (className == 'bottom' && background == 'rgba(255, 0, 0, 0)') ||
    (className == 'bottom' && background == 'rgba(0, 128, 0, 0)') ){

    control = (className == 'bottom' ?
    event.getAttribute('bottom') : 
    event.getAttribute('index'))
  } 

  return false
}

/* [ Z-INDEX ] */
function zIndex(x,y){
  return Math.floor(y/35)*(Math.floor(y/35)+Math.floor(x/71))
}

/* [ RANDOM ] */
function random(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}






/* [ ADD GAMERS ] */
let gamer = {

  'who': [
    'user','enemy','enemy','enemy',
    'enemy','enemy','enemy'
  ],
  //** [ ОБЪЕДИНИТЬ ] */
  'health': [100,100,100,100,100,100,100],

  'ammo': [
    [120,120,120,120],
    [120,120,120,120],
    [120,120,120,120],
    [120,120,120,120],
    [120,120,120,120],
    [120,120,120,120],
    [120,120,120,120]
  ],

  'x': [200,400,500,730,800,900,1000],
  'y': [200,200,200,200,200,200, 200],

  'gun' : [
    [ 'TT', 'MP-135', 'АК-103', 'СВД' ],
    [ 'TT', 'MP-135', 'АК-103', 'СВД' ],
    [ 'TT', 'MP-135', 'АК-103', 'СВД' ],
    [ 'TT', 'MP-135', 'АК-103', 'СВД' ],
    [ 'TT', 'MP-135', 'АК-103', 'СВД' ],
    [ 'TT', 'MP-135', 'АК-103', 'СВД' ],
    [ 'TT', 'MP-135', 'АК-103', 'СВД' ]
  ],

  /* [ ОРУЖИЕ КОТОРОЕ СЕЙЧАС В РУКАХ У ПОЛЬЗОВАТЕЛЯ ] */
  'used': [0,0,0,0,0,0,0],

  'add': () => {
    for(let i=0; i<gamer['who'].length; i++){

      let div = document.createElement('div')
      div.style.margin = `${gamer['y'][i]}px 0 0 ${gamer['x'][i]}px`
      div.style.background = `url(img/${gamer['who'][i]}.png)`
      div.style.zIndex = zIndex(gamer['x'][i],gamer['y'][i])
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
      bottom.style.margin = `${gamer['y'][i]+65}px 0 0 ${gamer['x'][i]+15}px`
      bottom.style.zIndex = zIndex(main.offsetWidth, main.scrollHeight)
      section.append(bottom)
    }
  }

}; gamer.add()





/* [ ADD WALLS ] */
let walls = [
  336,70, 568,70, 639,70, 
  710,70, 852,70, 156,350, 
  376,350, 548,350, 1261,350
]

for(let i=0; i<walls.length-1; i++){
  let j = i; j++
  
  let wall = document.createElement('div')
  wall.setAttribute('class', 'wall')
  wall.style.margin = `${walls[j]}px 0 0 ${walls[i]}px`
  wall.style.zIndex = zIndex(walls[i],walls[j])

  /* [ ВЫВЕСТИ ИНДЕКС ] */
  // wall.innerHTML = zIndex(walls[i],walls[j])
  // wall.style.textAlign = 'center'
  // wall.style.color = 'blue'
  section.append(wall)

  let bottom = document.createElement('div')
  bottom.setAttribute('class', 'bottom')
  bottom.style.background = 'rgba(0, 0, 0, 0)'
  bottom.style.margin = `${walls[j]+65}px 0 0 ${walls[i]+15}px`  
  bottom.style.zIndex = zIndex(main.offsetWidth, main.scrollHeight)
  section.append(bottom)

  /* [ ТОЧКА КООРДИНАТ ] */
  // marker(walls[i], walls[j], 'green')
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
  bottom.style.zIndex = zIndex(main.offsetWidth, main.scrollHeight)
  section.append(bottom)
} 
addObject('ammo',  576, 396)
addObject('medic', 792, 397)












/* [ КАК ВЕСТИ ОГОНЬ ] */
document.onmousedown = () => { 
  let used = gamer['gun'][control]
          [gamer['used'][control]]

  switch(gun[used]['type']){

    case 'pistol': 
      shot(control, used, shotX, shotY) 
    break;

    case 'shotgun': 
      shot(control, used, shotX, shotY) 
    break;
    
    case 'automate':
      intervalShot = setInterval(() => {
        shot(control, used, shotX, shotY) 
      }, gun[used]['speed'])
    break;

    case 'rifle': 
      shot(control, used, shotX, shotY) 
    break;
  }
    
}

document.onmouseup = () => { 
  clearInterval(intervalShot) 
}

document.onmousemove = (e) => {
  shotX = e.pageX; shotY = e.pageY
}



/* [ ВЫБРАТЬ ОРУЖИЕ ] */
document.onmousewheel = (e) => {
  if(e.wheelDelta > 0){
    if(gamer['used'][control] < gamer['gun'][control].length-1){
      gamer['used'][control]++
    } else {
      gamer['used'][control] = 0
    }
  } else {
    if(gamer['used'][control] > 0){
      gamer['used'][control]--
    } else {
      gamer['used'][control] = gamer['gun'][control].length-1
    }
  }

  let index = gamer['used'][control]
  console.log('wheel: '+gamer['gun'][control][index])
}



//document.onclick = (e) => { shot(control, e.pageX, e.pageY) }
/* [ ОБСТРЕЛЯТЬ ПОЛЬЗОВАТЕЛЯ ] */
// let deg = 220;
// for(let i=1; i<=4; i++){
//   setTimeout(() => {
//     shot(1, 200, deg)
//     deg += 50;
//   }, i*1000)
// }


function shot(index, used, shotX, shotY){

  /* [ ИНДЕКС ОРУЖИЯ КОТОРОЕ ИСПОЛЬЗУЕТ СТРЕЛОК ] */
  let fire = gamer['used'][index]

  /* [ ВЫСТРЕЛИТЬ ЕСЛИ ЕСТЬ ПАТРОНЫ ] */
  if(gamer['ammo'][index][fire] > 0){

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

    for(let i=0; i<=gun[used]['distance']; i++){

      if(Math.abs(a) < Math.abs(b)){
        (pageY>userY ? y+=10 : y-=10), x=y/k
      } else {
        (pageX>userX ? x+=10 : x-=10), y=k*x
      }

      let bullet = document.createElement('div')
      bullet.setAttribute('class', 'bullet')
      bullet.style.margin = `${y+userY}px 0 0 ${x+userX}px`
      if(i == gun[used]['distance']) bullet.style.background = 'blue';
      section.append(bullet)

      // bullet.style.margin = `${y+userY}px 0 0 ${x+userX}px`

      // if(i == gun[used]['distance']){
      //   setTimeout(() => {
      //     bullet.remove()
      //   }, 500)
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
      

      /* [ ЕСЛИ ПУЛЯ ПОПАЛА В ИГРОКА ] */
      if(shooter.className != 'user'  && cockshot.className == 'user' || 
        shooter.className != 'enemy' && cockshot.className == 'enemy'){
        let index = cockshot.getAttribute('index')
        changeHealthGamer(index, gun[used]['damage'])
        bullet.remove()
        break
      }
      
    } 

    // Отнять один патрон
    gamer['ammo'][index][fire]--
  } // if

  // console.log('shot: '+used)

}




















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



/* [ СЦЕНАРИЙ СОПРИКОСНОВЕНИЯ С ОБЬЕКТОМ ПРИ ДВИЖЕНИИ ] */
function touch(index){

  let shooter = section.querySelector(`[index="${index}"]`), 
      bottom = section.querySelector(`[bottom="${index}"]`), 
      step = 0, 

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
    document.elementFromPoint(shooter.getBoundingClientRect().x+100,shooter.getBoundingClientRect().y-2)    // 9
  ]

  /* [ ОПРЕДЕЛЯЕМ ГРАНИЦИ КАРТЫ ] */
  if(gamer['x'][index]<0){ gamer['x'][index]+=2 } 
  if(gamer['y'][index]<0){ gamer['y'][index]+=2 } 
  if(gamer['x'][index]>main.offsetWidth-100) { gamer['x'][index]-=2 }
  if(gamer['y'][index]>main.scrollHeight-100){ gamer['y'][index]-=2 }


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

      /* [ ПОПОЛНИТЬ БОЕЗАПАС ] */
      for(let j=0; j<gamer['gun'][index].length; j++){
        gamer['ammo'][index][j] = 120
      } 

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

    /* [ КТО СВЕРХУ ] */
    if(elem[i].className == 'wall' || 
      elem[i].className == 'enemy' ||
      elem[i].className == 'bottom'){
      if(i == 7 || i == 8) step = 35;
      if(i == 3 || i == 9) step =  0;
    }

    /* [ ЕСЛИ СОПРЕКОСНУЛИСЬ СО СТЕНОЙ ... ] */
    if(elem[i].className == 'bottom'){
      if(i == 0 || i == 7){ gamer['x'][index]+=2; if(index == control){ scrollX+=2 } }
      if(i == 3 || i == 4){ gamer['x'][index]-=2; if(index == control){ scrollX-=2 } }
      if(i == 1 || i == 2){ gamer['y'][index]+=2; if(index == control){ scrollY+=2 } }
      if(i == 6 || i == 5){ gamer['y'][index]-=2; if(index == control){ scrollY-=2 } }
      break
    }

  }


  /* [ ДВИЖЕНИЕ ЭКРАНА ЗА ПОЛЬЗОВАТЕЛЕМ ] */
  if(index == control) document.querySelector('main').scrollTo(scrollX, scrollY);
  shooter.style.margin = `${gamer['y'][index]}px 0 0 ${gamer['x'][index]}px`
  shooter.style.zIndex = zIndex(gamer['x'][index], gamer['y'][index]+step)
  bottom.style.margin = `${gamer['y'][index]+65}px 0 0 ${gamer['x'][index]+15}px`

  /* [ Z-INDEX ] */
  // section.getElementsByClassName('scale')[0].innerHTML = zIndex(gamer['x'][index], gamer['y'][index])
  // section.getElementsByClassName('scale')[0].style.color = 'blue'
  
}




/* [ ПЕРЕМЕЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ] */
document.onkeydown = (e) => { run(e, control, true) }
document.onkeyup = (e) => { run(e, control) }

function run(e, index, action){
  if(action){
    switch(e.code){
      case 'KeyW': if(!intervalY) intervalY = setInterval(() => { touch(index), gamer['y'][index]-=2, scrollY-=2; }, 10); break
      case 'KeyS': if(!intervalY) intervalY = setInterval(() => { touch(index), gamer['y'][index]+=2, scrollY+=2; }, 10); break
      case 'KeyA': if(!intervalX) intervalX = setInterval(() => { touch(index), gamer['x'][index]-=2, scrollX-=2; }, 10); break
      case 'KeyD': if(!intervalX) intervalX = setInterval(() => { touch(index), gamer['x'][index]+=2, scrollX+=2; }, 10); break
    }
  } else {
    switch(e.code){
      case 'KeyW': clearInterval(intervalY), intervalY = 0; break
      case 'KeyS': clearInterval(intervalY), intervalY = 0; break
      case 'KeyA': clearInterval(intervalX), intervalX = 0; break
      case 'KeyD': clearInterval(intervalX), intervalX = 0; break
    }
  }
}





