let ballArray = [{
    left: '60px',
    top: '60px'
  }];
  let field = document.getElementById('field');
  let ball = document.querySelector('svg.svg');
  let repeat = document.querySelector('a.myButton');
  repeat.addEventListener('click', goRepeat);
  
  field.onclick = function (e) {
    let left = ball.style.left = e.pageX + 'px';
    let top = ball.style.top = e.pageY + 'px';
    ballArray.push({
      left,
      top
    });
  }
  
  function goRepeat() {
    let i = 0;
    let startTimert = setInterval(function () {
      /* setInterval is a cycle therefore array iteration through the background is not needed */
      ball.style.left = ballArray[i].left;
      ball.style.top = ballArray[i].top;
      i++;
      if (i === ballArray.length) {
        /* stop cycle repeat */
        clearInterval(startTimert);
      }
    }, 800);
  }
  console.log(ballArray);