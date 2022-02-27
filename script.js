/* [ GAME SATTINGS ] */
let map = document.querySelector('section'),
main = document.querySelector('main'),
scrollX = 0, scrollY = 0

//mapWidth = main.offsetWidth, mapHeight = main.scrollHeight,
// console.log('mapWidth: '+mapWidth+' mapHeight: '+mapHeight)

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
  map.append(a);
} 




/* [ ACCOUTREMENT ] */
function addObject(z,x,y){ 
  map.innerHTML += `
  <div class="${z}"
  style="background:url(img/${z}.png) 
  no-repeat;margin:${y}px 0 0 ${x}px;
  display:block;">
  </div>`
} 
// addObject('ammo',150,350)
// addObject('medic',320,460)
// addObject('medic',460,360)









/* [ CREATE VRAG ] */
// let v = {
//   0: [[1050,150, 'orange'],[1050,250, 'blue'],
//       [1050,350, 'green' ],[1050,450, 'red',]],
//   1:  [0,1],
//   2: document.getElementsByClassName('vrag'),
//   3: [], 
//   4: [], // delete
//   5: []
// }; 

// function createVragi(){
//   for(let i=0; i<v[0].length; i++){
//     let a = document.createElement('div');
//     a.style.margin = v[0][i][1]+'px 0 0 '+v[0][i][0]+'px';
//     a.style.border = (v[0][i][2]) ? '1px solid '+v[0][i][2] : '1px solid white';
//     a.style.position = 'absolute';
//     a.style.zIndex = 0;
//     a.style.width = '50px';
//     a.style.height = '50px';
//     a.style.background = 'url(img/usr/1/0.png)';
//     a.style.display = 'block';
//     a.setAttribute('index', i);
//     a.setAttribute('class', 'vrag');
//     document.body.append(a);

//     let b = document.createElement('div');
//     b.style.width = '50px';
//     b.style.height = '5px';
//     b.style.border = '1px solid green';
//     b.style.position = 'absolute';
//     b.style.margin = '-10px 0 0 0';
//     b.style.display = 'none';
//     b.setAttribute('class','zdorove');
//     a.append(b);

//     let c = document.createElement('div');
//     c.style.background = 'greenyellow';
//     c.style.width = '50px';
//     c.style.height = '5px';
//     c.setAttribute('class','shkala');
//     b.append(c);

//     v[3].push([0,0,0,0,0,0,0]); 
//     v[4].push([0,0,0,0,0,0,0]);
//     v[5].push(50);
//   }
// } //createVragi();



/* [ СМЕЩЕНИЕ К ТОЧКЕ ] */
// function run(i,x,y){
//   let x1 = 0, y1 = 0;
//   let k = (y-v[0][i][1])/(x-v[0][i][0]);

//   let z = setInterval(() => {
//     if(v[5][i] == 0){ clearInterval(z); }

//     if(x>v[0][i][0]){
//       x1+=2; y1=(k*x1);
//       if((x1+v[0][i][0]) < x){
//         v[2][i].style.margin = (y1+v[0][i][1])+'px 0 0 '+(x1+v[0][i][0])+'px';
        
//       } else {
     
//         clearInterval(z);
//         v[0][i][0] = (x1+v[0][i][0]);
//         v[0][i][1] = (y1+v[0][i][1]);
//         document.getElementById('info').innerHTML = (y1+v[0][i][1])+'px 0 0 '+(x1+v[0][i][0])+'px';
//       }
//     } else {
//       x1-=2; y1=(k*x1);
//       if((x1+v[0][i][0]) > x){
//         v[2][i].style.margin = (y1+v[0][i][1])+'px 0 0 '+(x1+v[0][i][0])+'px';
        
//       } else {
        
//         clearInterval(z);
//         v[0][i][0] = (x1+v[0][i][0]);
//         v[0][i][1] = (y1+v[0][i][1]);
//         document.getElementById('info').innerHTML = (y1+v[0][i][1])+'px 0 0 '+(x1+v[0][i][0])+'px';
//       }
//     }
//   }, 24);
// } 



/* [ СМЕЩЕНИЕ К УКРЫТИЮ ] */
// run(0,700,200); //orange
// run(1,600,422); //blue
// run(2,807,255); //green
// run(3,900,400); //red

