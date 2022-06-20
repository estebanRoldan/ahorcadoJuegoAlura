var palabras = ['ALURA', 'AHORCADO', 'ORACLE', 'HOLA','CABEZA','CUSPIDE'];//'ALURA', 'AHORCADO', 'ORACLE', 'HOLA'
var tablero = document.getElementById('horca').getContext('2d');
var letras =[];
var palabraCorrecta = "";
var errores = 6;
var intentos = 1;


function carga(){
	
	//document.getElementById('canvas').style.display = 'block';
}

function iniciarJ(){

	document.getElementById('canvas').style.display = 'block';
	document.getElementById('pag1').style.display = 'none';
	dibujarLineas(escojerPalabraSecreta())
}
function inicio(){
	document.getElementById('canvas').style.display = 'none';
	document.getElementById('pag1').style.display = 'block';

}

function agNueva(){
		document.getElementById('pag2').style.display = 'block';
	document.getElementById('pag1').style.display = 'none';
}

function nuevaPalabra(){
	var nPal = document.getElementById('in').value
	console.log(nPal)
	palabras.push(nPal.toUpperCase())
	for(var i=0; i<palabras.length; i++){
 console.log(palabras[i]);
}
	document.getElementById('pag2').style.display = 'none';
	document.getElementById('canvas').style.display = 'block';

}






function escojerPalabraSecreta(){
	var palabra = palabras[Math.floor(Math.random()* palabras.length)]
	palabraSecreta = palabra;
    console.log(palabra);
	return palabraSecreta;
}

function dibujarLineas(){
	tablero.lineWidth = 6
	tablero.lineCap = "round"
	tablero.lineJoin = "round"
	tablero.strokeStyle = "#0A3871"
	tablero.beginPath()

	var ancho = 600/palabraSecreta.length;
	for (let i = 0; i < palabraSecreta.length; i++){
		tablero.moveTo(500+(ancho*i),640)
		tablero.lineTo(550 + (ancho*i), 640)
		tablero.stroke()
		tablero.closePath()
	}

 }

 function escribirLetraCorrecta(index){
 	tablero.font = 'bold 52px Inter'
	tablero.lineWidth = 6
	tablero.lineCap = "round"
	tablero.lineJoin = "round"
	tablero.fillStyle = "#0A3871"
	var ancho = 600/palabraSecreta.length
 	tablero.fillText(palabraSecreta[index],505+(ancho*index),620)
 	 }

 function escribirLetraIncorrecta(letra, errorsLeft){
tablero.font = 'bold 40px Inter'
	tablero.lineWidth = 6
	tablero.lineCap = "round"
	tablero.lineJoin = "round"
	tablero.fillStyle = "#0A3871"
 	tablero.fillText(letra, 535+(40*(10-errorsLeft)),710, 40)
 }

 function verificarLetraClicada(key) {
 	if(letras.length < 1 || letras.indexOf(key) <0 )
 	{
  	letras.push(key)
  	return false
 	}else{
 	letras.push(key)
 	return true
 	}
 } 

 function adicionarLetraCorrecta(i){
 	intentos++
 	console.log(intentos)
 	palabraCorrecta += palabraSecreta[i].toUpperCase()
    if (intentos === palabraSecreta.length){
    	escTxt('GANASTE')
    	setTimeout(function () {
       window.location.reload()
        
        }, 2000)
   
        }
  }

 function adicionarLetraIncorrecta (letter){
 	if(palabraSecreta.indexOf(letter) <= 0){
  		switch (errores) {
 
		case 0:		
	   	escTxt('PERDISTE')
	  setTimeout(function () {
       window.location.reload()
        
        }, 2000)
	   	 break;
	  	case 1:
	  	brazoI()
	    break;
	  	case 2:
	   brazoD()
	    break;
	  	case 3:
	   piernaI()
	    break;
	    case 4:
	   piernaD()
	    break;
	    case 5:
	    cuerpo();
	    break;
	    case 6:
	     head();
	    break;
    }
 		errores-=1;
	 } 	

}

document.onkeydown = (e) =>{
	//if(document.getElementById('canvas').style.display !== 'none'){
	
	let letra = e.key.toUpperCase()
	if (!verificarLetraClicada(e.key)){
		if(palabraSecreta.includes(letra)){
			console.log(letra)		
			adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
			for (let i = 0; i < palabraSecreta.length; i++) {
			if (palabraSecreta[i]== letra){
				escribirLetraCorrecta(i)
				}
				
			}
		}
		else{
		if(!verificarLetraClicada(e.key)) return
			adicionarLetraIncorrecta(letra)
		escribirLetraIncorrecta(letra, errores)
	    }
    }
//}
};
