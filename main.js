var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
 var player_obj = "";

function new_image()
{
	fabric.Image.fromURL("BirthdayImage.jpg" , function (Img){
        player_obj = Img;
        player_obj.scaleToWidth(700);
        player_obj.scaleToHeight(510);
        player_obj.set({
            top: 0 ,
            left: 0
        });
        canvas.add(player_obj);

    });
	
}

function playSound(){
	x.play();
}