/* [ ПОЗИЦИЯ ДЛЯ СТРЕЛЬБЫ ] */
// setTimeout(() => {
//   run(0,650,150); //orange
//   run(1,550,372); //blue
//   run(2,757,205); //green
//   run(3,850,350); //red
// },8500);

/* [ ОТКРЫТЬ ОГОНЬ ПО USER ] */
// setTimeout(() => { 
//   fireBot(0);
//   fireBot(1);
//   fireBot(2);
//   fireBot(3);
// },8600);



// function fireBot(i){
//  setInterval(() => { 
//   if(u[2]>0){

//     audio('pistol/0');

//     let x1 = 0, y1 = 0,
//     k = ((y+25)-(v[0][i][1]+25))/((x+25)-(v[0][i][0]+25));

//     let b = document.createElement('div');
//     b.style.margin = (v[0][i][1]+25)+'px 0 0 '+(v[0][i][0]+25)+'px';
//     b.style.width = '2px';
//     b.style.height = '2px';
//     b.style.zIndex = -1;
//     b.style.position = 'absolute';
//     b.style.background = 'red';
//     document.body.append(b);
    
//     let z = setInterval(() => {
//       ((x+25)>(v[0][i][0]+25) ? x1+=10 : x1-=10 ); y1=(k*x1);
//       if(y1>-500 && y1<500){ 
        
//         b.style.margin = (y1+(v[0][i][1]+25))+'px 0 0 '+(x1+(v[0][i][0]+25))+'px';
        
//         let w = document.elementFromPoint(b.getBoundingClientRect().x, b.getBoundingClientRect().y);

//         /* [ ... ] */
//         if(b.getBoundingClientRect().x<50){   b.remove(); } 
//         if(b.getBoundingClientRect().y<50){   b.remove(); } 
//         if(b.getBoundingClientRect().x>1998){ b.remove(); } 
//         if(b.getBoundingClientRect().y>1998){ b.remove(); } 

//         /* [ VRAG ] */
//         if(w.classList == 'user'){ 
//           document.getElementById('zdorove').style.display = 'block'; 
//           u[2]-=5;
//           document.getElementById('shkala').style.width = u[2]+'px';

//           if(u[2]>37.5){  
//             document.getElementById('shkala').style.background = 'greenyellow';
//           } else if(u[2]>25){
//             document.getElementById('shkala').style.background = 'yellow';
//           } else if(u[2]>12.5){
//             document.getElementById('shkala').style.background = 'orange';
//           } else if(u[2]>0){
//             document.getElementById('shkala').style.background = 'red';
//           } else if(u[2]==0){
//             w.style.display = 'none';
//             x = 200; sx = 0;
//             y = 150; sy = 0;

//             /* [ ВОЗРОЖДЕНИЕ ] */
//             setTimeout(() => {

//               /* [ ПОПОЛНИТЬ ЗДОРОВЬЕ ] */
//               document.getElementById('zdorove').style.display = 'none';
//               u[2] = 50;
//               document.getElementById('shkala').style.background = 'greenyellow';
//               document.getElementById('shkala').style.width = u[2]+'px';

//               /* [ ВЫДВИНУТЬСЯ НА ПОЗИЦИЮ ] */
//               w.style.display = 'block';
//               window.scroll(sx,sy); 
//               w.style.margin = y+'px 0 0 '+x+'px';
//             },3000);
//           }

//           b.remove(); 
//         }

//         /* [ WALL ] */
//         if(w.classList == 'wall' || w.classList == 'block'){ 
//           b.remove(); 
//         }
//       }
//     },10);
//     setTimeout(() => { clearInterval(z); b.remove(); },3000);
//   } 
//  },1000+(i*100));
// } 


/* [ ONMOUSEMOVE ] */
// document.onmousemove = (e) => {
//   document.getElementById('info').innerHTML = 'x: '+e.pageX+' y: '+e.pageY;
// }













/**
 * 
 *  [ СЦЕНАРИЙ ВЫСТРЕЛА ] 
 * 
 */

// let p = [0,0]
// document.body.onclick = (e) => {


//   //Если есть патроны
//   if(user.ammo > 0){

//     /* [ ... ] */
//     user.ammo-- 
//     console.log(user.ammo)

//     // Анимация выстрела  
//     //user.body.src = 'img/usr/8/0.png'

//     /* [ СТАРТОВАЯ ПОЗИЦИЯ ПУЛИ ] */
//     p[0] = user.x+50
//     p[1] = user.y+50


