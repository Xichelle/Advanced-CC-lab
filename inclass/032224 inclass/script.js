const containerElement = document.querySelector('.container')

containerElement.addEventListener('mousemove', function(event) {
  document.querySelector('.coordinates-x').innerHTML = event.x
  document.querySelector('.coordinates-y').innerHTML = event.y
  
  let lightness = Math.floor(event.x / 1021 * 100);
  let color = `hsl(180,50%,${lightness}%)`
  console.log(color);
  document.querySelector('.container').style.backgroundColor = color;
})