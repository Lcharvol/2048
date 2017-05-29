function	console_log_map()
{
	console.log(map[0]);
	console.log(map[1]);
	console.log(map[2]);
	console.log(map[3]);
	console.log(map[4]);
	console.log(map[5]);
	console.log(map[6]);
	console.log(map[7]);
	console.log(map[8]);
	console.log(map[9]);
	console.log(map[10]);
	console.log(map[11]);
	console.log(map[12]);
	console.log(map[13]);
	console.log(map[14]);
	console.log(map[15]);
	console.log(map[16]);
	console.log(map[17]);
	console.log(map[18]);
	console.log(map[19]);
}

function get_alea(min, max)
{
	var nb = Math.random() * (max - min) + min;
	nb = Math.ceil(nb);
	return(nb);
}


function draw_piece(y, x)
{
	var map_elem = document.getElementById('inner_map');
	map_elem.innerHTML += "<div class=\"piece " + active_piece + "\" style=\"top:0" + (y  * 25) + "px;left:" + (x  * 25) + "px;\"></div>";
	map[y][x] = active_piece;
}

function	draw_alea_piece()
{
	var alea = get_alea(0,7);
	if (check_end_of_game() == 1)
	{
			game = 0;
			return;
	}
	if (alea == 1)
	{
		draw_piece(0,0 + 4);
		draw_piece(0,1 + 4);
		draw_piece(0,2 + 4);
		draw_piece(0,3 + 4);
		piece_type = "barre";
	}
	else if (alea == 2)
	{
		draw_piece(0,0 + 4);
		draw_piece(0,1 + 4);
		draw_piece(1,0 + 4);
		draw_piece(1,1 + 4);
		piece_type = "carre";
	}
	else if (alea == 3)
	{
		draw_piece(1,0 + 4);
		draw_piece(1,1 + 4);
		draw_piece(1,2 + 4);
		draw_piece(0,2 + 4);
		piece_type = "L2";
	}
	else if (alea == 4)
	{
		draw_piece(1,0 + 4);
		draw_piece(1,1 + 4);
		draw_piece(1,2 + 4);
		draw_piece(0,0 + 4);
		piece_type = "L1";
	}
	else if (alea == 5)
	{
		draw_piece(0,1 + 4);
		draw_piece(0,2 + 4);
		draw_piece(1,0 + 4);
		draw_piece(1,1 + 4);
		piece_type = "Z1";
	}
	else if (alea == 6)
	{
		draw_piece(0,0 + 4);
		draw_piece(0,1 + 4);
		draw_piece(1,1 + 4);
		draw_piece(1,2 + 4);
		piece_type = "Z2";
	}
	else if (alea == 7)
	{
		draw_piece(0,1 + 4);
		draw_piece(1,0 + 4);
		draw_piece(1,1 + 4);
		draw_piece(1,2 + 4);
		piece_type = "triangle";
	}
	active_piece++;
}

function	rotate()
{
	if (piece_type == "barre")
		rotate_barre();
	if (piece_type == "L1")
		rotate_l1();
	if (piece_type == "L2")
		rotate_l2();
	if (piece_type == "Z1")
		rotate_z1();
	if (piece_type == "Z2")
		rotate_z2();
	if (piece_type == "triangle")
		rotate_triangle();

}

function	move_pieces_down()
{
	var piece_name = "piece " + (active_piece - 1);
	var pieces = document.getElementsByClassName(piece_name);
	for (var i = 0; i < pieces.length; i++)
	{
		if (parseInt(pieces[i].style.top) < 525)
	  		pieces[i].style.top = parseInt(pieces[i].style.top) + 25 + "px";
	}
}

function	get_the_color(nb)
{
	if (nb % 8 == 0)
		return("rgb(230, 126, 34),rgb(231, 76, 60)");
	if (nb % 8 == 1)
		return("rgb(52, 73, 94),rgb(44, 62, 80)");
	if (nb % 8 == 2)
		return("rgb(155, 89, 182),rgb(142, 68, 173)");
	if (nb % 8 == 3)
		return("rgb(52, 152, 219),rgb(41, 128, 185)");
	if (nb % 8 == 4)
		return("rgb(46, 204, 113),rgb(39, 174, 96)");
	if (nb % 8 == 5)
		return("rgb(26, 188, 156),rgb(22, 160, 133)");
	if (nb % 8 == 6)
		return("rgb(241, 196, 15),rgb(243, 156, 18)");
	if (nb % 8 == 7)
		return("rgb(149, 165, 166),rgb(127, 140, 141)");
}

