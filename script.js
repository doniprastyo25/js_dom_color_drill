const tombol = document.querySelector('#button');

// tombol.addEventListener('click', function() {
  //document.body.style.backgroundColor="green";
//   document.body.classList.toggle('biru-muda')
// })


const tAcakwarna = document.createElement('button');
const texB = document.createTextNode('randomCol');

tAcakwarna.appendChild(texB);
tAcakwarna.setAttribute('type', 'button');
tombol.after(tAcakwarna);

tAcakwarna.addEventListener('click', function () {
  const r = Math.round(Math.random() * 255);
  const g = Math.round(Math.random() * 255);
  const b = Math.round(Math.random() * 255);
  console.log(r)
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`
})

const sMerah = document.querySelector('input[name=sMerah]')
const sHijau = document.querySelector('input[name=sHijau]')
const sBiru = document.querySelector('input[name=sBiru]')

sMerah.addEventListener('input', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
})
sHijau.addEventListener('input', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
})
sBiru.addEventListener('input', function() {
  const r = sMerah.value;
  const g = sHijau.value;
  const b = sBiru.value;
  document.body.style.backgroundColor=`rgb(${r}, ${g}, ${b})`
})

document.body.addEventListener('mousemove', function (events) {
  const xpos = Math.round(events.clientX / window.innerWidth * 255);
  const ypos = Math.round(events.clientY / window.innerHeight * 255);
  document.body.style.backgroundColor=`rgb(${xpos},${ypos},100)`;
})