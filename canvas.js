var canvas = document.getElementById('DemoCanvas_back');
//we have already set height = 560 and width = 1340 in HTML page
if (canvas.getContext) 
{
	var ctx = canvas.getContext("2d");

  	//for y-axis
  	for (i = 0; i < 560; i += 20) 
  	{
  		ctx.moveTo(0, i);
  		ctx.lineTo(canvas.width, i);
  		ctx.stroke();
  		ctx.lineWidth = 1;
  		ctx.strokeStyle = '#eee'; //color property
  	}

  	//for x-axis
  	for (i = 0; i <1340; i += 20) 
  	{
  		ctx.moveTo(i, 0);
  		ctx.lineTo(i,canvas.width/2);
  		ctx.stroke();
  		ctx.lineWidth = 1;		//width can be vary from 1 to 12
  		ctx.strokeStyle = '#eee';
  	}
  } 
var c_front = document.getElementById('DemoCanvas_front');
 if (c_front.getContext) {
 	var c_fr = c_front.getContext('2d');

		// c_fr.beginPath();
		// c_fr.moveTo(600	, 0);
		// c_fr.lineTo(600 , 160);
		// c_fr.stroke();

		// c_fr.beginPath();
		// c_fr.moveTo(640	, 0);
		// c_fr.lineTo(640 , 160);
		// c_fr.stroke();

		// c_fr.beginPath();
		// c_fr.moveTo(600 , 160);
		// c_fr.lineTo(400 , 160);
		// c_fr.stroke();

		// c_fr.beginPath();
		// c_fr.moveTo(600 , 160);
		// c_fr.lineTo(400 , 160);
		// c_fr.stroke();

		// c_fr.beginPath();
		// c_fr.moveTo(600 , 160);
		// c_fr.lineTo(300 , 160);
		// c_fr.stroke();

		c_fr.beginPath();
		ctx.lineJoin = "round";
		c_fr.moveTo(600	, 0);
		c_fr.lineTo(600 , 160);
		c_fr.lineTo(260 , 160);
		c_fr.lineTo(260 , 360);
		c_fr.lineTo(1200 , 360);
		c_fr.lineTo(1200 , 500);
		c_fr.lineTo(780 , 500);
		c_fr.lineTo(780 , 60);
		c_fr.lineTo(640 , 60);
		c_fr.stroke();

		c_fr.beginPath();
		ctx.lineJoin = "round";
		c_fr.moveTo(640	, 0);
		c_fr.lineTo(640 , 200);
		c_fr.lineTo(300 , 200);
		c_fr.lineTo(300 , 320);
		c_fr.lineTo(1240 , 320);
		c_fr.lineTo(1240 , 540);
		c_fr.lineTo(740 , 540);
		c_fr.lineTo(740 , 100);
		c_fr.lineTo(640 , 100);
		c_fr.stroke();
 }