//     /* [ ... ] */
//     let x1 = 0, y1 = 0,
//     k = (e.pageY-p[1])/(e.pageX-p[0])


//     /* [ СОЗДАЕМ ПУЛЮ ] */
//     let bullet = document.createElement('div')
//     bullet.style.margin = `${p[1]}px 0 0 ${p[0]}px`
//     bullet.setAttribute('class', 'bullet')
//     map.append(bullet)



//     /* [ ДВИГАЕМ ПУЛЮ ] */
//     let z = setInterval(() => {

//       /* [ УРАВНЕНИЕ ПОЛЕТА ПУЛИ f(x) ] */
//       (e.pageX>p[0] ? x1+=10 : x1-=10 ); y1=(k*x1)

//       /* [ ДАЛЬНОСТЬ ПУЛИ ПО Y ] */
//       if(y1>-500 && y1<500){
        
//         /* [ ДВИГАЕМ ЭЛЕМЕНТ ПУЛЯ ] */
//         bullet.style.margin = `${y1+p[1]}px 0 0 ${x1+p[0]}px`
        
//         /* [ ПРОВЕРЯЕМ ЧТО ПОД ЭЛЕМЕНТОМ ПУЛЯ ] */
//         let cockshot = document.elementFromPoint(
//           bullet.getBoundingClientRect().x,
//           bullet.getBoundingClientRect().y
//         )

//         /* [ ЕСЛИ ПУЛЯ ПОПАДАЕТ НА КРАЙ КАРТЫ УДАЛЯЕМ ЕЕ ] */
//         if(bullet.getBoundingClientRect().x<0){ bullet.remove() } 
//         if(bullet.getBoundingClientRect().y<0){ bullet.remove() } 
//         if(bullet.getBoundingClientRect().x>mapWidth){ bullet.remove() }
//         if(bullet.getBoundingClientRect().y>mapHeight){ bullet.remove() }








//         /** 
//          * 
//          *  [ ЕСЛИ ПУЛЯ ПОПАЛА ВО ВРАГА ... ] 
//          * 
//          */

//         if(cockshot.className == 'vrag'){

//           /**
//            *  [ Изменение шкалы жизни врага ]
//            */

//           // Получаем индекс врага в которого попали
//           let index = cockshot.getAttribute('index');
//           // Показываем шкалу здоровья
//           document.getElementsByClassName('zdorove')[index].style.display = 'block';
//           // Отнимаем 5 от здоровья врага
//           v[5][index]-=5;
//           // Отрисовываем шкалу с измененным здоровьем
//           document.getElementsByClassName('shkala')[index].style.width = v[5][index]+'px';




//           // Меняем цвет шкалы в зависимости от количества здоровья
//           if(v[5][index]>37.5){
//             document.getElementsByClassName('shkala')[index].style.background = 'greenyellow'
//           } else if(v[5][index]>25){
//             document.getElementsByClassName('shkala')[index].style.background = 'yellow'
//           } else if(v[5][index]>12.5){
//             document.getElementsByClassName('shkala')[index].style.background = 'orange'
//           } else if(v[5][index]>0){
//             document.getElementsByClassName('shkala')[index].style.background = 'red'
//           } else if(v[5][index] == 0){

//             // Стартовые позиции врагов (точка возрождения)
//             let start = [[1050,150],[1050,250],[1050,350],[1050,450]]
//             // Позиция врагов для стрельбы
//             let fire  = [[650,150],[550,372],[757,205],[850,350]]

//             // Удаляем врага если он убит
//             cockshot.style.display = 'none'
//             // Перемещаем врага в стартувую позицию (точка возрождения)
//             v[0][index][0] = start[index][0] // x
//             v[0][index][1] = start[index][1] // y




//             /**
//              * 
//              *  [ ВОЗРОДИТЬ ВРАГА В СТАРТОВОЙ ПОЗИЦИИ С ПОЛНЫМ ЗДОРОВЬЕМ ] 
//              * 
//              */

//             setTimeout(() => {

//               /**
//                *  [ Изменение шкалы жизни врага ]
//                */
//               // function changingTheEnemysLifeBar()
//               document.getElementsByClassName('zdorove')[index].style.display = 'none';
//               document.getElementsByClassName('shkala')[index].style.background = 'greenyellow';
//               v[5][index] = 50;
//               document.getElementsByClassName('shkala')[index].style.width = v[5][index]+'px';


