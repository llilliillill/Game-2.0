/* [ MARKER ] */
function marker(x,y,z){
  let a = document.createElement('div');
  a.style.margin = `${y}px 0 0 ${x}px`
  a.style.width = '2px'
  a.style.height = '2px'
  a.style.background = (z) ? z : 'red'
  a.style.position = 'absolute'
  a.style.zIndex = 1559
  section.append(a)
} 

/* [ НАРИСОВАТЬ СЕТКУ ] */
function setka(){
  for(let i=0; i<700; i+=35){
    for(let j=0; j<1420; j+=71){
      let a = document.createElement('div');
      a.style.margin = `${i}px 0 0 ${j}px`;
      a.style.width = '2px';
      a.style.height = '2px';
      a.style.background = 'red';
      a.style.position = 'absolute';
      a.style.zIndex = 1559;
      a.innerHTML = zIndex(j,i)
      section.append(a);
    }
  }
} // setka()