function	actu_map()
{
	var i = 21;
	var i2 = 0;
	var color;
	var map_elem = document.getElementById('inner_map');
	var fixed_block = document.getElementById('fixed_block');
	map_elem.innerHTML = "";
	while (i >= 0)
	{
		i2 = 0;
		while (i2 <= 9)
		{
			color = get_the_color(map[i][i2]);
			if (map[i][i2] == (active_piece - 1))
				map_elem.innerHTML += "<div class=\"piece " + (active_piece - 1) + "\" style=\"background-image:radial-gradient(circle at top right," + color + ");top:" + (i  * 25) + "px;left:" + (i2  * 25) + "px;\"></div>";
			else if (map[i][i2] > 0)
			{
				fixed_block.innerHTML += "<div class=\"piece " + map[i][i2] + "\" style=\"background-image:radial-gradient(circle at top right," + color + ");top:" + (i  * 25) + "px;left:" + (i2  * 25) + "px;\"></div>";
				map[i][i2] = -1;
			}
			i2++;
		}
		i--;
	}

}

function	go_down()
{
	var i = 21;
	var i2 = 0;
	while (i >= 1)
	{
		i2 = 0;
		while (i2 < 10)
		{
			if (map[i][i2] == 0 && map[i - 1][i2] == (active_piece - 1))
			{
				map[i - 1][i2] = 0;
				map[i][i2] = (active_piece - 1);
			}
			i2++;
		}
		i--;
	}
}

function	move_bot()
{
	var i = 21;
	var i2 = 0;
	while (i >= 0)
	{
		i2 = 0;
		while(i2 <= 9)
		{
			if (map[i][i2] == (active_piece - 1) && i == 21)
				return;
			if (map[i][i2] == (active_piece - 1) && map[i + 1][i2] != 0 )
				return;
			if (i < 21)
			{
				if (map[i][i2] == (active_piece - 1) && (map[i + 1][i2] == 0 || map[i + 1][i2] == (active_piece - 1)))
				{
					map[i + 1][i2] = (active_piece - 1);
					map[i][i2] = 0;
				}
			}
			i2++;
		}
		i--;
	}
}

function	move_right()
{
	var i = 21;
	var i2 = 9;
	while (i2 >= 0)
	{
		i = 21;
		while(i >= 0)
		{
			if (map[i][i2] == (active_piece - 1) && i2 == 9)
				return;
			if (map[i][i2] == (active_piece - 1) && map[i][i2 + 1] == 0)
			{
				if (i2 >= 9)
					return;
				map[i][i2] = 0;
				map[i][i2 + 1] = (active_piece - 1);
			}
			i--;
		}
		i2--;
	}
}

function	move_left()
{
	var i = 21;
	var i2 = 0;
	while (i2 <= 9)
	{
		i = 21;
		while(i >= 0)
		{
			if (map[i][i2] == (active_piece - 1) && i2 == 0)
				return;
			if (map[i][i2] == (active_piece - 1) && map[i][i2 - 1] == 0)
			{
				if (i2 <= 0)
					return;
				map[i][i2] = 0;
				map[i][i2 - 1] = (active_piece - 1);
			}
			i--;
		}
		i2++;
	}
}

function	check_end_of_turn()
{
	var i = 21;
	var i2 = 0;
	while (i >= 0)
	{
		i2 = 0;
		while(i2 <= 9)
		{
			if (i == 21 && map[i][i2] == (active_piece - 1))
				return(1);
			if (map[i][i2] != 0 && map[i][i2] != (active_piece - 1) && map[i - 1][i2] == (active_piece - 1))
			{
				return(1);
			}
			i2++;
		}
		i--;
	}
	return(0);
}

