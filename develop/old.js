/* [ Z-INDEX ] */
function zIndex(x,y){
  // return Math.floor((y+65)/35)+Math.floor((x+30)/71)
  // return Math.floor(y/35)*(Math.floor((y+65)/35)+Math.floor((x+30)/71))

  let step = (Math.floor(y/35)*30)*-1
  return Math.floor(y/35)*(Math.floor((y+65)/35)+Math.floor(((step+x)+30)/71))

  // let step = (Math.floor(y/35)*30)*-1
  // return Math.floor(y/35)*(Math.floor(y/35)+Math.floor((step+x)/71))
}

/* [ SETKA ] */
function setka(){
  let step = 0
  for(let i=0; i<700; i+=35){
    step -= 30 

    for(let j=0; j<1420; j+=71){
      let a = document.createElement('div');
      a.style.margin = `${i+65}px 0 0 ${(step + j)+30}px`;
      a.style.width = '2px';
      a.style.height = '2px';
      a.style.background = 'red';
      a.style.position = 'absolute';
      a.style.zIndex = 1000;
      a.innerHTML = zIndex(j,i)
      section.append(a);
    }
  }

} // setka()


