


function draw() {
    var canvas = document.getElementById('canvas');
    if (canvas.getContext) {
      var context = canvas.getContext('2d');
  
      context.fillRect(20,20,100,100);
      
    }
  }