//               /* [ ВЫДВИНУТЬСЯ НА ПОЗИЦИЮ ] */
//               cockshot.style.display = 'block';

//               // Смещение врага к координатам
//               run(index,fire[index][0],fire[index][1])

//             }, 3000) // Возродить через 3 сек


//           }

//           // Удаляем пулю
//           bullet.remove(); 
//         }





//         /**
//          * 
//          *  [ ЕСЛИ ПУЛЯ ПОПАЛА В СТЕНУ ... ] 
//          * 
//          */

//         if(cockshot.className == 'wall' || cockshot.className == 'block'){ 
//           // Удаляем пулю
//           bullet.remove(); 
//         }






//         /**
//          * 
//          *  [ ЕСЛИ ПУЛЯ ПОПАЛА В СТЕНУ БЕЛОГО ЦВЕТА ... ] 
//          * 
//          */

//         let color = ['orange','red','green','blue','pink',
//         'brown','black','greenyellow','yellow','gray'];
//         if(cockshot.className == 'wall' && cockshot.style.background == 'white'){ 
//           cockshot.style.background = color[random(0,9)];
//           cockshot.style.transition = '2s ease';
//           setTimeout(() => { 
//             cockshot.style.background = color[random(0,9)];
//             cockshot.style.transition = '3s ease';
//           }, 3000);
//           setTimeout(() => { 
//             cockshot.style.background = 'white';
//             cockshot.style.transition = '4s ease';
//           }, 7000);
//         }



//         /**
//          * 
//          *  [ ЕСЛИ ПУЛЯ ПОПАЛА В СТЕНУ С ОРАНЖЕВОЙ РАМКОЙ START MUSIC ] 
//          * 
//          */

//         if(cockshot.className == 'wall' && cockshot.style.border == '1px solid orange'){
//           // audio(random(0,4)) 
//         }

//       }

//     }, 10) // скорость полета пули

//     // Дальность полета пули
//     setTimeout(() => { clearInterval(z), bullet.remove() }, 3000)


//   /* [ ЕСЛИ НЕТ ПАТРОНОВ ] */
//   } else { 
//     // Звук пустого магазина
//     // audio('pistol/1')
//   }

// }

document.onclick = (e) => {

  marker(e.pageX-main.getBoundingClientRect().x+main.scrollLeft,
  e.pageY-main.getBoundingClientRect().y+main.scrollTop,'green')

  let x = 0, y = 0, 
  userX = usr.offsetLeft+50,  
  userY = usr.offsetTop+50,

  pageX = e.pageX-main.getBoundingClientRect().x+main.scrollLeft, 
  pageY = e.pageY-main.getBoundingClientRect().y+main.scrollTop, 

  a = pageX-userX, b = pageY-userY, k = b/a 


  for(let i=0; i<40; i++){

    if(Math.abs(a) < Math.abs(b)){
      (pageY>userY ? y+=10 : y-=10), x=y/k
    } else {
      (pageX>userX ? x+=10 : x-=10), y=k*x
    }

    let bullet = document.createElement('div')
    bullet.setAttribute('class', 'bullet')
    bullet.style.margin = `${y+userY}px 0 0 ${x+userX}px`
    if(i == 20) bullet.style.background = 'blue';
    map.append(bullet)


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
    if(cockshot.className == 'bottom') break;
    
  } 
}






/* [ ADD WALLS ] */
let walls = [
  60,0, 132,0, 30,36, 0,72,
  460,72, 532,72, 604,72,
  820,72, 892,72, 320,350,
  604,350, 820,350, 892,350
]

function addWall(x,y){
  let wall = document.createElement('div')
  wall.setAttribute('class', 'wall')
  wall.style.margin = `${y}px 0 0 ${x}px`
  map.append(wall)

  let test = document.createElement('div')
  test.setAttribute('class', 'bottom')
  test.style.margin = `${y+65}px 0 0 ${x+15}px`
  map.append(test)
}

for(let i=0; i<walls.length-1; i++){
  let j = i; j++
  addWall(walls[i],walls[j])
  i++
}



/* [ ИЗМЕНИТЬ ЗДОРОВЬЕ ] */
function changeHealthUser(value){
  let scale = document.getElementById('scale')
  document.getElementById('health').style.display = 'block'
  
  if(value>75){  
    scale.style.background = 'greenyellow'
  } else if(value>50){
    scale.style.background = 'yellow'
  } else if(value>25){
    scale.style.background = 'orange'
  } else {
    scale.style.background = 'red'
  } 

  user.health = value
  document.getElementById('scale').style.width = value+'px'

  setTimeout(() => {
    document.getElementById('health').style.display = 'none'
  }, 3000)
}




