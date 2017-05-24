function get_alea(min, max)
{
	var nb = Math.random() * (max - min) + min;
	nb = Math.ceil(nb);
	return(nb);
}

function	draw_carre(position, nb)
{
	var map = document.getElementById('fond');
	var math = Math.ceil((position + 1) / 4) - 1;
	var x_px = 10 + ((115 + 5) * ((position % 4) ));
	var y_px = 10 + ((115 + 5) * math);
	fond.innerHTML += "<div class=\"carre position" + position + "\" style=\"top:" + y_px + "px;left:" +  x_px + "px;\"><h1>" + nb + "</h1></div>";
	actu_color();
}

function	positionning()
{
	var i = 0;
	while(i <= 15)
	{
		if (map[i] != 0)
		{
			if (map[i] == 2)
				draw_carre(i, 2);
			if (map[i] == 4)
				draw_carre(i, 4);
		}
		i++;
	}
}

function	add_new_piece()
{
	var i = 0;
	var case_libre = 0;
	var alea = get_alea(0,100);
	while (i <= 15)
	{
		if (map[i] == 0)
			case_libre++;
		i++;
	}
	if (case_libre == 0)
		life = 0;
	else if (case_libre == 1)
	{
		i = 0;
		while (i <= 15)
		{
			if (map[i] == 0)
			{
				if (alea <= 15)
				{
					draw_carre(i, 4);
					map[i] = 4;
				}
				else
				{
					draw_carre(i, 2);
					map[i] = 2;
				}
			}
			i++;
		}		
		i = 0;
	}
	else
	{
		var pos = get_alea(0,case_libre - 1);
		while (map[pos] != 0)
			pos = get_alea(0,15);
		if (alea <= 15)
		{
			draw_carre(pos, 4);
			map[pos] = 4;
		}
		else
		{
			draw_carre(pos, 2);
			map[pos] = 2;
		}
	}
}

function	actu_color()
{
	var carres = document.getElementsByClassName('carre');
	var i = 0;
	while (i < carres.length)
	{
		if (carres[i].innerHTML == "<h1>4</h1>")
		 	carres[i].style.backgroundColor = "rgb(237,224,200)";
		if (carres[i].innerHTML == "<h1>8</h1>")
		 	carres[i].style.backgroundColor = "rgb(242,177,121)";
		if (carres[i].innerHTML == "<h1>16</h1>")
		 	carres[i].style.backgroundColor = "rgb(245,149,99)";
		if (carres[i].innerHTML == "<h1>32</h1>")
		 	carres[i].style.backgroundColor = "rgb(246,124,95)";
		if (carres[i].innerHTML == "<h1>64</h1>")
		 	carres[i].style.backgroundColor = "rgb(246,194,59)";
		if (carres[i].innerHTML == "<h1>128</h1>")
		 	carres[i].style.backgroundColor = "rgb(237,207,114)";
		 if (carres[i].innerHTML == "<h1>256</h1>")
		 	carres[i].style.backgroundColor = "rgb(237,204,97)";
		i++;
	}

}

function	is_playable()
{
	var i = 0;
	while (i <= 15)
	{
		if (map[i] == 0)
			return (1);
		if (map[i] == map[i + 1] && (i % 4) != 3)
			return(1);
		if(i < 12)
		{
			if (map[i] == map[i + 4])
				return(1);
		}
		if(i > 2)
		{
			if (map[i] == map[i - 4])
				return(1);
		}
		i++;
	}
	return (0);
}

function	restart_game()
{
	var i = 0;
	var elem_to_del = document.getElementById('fond');
	var element = document.getElementById('lose_box');
	element.style.visibility = "hidden";
	fond.innerHTML = "";
	while (i <= 15)
	{
		map[i] = 0;
		i++;
	}
	init();
}

function	draw_score()
{
	var elem_score = document.getElementById('score');
	var score = 0;
	var i = 0;
	while (i <= 15)
	{
		score += map[i];
		i++;
	}
	elem_score.innerHTML = "<h1>" + score + "</h1>";
}

function	draw_lose()
{
	var element = document.getElementById('lose_box');
	element.style.visibility = "visible";
}

window.addEventListener("keydown", function(e)
{
	if (is_playable() != 0)
	{
		if(e.keyCode==37)
		{
			if (move_left() > 0)
				setTimeout(function(){ add_new_piece(); }, 300);
		}
		else if(e.keyCode==38)
		{
			if (move_top() > 0)
				setTimeout(function(){ add_new_piece(); }, 300);
		}
		else if(e.keyCode==39)
		{
			if (move_right() > 0)
				setTimeout(function(){ add_new_piece(); }, 300);
		}
		else if(e.keyCode==40)
		{
			if (move_bot() > 0)
				setTimeout(function(){ add_new_piece(); }, 300);
		}
		actu_color();
		draw_score();
	}
	else
		draw_lose();
}, true);

function init()
{
	var c1 = get_alea(0,15);
	var c2 = get_alea(0,15);
	while (c2 === c1)
	{
		c2 = get_alea(0,15);
	}
	var alea = get_alea(0,100);
	if (alea <= 15)
		map[c1] = 4;
	else
		map[c1] = 2;
	var alea = get_alea(0,100);
	if (alea <= 15)
		map[c2] = 4;
	else
		map[c2] = 2;
	positionning();
	draw_score();
}

var map = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
init();