function	move_fixed_blocks(nb_deleted_lines, frst_line_deleted)
{
	var fixed_blocks = document.getElementById('fixed_block');
	var i = 0;
	var tmp = 0;
	var i2 = 0;
	var i3 = 0;
	while (i < fixed_blocks.childNodes.length)
	{
		if (parseInt(fixed_blocks.childNodes[i].style.top) < (frst_line_deleted * 25))
		{
			tmp = map[(parseInt(fixed_blocks.childNodes[i].style.top) / 25)][(parseInt(fixed_blocks.childNodes[i].style.left) / 25)]; 
			map[(parseInt(fixed_blocks.childNodes[i].style.top) / 25)][(parseInt(fixed_blocks.childNodes[i].style.left) / 25)] = 0;
			fixed_blocks.childNodes[i].style.top = parseInt(fixed_blocks.childNodes[i].style.top) + (nb_deleted_lines * 25) + "px";
			map[(parseInt(fixed_blocks.childNodes[i].style.top) / 25)][(parseInt(fixed_blocks.childNodes[i].style.left) / 25)] = tmp;
		}
		i++;
	}
	i = 0;
	var active_blocks = document.getElementById('inner_map');
	console.log(active_blocks);
	while (i < active_blocks.childNodes.length)
	{
		if (active_blocks.childNodes[i] != undefined)
		{
			tmp = map[(parseInt(active_blocks.childNodes[i].style.top) / 25)][(parseInt(active_blocks.childNodes[i].style.left) / 25)]; 
			map[(parseInt(active_blocks.childNodes[i].style.top) / 25)][(parseInt(active_blocks.childNodes[i].style.left) / 25)] = 0;
			active_blocks.childNodes[i].style.top = parseInt(active_blocks.childNodes[i].style.top) + (nb_deleted_lines * 25) + "px";
			map[(parseInt(active_blocks.childNodes[i].style.top) / 25)][(parseInt(active_blocks.childNodes[i].style.left) / 25)] = tmp;
		}
		i++;
	}
}

function	del_line(ini_line)
{
	var i = 0;
	var line = ini_line;
	var i2 = 0;
	var tmp = 0;
	var i3 = 0;
	var blocks = document.getElementsByClassName('piece');
	while (i2 < 10)
	{
		map[line][i2] = 0;
		i2++;
	}
	while (i < blocks.length)
	{
		if (blocks[i].style.top === (line * 25) + "px")
		{
			blocks[i].parentNode.removeChild(blocks[i]);
			i = 0;
		}
		i++;
	}
}

function	check_full_line()
{
	var i = 21;
	var i2;
	var count;
	var nb_deleted_lines = 0;
	var frst_line_deleted = 21;
	while (i >= 0)
	{
		count = 0;
		i2 = 0;
		while (i2 < 10)
		{
			if (map[i][i2] != 0)
				count++;
			i2++;
		}
		if (count == 10)
		{
			del_line(i);
			if (i <= frst_line_deleted)
				frst_line_deleted = i;
			nb_deleted_lines++;
		}
		count = 0;
		i--;
	}
	if (nb_deleted_lines > 0)
		move_fixed_blocks(nb_deleted_lines, frst_line_deleted);
	if (nb_deleted_lines == 1)
		score += 40;
	if (nb_deleted_lines == 2)
		score += 100;
	if (nb_deleted_lines == 3)
		score += 300;
	if (nb_deleted_lines >= 4)
		score += 1200;
}

function	restart()
{
	var inner_map = document.getElementById('inner_map');
	var fixed_block = document.getElementById('fixed_block');
	inner_map.innerHTML = "";
	fixed_block.innerHTML = "";
	var i = 0;
	var i2 = 0;
	while (i < 22)
	{
		i2 = 0;
		while (i2 < 10)
		{
			map[i][i2] = 0;
			i2++;
		}
		i++;
	}
	score = 0;
	active_piece = 1;
	game = 1;
	draw_alea_piece();
	actu_map();
}

function	actu_score()
{
	var score_elem = document.getElementById('score');
	score_elem.innerHTML = score;
}

function	check_end_of_game()
{
	var i = 0;
	var fixed_block = document.getElementById('fixed_block');
	while (i < 10)
	{
		if (map[0][i] != 0)
		{
			fixed_block.innerHTML += "<div id=\"game_over\"><p>Game over</p></div>";
			return(1);
		}
		i++;
	}
	return(0);
}

function run()
{
	if (game == 1)
	{
		if (check_end_of_turn() == 0)
			go_down();
		if (check_end_of_turn() == 1)
		{
			check_full_line();
			draw_alea_piece();
		}
		actu_map();
		actu_score();
	}
}

window.addEventListener("keydown", function(e)
{
	if (game == 1)
	{
		if(e.keyCode ==37)
			move_left();
		else if(e.keyCode == 38)
			rotate();
		else if(e.keyCode == 39)
			move_right();
		else if(e.keyCode == 40 && check_end_of_turn() == 0)
			move_bot();
		actu_map();
	}
}, true);

var active_piece = 1;
var	piece_type;
var score = 0;
var map = new Array(22);
var game = 1;
for (var i = 0; i < 22; i++)
{
  map[i] = new Array(10);
  for (var i2 = 0; i2 < 10; i2++)
  	{
	  map[i][i2] = 0;
	}
}
draw_alea_piece();
actu_map();
setInterval(function(){ run(); },500);