/* [ USER ] */
let user = {
  'x': 200, 'y': 150, 'health': 100, 'ammo': 100,
  'body': document.getElementsByClassName('user')[0],
  'add': () => { map.innerHTML += `
    <div class="user">
      <div id="health">
        <div id="scale"></div>
      </div>
    </div>`}
}; user.add()






/* [ СЦЕНАРИЙ СОПРИКОСНОВЕНИЯ С ОБЬЕКТОМ ПРИ ДВИЖЕНИИ ] */
let usr = document.getElementsByClassName('user')[0],
    above = true, under = true 

function touch(){

  // Точки соприкосновения
  let elem = [
    document.elementFromPoint(usr.getBoundingClientRect().x+27, usr.getBoundingClientRect().y+66),  // 0
    document.elementFromPoint(usr.getBoundingClientRect().x+31, usr.getBoundingClientRect().y+64),  // 1
    document.elementFromPoint(usr.getBoundingClientRect().x+98, usr.getBoundingClientRect().y+64),  // 2
    document.elementFromPoint(usr.getBoundingClientRect().x+100,usr.getBoundingClientRect().y+66),  // 3
    document.elementFromPoint(usr.getBoundingClientRect().x+72, usr.getBoundingClientRect().y+100), // 4
    document.elementFromPoint(usr.getBoundingClientRect().x+68, usr.getBoundingClientRect().y+102), // 5
    document.elementFromPoint(usr.getBoundingClientRect().x,    usr.getBoundingClientRect().y+102), // 6
    document.elementFromPoint(usr.getBoundingClientRect().x-2,  usr.getBoundingClientRect().y+100), // 7
    document.elementFromPoint(usr.getBoundingClientRect().x-2,  usr.getBoundingClientRect().y+36),  // 8
    document.elementFromPoint(usr.getBoundingClientRect().x+30, usr.getBoundingClientRect().y-2),   // 9
    document.elementFromPoint(usr.getBoundingClientRect().x+100,usr.getBoundingClientRect().y-2)    // 10
  ]



  /* [ ОПРЕДЕЛЯЕМ ГРАНИЦИ КАРТЫ ] */
  if(user.x<0){ user.x+=2 } if(user.x>main.offsetWidth-100) { user.x-=2 }
  if(user.y<0){ user.y+=2 } if(user.y>main.scrollHeight-100){ user.y-=2 }


  // В elem попадает элемент с которым произошло столкновение
  for(let i=0; i<elem.length; i++){



    /**
     * 
     *  [ ЕСЛИ СОПРЕКОСНУЛИСЬ С ПОТРОНАМИ ... ] 
     * 
     */

    if(elem[i].className == 'ammo'){
      
      /* [ УДАЛИТЬ ЯЩИК С ПАТРОНАМИ ] */
      elem[i].style.display = 'none'

      /* [ ВОЗРОДИТЬ ЯЩИК С ПАТРОНАМИ ЧЕРЕЗ ... ] */
      setTimeout(() => {
        elem[i].style.display = 'block'
      }, 3000)

      /* [ ДОБАВИТЬ ПОЛЗОВАТЕЛЮ 10 ПАТРОНОВ ] */
      if(user.ammo < 120) user.ammo += 10; 
      break
    }




    /**
     * 
     *  [ ЕСЛИ СОПРЕКОСНУЛИСЬ С АПТЕЧКОЙ ... ] 
     * 
     */

    if(elem[i].className == 'medic'){

      /* [ УДАЛИТЬ АПТЕЧКУ ] */
      elem[i].style.display = 'none'

      /* [ ВОЗРОДИТЬ АПТЕЧКУ ЧЕРЕЗ ... ] */
      setTimeout(() => {
        elem[i].style.display = 'block'
      }, 3000)

      /* [ ИЗМЕНИТЬ ЗДОРОВЬЕ ] */
      changeHealthUser(100)
      break
    }




    /* [ КОГО ОТОБРАЗИТЬ СВЕРХУ ] */
    if(elem[i].className == 'wall'){
      if(i == 8 || i == 9 || i == 10){
        if(under) usr.style.zIndex = 3;
        if(i == 8) above = false;
      }if(i == 3 || i == 5 || i == 6){ 
        if(above) usr.style.zIndex = 1;
        if(i == 3) under = false;
      } continue
    } 


    /**
     * 
     *  [ ЕСЛИ СОПРЕКОСНУЛИСЬ С СТЕНОЙ ... ] 
     * 
     */

    if(elem[i].className == 'bottom'){
      if(i == 0 || i == 7) user.x+=2, scrollX+=2;
      if(i == 3 || i == 4) user.x-=2, scrollX-=2;
      if(i == 1 || i == 2) user.y+=2, scrollY+=2;
      if(i == 6 || i == 5) user.y-=2, scrollY-=2;
      break
    }



    /**
     * 
     *  [ ЕСЛИ СОПРЕКОСНУЛИСЬ С ДВИЖИМЫМ БЛОКОМ ... ] 
     * 
     */

    // if(elem[i].className == 'block'){
    //   let j = elem[i].getAttribute('index')
    //   if(i == 0 || i == 7) block[j][0]-=2;
    //   if(i == 3 || i == 4) block[j][0]+=2;
    //   if(i == 1 || i == 2) block[j][1]-=2;
    //   if(i == 6 || i == 5) block[j][1]+=2;
    //   elem[i].style.margin = `${block[j][1]}
    //   px 0 0 ${block[j][0]}px`; break
    // }



    /**
     * 
     *  [ НЕТ КАСАНИЯ ] 
     * 
     */

    if(elem[i].className == '' || elem[i].className == 'user'){
      if(i == 8) above = true; if(i == 3) under = true; 
    } 

  }

  /* [ ДВИЖЕНИЕ ЭКРАНА ЗА ПОЛЬЗОВАТЕЛЕМ ] */
  document.querySelector('main').scrollTo(scrollX,scrollY)
  usr.style.margin = `${user.y}px 0 0 ${user.x}px`
}










