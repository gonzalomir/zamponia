window.addEventListener('load', function(){
			var z1 = document.getElementById('zamponia');
			z1.addEventListener('touchstart', function(e){
  			var touchobj = e.changedTouches[0];
  			alert('se toco la pantalla');
  			e.preventDefault();
 			}, false);
 
	 		z1.addEventListener('touchmove', function(e){
  			alert('hay un desplazamiento en la pantalla touch');
  			var touchobj = e.changedTouches[0];
 			}, false);
	 
	 		z1.addEventListener('touchend', function(e){
  			var touchobj = e.changedTouches[0];
  			alert('touchend event');
  			e.preventDefault();
 			}, false);
		}, false);