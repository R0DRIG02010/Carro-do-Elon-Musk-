// 1. Obtém a referência do canvas:
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");


// 2. Define width & height da imagem do rover:
roverWidth = 100;
roverHeight = 90;

// 3. Posiciona o rover no canvas:

roverX = 10;
roverY = 10;
// 4. Adiciona a imagem de fundo de Marte e a imagem do rover:
backgroundImage = "mars.jpg";
roverImage = "rover.png";

// Código da função add:
function add() {
	
backgruondImgTag = new Image();
backgruondImgTag.onload = uploadBackground;
backgruondImgTag.src = "mars.jpg";

RoverImgTag = new Image();
RoverImgTag.onload = uploadrover;
RoverImgTag.src = roverImage;
}
// 5. Adicione a função uploadBackground(): é chamada para enviar a imagem de fundo.
function uploadBackground() {
	ctx.drawImage(backgruondImgTag, 0, 0, canvas.width, canvas.height);
}
// uploadrover() é chamada para enviar a imagem do rover.
function uploadrover() {
ctx.drawImage(RoverImgTag, roverX, roverY, roverWidth, roverHeight);}
	
// 6. Adiciona uma função chamada myKeydown() :
window.addEventListener("keydown",myKeyDown );

function myKeyDown(e)
{
	key=e.keyCode;
	if(key=='38'){up();}
	if(key=='40'){down();}
	if(key=='37'){left();}
	if(key=='39'){right();}
}

function up()
{
    if(roverY >=0)
    {
        roverY = roverY - 10;
        console.log("Quando direcional cima for pressionada,  x = " + roverX + " | y = " +roverY);
         uploadBackground();
         uploadrover();
    }
}
function down()
{
    if(roverY <=500)
    {
        roverY =roverY+ 10;
        console.log("Quando direcional baixo for pressionda,  x = " + roverX + " | y = " +roverY);
        uploadBackground();
         uploadrover();
    }
}

function left()
{
    if(roverX >= 0)
    {
        roverX =roverX - 10;
        console.log("Quando direcional esquerda for pressionada,  x = " + roverX + " | y = " +roverY);
        uploadBackground();
         uploadrover();
    }
}

function right()
{
    if(roverX <= 700)
    {
        roverX =roverX + 10;
        console.log("Quando direcional direita for pressionada,  x = " + roverX + " | y = " +roverY);
        uploadBackground();
        uploadrover();
   }
}
