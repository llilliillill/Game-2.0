/* [ GAME SATTINGS ] */
let map = document.querySelector('section'),
mapWidth = 1600, mapHeight = 2050,
sx = 0, sy = 0

document.oncontextmenu = () => { 
  sx=0, sy=0
  document.querySelector('main').scrollTo(sx,sy)
  document.location = 'index.html'
  return false 
}

/* [ GAME FUNCTIONS ] */
function random(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// function audio(x,y){
//   let a = new Audio('music/'+x+'.mp3');
//   a.volume = '0.2';
//   a.play();
//   return (y) ? a : false;
// } 

// function setMenu(x,z){
//   if(document.getElementById('menu')){
//   document.getElementById('menu').remove();}
//   let a = document.createElement('div');
//   a.setAttribute('id', 'menu');
//   a.style.width = '100%';
//   a.style.zIndex = '2';
//   a.style.position = 'fixed';
//   a.style.height = '30px';
//   a.style.textAlign = 'center';
//   a.style.lineHeight = '1.8';
//   a.style.background = 'whitesmoke';
//   a.style.border = (z) ? '1px solid '+z : '1px solid green';
//   a.innerHTML = (z) ? '<b style="color:'+z+';">'+
//   x+'</b>' : '<b style="color:green;">'+x+'</b>';
//   document.body.append(a);
//   setTimeout(() => { a.remove(); }, 3000);
// }

// function setInfo(){
//   let a = document.getElementById('info');
//   a.style.width = '100%';
//   a.style.height = '30px';
//   a.style.position = 'fixed';
//   a.style.zIndex = 5;
//   a.style.textAlign = 'center';
//   a.style.lineHeight = '1.8';
//   a.style.background = 'whitesmoke';
//   a.style.border = '1px solid black';
// } setInfo()

// function marker(x,y,z){
//   let a = document.createElement('div');
//   a.style.margin = y+'px 0 0 '+x+'px';
//   a.style.width = '2px';
//   a.style.height = '2px';
//   a.style.background = (z) ? z : 'red';
//   a.style.position = 'absolute';
//   a.style.zIndex = 3;
//   document.body.append(a);
// } 










/* [ CREATE SONG ] */
// function createSong(x,y){
//   let a = document.createElement('img');
//   a.style.margin = y+'px 0 0 '+x+'px';
//   a.style.border = '1px solid orange';
//   a.style.position = 'absolute';
//   a.style.zIndex = 1;
//   a.style.width = '50px';
//   a.style.height = '50px';
//   a.src = 'music/music.png';
//   a.setAttribute('class', 'wall');
//   document.body.append(a);
// } createSong(50,50);



/* [ ACCOUTREMENT ] */
// function accoutrement(x,y,z){ 
//   setTimeout(() => {
//     let a = document.createElement('div');
//     a.style.margin = random(y,(y+200))+'px 0 0 '
//                     +random(x,(x+200))+'px';
//     a.style.zIndex = 1;
//     a.style.position = 'absolute';
//     a.style.width = '50px';
//     a.style.height = '50px';
//     a.style.background = 'url(img/'+z+'.png)';
//     a.setAttribute('x', x);
//     a.setAttribute('y', y);
//     a.setAttribute('class', z);
//     document.body.append(a);
//   }, 1000); 
// } 
// accoutrement(200,250,'ammo');
// accoutrement(200,250,'medic');
// accoutrement(1050,150,'medic');
// accoutrement(1050,450,'ammo');


/* [ CREATE BLOCK ] */
// let block = [[280,300,'brown'],
//              [400,270,'black'],
//              [900,260,'greenyellow'],
//              [1000,260,'yellow']];
// function createBlock(z){
//   for(let i=0; i<z.length; i++){
//     let a = document.createElement('div');
//     a.style.margin = z[i][1]+'px 0 0 '+z[i][0]+'px';
//     a.style.border = '1px solid black';
//     a.style.position = 'absolute';
//     a.style.zIndex = 2;
//     a.style.width = '50px';
//     a.style.height = '50px';
//     a.style.background = (z[i][2]) ? z[i][2] : 'white';
//     a.setAttribute('class', 'block');
//     a.setAttribute('index', i);
//     document.body.append(a);
//   }
// } createBlock(block);





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


// Точка начала огня
// let p = [0,0]

// document.body.onclick = (e) => {


//   //Если есть патроны
//   if(user.ammo > 0){

//     /* [ ... ] */
//     //audio('pistol/0') 
//     user.ammo-- 

//     // Анимация выстрела  
//     //user.body.src = 'img/usr/8/0.png'

//     /* [ СТАРТОВАЯ ПОЗИЦИЯ ПУЛИ ] */
//     p[0] = user.x+25
//     p[1] = user.y+25

//     let x1 = 0, y1 = 0,
//     k = (e.pageY-p[1])/(e.pageX-p[0])



//     /* [ СОЗДАЕМ ПУЛЮ ] */
//     let bullet = document.createElement('div')
//     bullet.style.margin = p[1]+'px 0 0 '+p[0]+'px'
//     bullet.setAttribute('class', 'bullet')
//     map.append(bullet)



//     /* [ ДВИГАЕМ ПУЛЮ ] */
//     let z = setInterval(() => {

//       /* [ УРАВНЕНИЕ ПОЛЕТА ПУЛИ f(x) ] */
//       (e.pageX>p[0] ? x1+=10 : x1-=10 ); y1=(k*x1)

//       /* [ ДАЛЬНОСТЬ ПУЛИ ПО Y ] */
//       if(y1>-500 && y1<500){
        
//         /* [ ДВИГАЕМ ЭЛЕМЕНТ ПУЛЯ ] */
//         bullet.style.margin = (y1+p[1])+'px 0 0 '+(x1+p[0])+'px'
        
//         /* [ ПРОВЕРЯЕМ ЧТО ПОД ЭЛЕМЕНТОМ ПУЛЯ ] */
//         let cockshot = document.elementFromPoint(
//           bullet.getBoundingClientRect().x,
//           bullet.getBoundingClientRect().y
//         )

//         /* [ ЕСЛИ ПУЛЯ ПОПАДАЕТ НА КРАЙ КАРТЫ УДАЛЯЕМ ЕЕ ] */
//         if(bullet.getBoundingClientRect().x<0)   { bullet.remove() } 
//         if(bullet.getBoundingClientRect().y<0)   { bullet.remove() } 
//         if(bullet.getBoundingClientRect().x>1998){ bullet.remove() }
//         if(bullet.getBoundingClientRect().y>1998){ bullet.remove() }








//         /** 
//          * 
//          *  [ ЕСЛИ ПУЛЯ ПОПАЛА ВО ВРАГА ... ] 
//          * 
//          */

//         if(cockshot.classList == 'vrag'){

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

//         if(cockshot.classList == 'wall' || cockshot.classList == 'block'){ 
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
//         if(cockshot.classList == 'wall' && cockshot.style.background == 'white'){ 
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

//         if(cockshot.classList == 'wall' && cockshot.style.border == '1px solid orange'){
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







/* [ ADD WALL ] */
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


/* [ УГОЛОК ] */
addWall(60,0)
addWall(132,0)
addWall(30,36)
addWall(0,72)


/* [ СТЕНКА ] */
// addWall(460,72)
// addWall(430,108)
// addWall(400,144)


/* [ СТЕНКА ] */
addWall(460,72)
addWall(532,72)
addWall(604,72)
// addWall(676,72)
// addWall(748,72)
addWall(820,72)
addWall(892,72)


/* [ СТЕНКА ] */
addWall(320,350)
//addWall(460,284) // 2x y - 66

//addWall(532,350)

addWall(604,350) 
//addWall(604,284) // 2x

addWall(820,350)
//addWall(820,284)
addWall(892,350) 




/* [ USER ] */
let user = {
  'x': 200, 'y': 150, 'health': 100, 'ammo': 120,
  'body': document.getElementsByClassName('user')[0],
  'add': () => { map.innerHTML += `
    <div class="user">
      <div id="health">
        <div id="scale"></div>
      </div>
    </div>`}
}; user.add()



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



/* [ СЦЕНАРИЙ СОПРИКОСНОВЕНИЯ С ОБЬЕКТОМ ПРИ ДВИЖЕНИИ ] */
let usr = document.getElementsByClassName('user')[0]

// document.elementFromPoint(user.x-2, user.y+36), //8
// marker(user.x-2,user.y+36,'blue')

// document.elementFromPoint(user.x+30,   user.y-2),  //9
// marker(user.x+30,user.y-2,'red')

// document.elementFromPoint(user.x+100,user.y-2), //10
// marker(user.x+100,user.y-2,'red')


//marker(user.x+30,user.y-2,'red') // 9


//marker(user.x,user.y+102,'red') // 6

// marker(user.x+98,user.y+64,'red') //2

// marker(user.x+100,user.y+66,'blue') // 3

// marker(user.x+100,user.y-2,'green') // 10

// marker(user.x+72, user.y+100, 'blue')




let above = true, under = true 
function contact(){

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
  if(user.x<0){ user.x+=2 } if(user.x>mapWidth-100) { user.x-=2 }
  if(user.y<0){ user.y+=2 } if(user.y>mapHeight-100){ user.y-=2 }

  // В elem попадает элемент с которым произошло столкновение

  for(let i=0; i<elem.length; i++){

    /**
     * 
     *  [ ЕСЛИ СОПРЕКОСНУЛИСЬ С ПОТРОНАМИ ... ] 
     * 
     */

    if(elem[i].className == 'ammo'){

      accoutrement(
        parseInt(elem[i].getAttribute('x')),
        parseInt(elem[i].getAttribute('y')),
        'ammo'
      )

      elem[i].remove()

      /* [ ДОБАВИТЬ ПОЛЗОВАТЕЛЮ 10 ПАТРОНОВ ] */
      //audio('pistol/2');
      if(user.ammo < 120) user.ammo += 10; break
    }




    /**
     * 
     *  [ ЕСЛИ СОПРЕКОСНУЛИСЬ С АПТЕЧКОЙ ... ] 
     * 
     */

    if(elem[i].className == 'medic'){

      accoutrement(
        parseInt(elem[i].getAttribute('x')),
        parseInt(elem[i].getAttribute('y')),
        'medic'
      )

      elem[i].remove()

      /* [ ... ] */
      user.health = 50
      document.getElementById('scale').style.background = 'greenyellow'
      document.getElementById('scale').style.width = user.health+'px'
      //audio('star'); break
    }




    /* [ КОГО ОТОБРАЗИТЬ СВЕРХУ ] */
    if(elem[i].className == 'wall'){
      if(i == 8 || i == 9 || i == 10){
        if(under) usr.style.zIndex = 3;
        if(i == 8) above = false;
      }if(i == 3 || i == 5 || i == 6){ 
        if(above) usr.style.zIndex = 1;
        if(i == 3) under = false;
      } 
    } 


    /**
     * 
     *  [ ЕСЛИ СОПРЕКОСНУЛИСЬ С СТЕНОЙ ... ] 
     * 
     */

    if(elem[i].className == 'bottom'){
      if(i == 0 || i == 7) user.x+=2, sx+=2;
      if(i == 3 || i == 4) user.x-=2, sx-=2;
      if(i == 1 || i == 2) user.y+=2, sy+=2;
      if(i == 6 || i == 5) user.y-=2, sy-=2;
      break
    }



    /**
     * 
     *  [ ЕСЛИ СОПРЕКОСНУЛИСЬ С ДВИЖИМЫМ БЛОКОМ ... ] 
     * 
     */

    if(elem[i].className == 'block'){
      let j = elem[i].getAttribute('index')
      if(i == 0 || i == 7) block[j][0]-=2;
      if(i == 3 || i == 4) block[j][0]+=2;
      if(i == 1 || i == 2) block[j][1]-=2;
      if(i == 6 || i == 5) block[j][1]+=2;
      elem[i].style.margin = `${block[j][1]}
      px 0 0 ${block[j][0]}px`; break
    }



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
  document.querySelector('main').scrollTo(sx,sy)
  usr.style.margin = `${user.y}px 0 0 ${user.x}px`
}













/* [ ПЕРЕМЕЩЕНИЕ ПОЛЬЗОВАТЕЛЯ ] */
let intervalX = 0, intervalY = 0

document.onkeydown = (e) => {
  switch(e.code){
    case 'KeyW': if(!intervalY) intervalY = setInterval(() => { contact(), user.y-=2, sy-=2; }, 10); break
    case 'KeyS': if(!intervalY) intervalY = setInterval(() => { contact(), user.y+=2, sy+=2; }, 10); break
    case 'KeyA': if(!intervalX) intervalX = setInterval(() => { contact(), user.x-=2, sx-=2; }, 10); break
    case 'KeyD': if(!intervalX) intervalX = setInterval(() => { contact(), user.x+=2, sx+=2; }, 10); break
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



