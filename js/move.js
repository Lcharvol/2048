function	check_move_top(position)
{
	var math = Math.ceil(position / 4);
	var coup_possible = math;
	var ret = 0;
	while (coup_possible > 0)
	{
		position -= 4;
		if (map[position] === 0)
		{
			ret++;
		}
		else
			return(ret);
		coup_possible--;
	}
	return(ret);
}

function	verif_coli_top()
{
	var i = 0;
	var ret = 0;
	while (i <= 15)
	{
		if (map[i] === map[i + 4] && map[i] != 0)
		{
			map[i] *= 2;
			map[i + 4] = 0;
			var all = document.getElementById('fond')
			var to_del = document.getElementsByClassName('position' + (i + 4));
			var pos_top = parseFloat(to_del[0].style.top);
			to_del[0].style.top = pos_top - 120 + "px";
			var to_change = document.getElementsByClassName('position' + i);
			all.removeChild(to_del[0]);
			to_change[0].innerHTML = "<h1>" + map[i] + "</h1>";
			ret++;
		}
		i++;
	}
	return(ret);
}

function	move_top()
{
	var i = 0;
	var tmp = 0;
	var has_moved = 0;
	while (i <= 15)
	{
		if (map[i] != 0)
		{
			var elem = document.getElementsByClassName('position' + i);
			var pos_top = parseFloat(elem[0].style.top);
			var nb_move = check_move_top(i);
			elem[0].style.top = pos_top - (nb_move * 120) + "px";
			tmp = map[i];
			map[i] = 0;
			map[i - (nb_move * 4)] = tmp;
			elem[0].className = "carre position" + (i - (nb_move * 4));
			if (nb_move > 0)
				has_moved++;
		}
		i++;
	}
	if (verif_coli_top() > 0)
		return(move_top() + 1);
	return(has_moved);
}

function	check_move_bot(position)
{
	var math = Math.ceil(position / 4);
	var coup_possible = 4 - math;
	var ret = 0;
	while (coup_possible > 0)
	{
		position += 4;
		if (map[position] === 0)
			ret++;
		else
			return(ret);
		coup_possible--;
	}
	return(ret);
}

function	verif_coli_bot()
{
	var i = 15;
	var ret = 0;
	while (i >= 0)
	{
		if (map[i] === map[i - 4] && map[i] != 0)
		{
			map[i] *= 2;
			map[i - 4] = 0;
			var all = document.getElementById('fond')
			var to_del = document.getElementsByClassName('position' + (i - 4));
			var pos_top = parseFloat(to_del[0].style.top);
			to_del[0].style.top = pos_top + 120 + "px";
			var to_change = document.getElementsByClassName('position' + i);
			all.removeChild(to_del[0]);
			to_change[0].innerHTML = "<h1>" + map[i] + "</h1>";
			ret++;
		}
		i--;
	}
	return(ret);
}

function	move_bot()
{
	var i = 15;
	var tmp = 0;
	var has_moved = 0;
	while (i >= 0)
	{
		if (map[i] != 0)
		{
			var elem = document.getElementsByClassName('position' + i);
			var pos_top = parseFloat(elem[0].style.top);
			var nb_move = check_move_bot(i);
			elem[0].style.top = pos_top + (nb_move * 120) + "px";
			tmp = map[i];
			map[i] = 0;
			map[i + (nb_move * 4)] = tmp;
			elem[0].className = "carre position" + (i + (nb_move * 4));
			if (nb_move > 0)
				has_moved++;
		}
		i--;
	}
	if (verif_coli_bot() > 0)
		return(move_bot() + 1); 
	return(has_moved);
}

function	check_move_right(position)
{
	var coup_possible = 3 - (position % 4);
	var ret = 0;
	while (coup_possible > 0)
	{
		position++;
		if (map[position] === 0)
		{
			ret++;
		}
		else
			return(ret);
		coup_possible--;
	}
	return(ret);
}

function	verif_coli_right()
{
	var i = 15;
	var ret = 0;
	while (i >= 0)
	{
		if (map[i] === map[i - 1] && ((i) % 4) != 0 && map[i] != 0)
		{
			map[i] *= 2;
			map[i - 1] = 0;
			var all = document.getElementById('fond')
			var to_del = document.getElementsByClassName('position' + (i - 1));
			var pos_left = parseFloat(to_del[0].style.left);
			to_del[0].style.left = pos_left + 120 + "px";
			var to_change = document.getElementsByClassName('position' + i);
			all.removeChild(to_del[0]);
			to_change[0].innerHTML = "<h1>" + map[i] + "</h1>";
			ret++;
		}
		i--;
	}
	return (ret);
}

function	move_right()
{
	var i = 15;
	var tmp = 0;
	var has_moved = 0;
	while (i >= 0)
	{
		if (map[i] != 0)
		{
			var elem = document.getElementsByClassName('position' + i);
			var pos_left = parseFloat(elem[0].style.left);
			var nb_move = check_move_right(i);
			elem[0].style.left = pos_left + (nb_move * 120) + "px";
			tmp = map[i];
			map[i] = 0;
			map[i + nb_move] = tmp;
			elem[0].className = "carre position" + (i + nb_move);
			if (nb_move > 0)
				has_moved++;
		}
		i--;
	}
	if(verif_coli_right() > 0)
		return(move_right() + 1);
	return(has_moved);
}

function	check_move_left(position)
{
	var coup_possible = position % 4;
	var ret = 0;
	while (coup_possible > 0)
	{
		position--;
		if (map[position] === 0)
		{
			ret++;
		}
		else
			return(ret);
		coup_possible--;
	}
	return(ret);
}

function	verif_coli_left()
{
	var i = 0;
	var ret = 0;
	while (i <= 15)
	{
		if (map[i] === map[i + 1] && ((i + 1) % 4) != 0 && map[i] != 0)
		{
			map[i] *= 2;
			map[i + 1] = 0;
			var all = document.getElementById('fond')
			var to_del = document.getElementsByClassName('position' + (i + 1));
			var pos_left = parseFloat(to_del[0].style.left);
			to_del[0].style.left = pos_left - 120 + "px";
			var to_change = document.getElementsByClassName('position' + i);
			all.removeChild(to_del[0]);
			to_change[0].innerHTML = "<h1>" + map[i] + "</h1>";
			ret++;
		}
		i++;
	}
	return (ret);
}

function	move_left()
{
	var i = 0;
	var tmp = 0;
	var has_moved = 0;
	while (i <= 15)
	{
		if (map[i] != 0)
		{
			var elem = document.getElementsByClassName('position' + i);
			var pos_left = parseFloat(elem[0].style.left);
			var nb_move = check_move_left(i);
			elem[0].style.left = pos_left - (nb_move * 120) + "px";
			tmp = map[i];
			map[i] = 0;
			map[i - nb_move] = tmp;
			elem[0].className = "carre position" + (i -nb_move);
			if (nb_move > 0)
				has_moved++;
		}
		i++;
	}
	if (verif_coli_left() > 0)
		return(move_left() + 1);
	return(has_moved);
}