const canvas  = document.getElementById('ahorcado')
var pincel = canvas.getContext('2d');

pincel.strokeStyle = "#0A3871"
pincel.lineWidth = 6
pincel.lineCap = "round"
pincel.lineJoin = "round"

pincel.beginPath()
pincel.moveTo(200,350)
pincel.lineTo(400,350)
pincel.moveTo(260,350)
pincel.lineTo(260,50)
pincel.moveTo(260,50)
pincel.lineTo(370,50)
pincel.moveTo(370,50)
pincel.lineTo(370,80)

pincel.stroke()

function head(){
pincel.beginPath()
pincel.arc(370,100,20,0,2*3.14)
pincel.stroke()
}

function cuerpo(){
pincel.beginPath()
pincel.moveTo(370,120)
pincel.lineTo(370,240)
pincel.stroke()
}

function piernaD(){
pincel.beginPath()
pincel.moveTo(370,240)
pincel.lineTo(400,290)
pincel.stroke()
}

function piernaI(){
pincel.beginPath()
pincel.moveTo(370,240)
pincel.lineTo(340,290)
pincel.stroke()
}

function brazoD(){
pincel.beginPath()
pincel.moveTo(370,120)
pincel.lineTo(400,170)
pincel.stroke()
}

function brazoI(){
pincel.beginPath()
pincel.moveTo(370,120)
pincel.lineTo(340,170)
pincel.stroke()
}

function escTxt(texto){
	pincel.beginPath;
	pincel.fillStyle = "red"
	pincel.strokeStyle = "red"
	pincel.font = " 70px Inter"
	pincel.fillText(texto, 200,200)
	pincel.strokeText (texto,200,200)

}