/* [ ПЕРЕМЕЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ] */
let intervalX = 0, intervalY = 0

document.onkeydown = (e) => {
  switch(e.code){
    case 'KeyW': if(!intervalY) intervalY = setInterval(() => { touch(), user.y-=2, scrollY-=2; }, 10); break
    case 'KeyS': if(!intervalY) intervalY = setInterval(() => { touch(), user.y+=2, scrollY+=2; }, 10); break
    case 'KeyA': if(!intervalX) intervalX = setInterval(() => { touch(), user.x-=2, scrollX-=2; }, 10); break
    case 'KeyD': if(!intervalX) intervalX = setInterval(() => { touch(), user.x+=2, scrollX+=2; }, 10); break
  }
  // console.log('scrollX: '+scrollX+' scrollY: '+scrollY)
  // console.log('x: '+usr.offsetLeft+' y: '+usr.offsetTop)
}

document.onkeyup = (e) => {
  switch(e.code){
    case 'KeyW': clearInterval(intervalY), intervalY = 0; break
    case 'KeyS': clearInterval(intervalY), intervalY = 0; break
    case 'KeyA': clearInterval(intervalX), intervalX = 0; break
    case 'KeyD': clearInterval(intervalX), intervalX = 0; break
  }
}




/* [ ПОВЕРНУТЬ ПОЛЬЗОВАТЕЛЯ ПРИ КЛИКЕ ] */
// document.onclick = (e) => { 
//   u[1][0].style.background = 
//   (e.pageX>(y+50) && e.pageY>(x+50)) ? 'url(img/usr/7/'+n+'.png)' :
//   (e.pageX<y && e.pageY>(x+50))      ? 'url(img/usr/6/'+n+'.png)' :
//   (e.pageX>(y+50) && e.pageY<x)      ? 'url(img/usr/5/'+n+'.png)' :
//   (e.pageX<y && e.pageY<x)           ? 'url(img/usr/4/'+n+'.png)' :
//   (e.pageX>(y+50) && e.pageY>x)      ? 'url(img/usr/3/'+n+'.png)' :
//   (e.pageX<y && e.pageY>x)           ? 'url(img/usr/2/'+n+'.png)' :
//   (e.pageX>y && e.pageY>(x+50))      ? 'url(img/usr/1/'+n+'.png)' :
//   (e.pageX>y && e.pageY<(x+50))      ? 'url(img/usr/0/'+n+'.png)' :
//                                        'url(img/usr/1/'+n+'.png)' ;
// }



