function	rotate_barre()
{
	var i = 0;
	var i2;
	while (i < 20)
	{
		i2 = 0;
		while (i2 < 10)
		{
			if (map[i][i2] == (active_piece - 1))
			{
				if (i > 0 && i < 20 && i2 < 9)
				{
					if (map[i][i2 + 1] == (active_piece - 1))
					{
						map[i - 1][i2 + 2] = (active_piece - 1);
						map[i + 1][i2 + 2] = (active_piece - 1);
						map[i + 2][i2 + 2] = (active_piece - 1);
						map[i][i2] = 0;
						map[i][i2 + 1] = 0;
						map[i][i2 + 3] = 0;
						return;
					}
					else if (i2 > 1)
					{
						map[i + 2][i2 - 2] = (active_piece - 1);
						map[i + 2][i2 - 1] = (active_piece - 1);
						map[i + 2][i2 + 1] = (active_piece - 1);
						map[i][i2] = 0;
						map[i + 1][i2] = 0;
						map[i + 3][i2] = 0;
						return;
					}
				}
				else
					return;
			}
			i2++;
		}
	i++;
	}
}

function	rotate_z1()
{
	var i = 0;
	var i2;
	while (i < 20)
	{
		i2 = 0;
		while (i2 < 10)
		{
			if (map[i][i2] == (active_piece - 1))
			{
				if (i > 0)
				{
					if (map[i][i2 + 1] == (active_piece - 1) && map[i + 1][i2] == (active_piece - 1))
					{
						map[i][i2 + 1] = 0;
						map[i + 1][i2 - 1] = 0;
						map[i + 1][i2 + 1] = (active_piece - 1);
						map[i + 2][i2 + 1] = (active_piece - 1);
						return;
					}
					else if (map[i][i2 + 1] == 0 && map[i + 1][i2] == (active_piece - 1) && i2 > 0)
					{
						map[i + 1][i2 + 1] = 0;
						map[i + 2][i2 + 1] = 0;
						map[i][i2 + 1] = (active_piece - 1);
						map[i + 1][i2 - 1] = (active_piece - 1);
						return;
					}
					else
						return;
				}
				else
					return;
			}
			i2++;
		}
	i++;
	}
}

function	rotate_z2()
{
	var i = 0;
	var i2;
	while (i < 20)
	{
		i2 = 0;
		while (i2 < 10)
		{
			if (map[i][i2] == (active_piece - 1))
			{
				if (i > 0 && i < 20 && i2 < 9)
				{
					if (map[i][i2 + 1] == (active_piece - 1) && map[i + 1][i2] == 0)
					{
						map[i][i2] = 0;
						map[i][i2 + 1] = 0;
						map[i][i2 + 2] = (active_piece - 1);
						map[i + 2][i2 + 1] = (active_piece - 1);
						return;
					}
					else if(map[i + 1][i2] == (active_piece - 1) && map[i][i2 - 1] == 0 && i2 > 1)
					{
						map[i][i2] = 0;
						map[i + 2][i2 - 1] = 0;
						map[i][i2 - 1] = (active_piece - 1);
						map[i][i2 - 2] = (active_piece - 1);
						return;
					}
					else
						return;
				}
				else
					return;
			}
			i2++;
		}
	i++;
	}
}

function	rotate_triangle()
{
	var i = 0;
	var i2;
	while (i < 20)
	{
		i2 = 0;
		while (i2 < 10)
		{
			if (map[i][i2] == (active_piece - 1))
			{
				if (i > 0 && i < 20 && i2 < 9)
				{
					if (map[i + 1][i2 - 1] == (active_piece - 1) && map[i + 1][i2] == (active_piece - 1) && map[i + 1][i2 + 1] == (active_piece - 1))
					{
						map[i + 1][i2 -1] = 0;
						map[i + 2][i2] = (active_piece - 1);
						return;
					}
					else if (map[i + 1][i2] == (active_piece - 1) && map[i + 1][i2 - 1] == 0 && i2 > 0)
					{
						map[i][i2] = 0;
						map[i + 1][i2 - 1] = (active_piece - 1);
						return;
					}
					else if (map[i][i2 + 1] == (active_piece - 1) && map[i][i2 + 2] == (active_piece - 1))
					{
						map[i][i2 + 2] = 0;
						map[i - 1][i2 + 1] = (active_piece - 1);
						return;
					}
					else if (map[i + 1][i2] == (active_piece - 1) && map[i + 1][i2 + 1] == 0)
					{
						map[i + 2][i2] = 0;
						map[i + 1][i2 + 1] = (active_piece - 1);
						return;
					}
					else
						return;
				}
				else
					return;
			}
			i2++;
		}
	i++;
	}
}

function	rotate_l1()
{
	var i = 0;
	var i2;
	while (i < 20)
	{
		i2 = 0;
		while (i2 < 10)
		{
			if (map[i][i2] == (active_piece - 1))
			{
				if (i > 0 && i < 20)
				{
					if (map[i + 1][i2] == (active_piece - 1) &&  map[i + 1][i2 + 1] == (active_piece - 1))
					{
						map[i][i2] = 0;
						map[i + 1][i2] = 0;
						map[i + 1][i2 + 2] = 0;
						map[i][i2 + 1] = (active_piece - 1);
						map[i][i2 + 2] = (active_piece - 1);
						map[i + 2][i2 + 1] = (active_piece - 1);
						return;
					}
					else if (map[i][i2 + 1] == (active_piece - 1) && map[i + 1][i2] == (active_piece - 1) && i2 > 0)
					{
						map[i][i2] = 0;
						map[i][i2 + 1] = 0;
						map[i + 2][i2] = 0;
						map[i + 1][i2 + 1] = (active_piece - 1);
						map[i + 2][i2 + 1] = (active_piece - 1);
						map[i + 1][i2 - 1] = (active_piece - 1);
						return;
					}
					else if (map[i][i2 + 1] == (active_piece - 1) && map[i + 1][i2] == 0)
					{
						map[i][i2] = 0;
						map[i][i2 + 2] = 0;
						map[i + 1][i2 + 2] = 0;
						map[i - 1][i2 + 1] = (active_piece - 1);
						map[i + 1][i2 + 1] = (active_piece - 1);
						map[i + 1][i2] = (active_piece - 1);
						return;
					}
					else if (i2 < 9 && map[i + 1][i2 ] == (active_piece - 1)  && map[i + 2][i2] == (active_piece - 1)  && map[i][i2 + 1] == 0)
					{
						map[i][i2] = 0;
						map[i + 2][i2] = 0;
						map[i + 2][i2 - 1] = 0;
						map[i][i2 - 1] = (active_piece - 1);
						map[i + 1][i2 - 1] = (active_piece - 1);
						map[i + 1][i2 + 1] = (active_piece - 1);
						return;
					}
					else
						return;
				}
				else
					return;
			}
			i2++;
		}
	i++;
	}
}

function	rotate_l2()
{
	var i = 0;
	var i2;
	while (i < 20)
	{
		i2 = 0;
		while (i2 < 10)
		{
			if (map[i][i2] == (active_piece - 1))
			{
				if (i > 0 && i < 20)
				{
					if (map[i + 1][i2] == (active_piece - 1) && map[i + 1][i2 - 1] == (active_piece - 1))
					{
						map[i][i2] = 0;
						map[i + 1][i2] = 0;
						map[i + 1][i2 - 2] = 0;
						map[i][i2 - 1] = (active_piece - 1);
						map[i + 2][i2 - 1] = (active_piece - 1);
						map[i + 2][i2] = (active_piece - 1);
						return;
					}
					else if (map[i + 1][i2] == (active_piece - 1) && map[i + 2][i2] == (active_piece - 1) && i2 > 0)
					{
						map[i][i2] = 0;
						map[i + 2][i2] = 0;
						map[i + 2][i2 + 1] = 0;
						map[i + 1][i2 - 1] = (active_piece - 1);
						map[i + 2][i2 - 1] = (active_piece - 1);
						map[i + 1][i2 + 1] = (active_piece - 1);
						return;
					}
					else if (map[i][i2 + 1] == (active_piece - 1) && map[i + 1][i2] == (active_piece - 1))
					{
						map[i][i2] = 0;
						map[i][i2 + 2] = 0;
						map[i + 1][i2] = 0;
						map[i - 1][i2] = (active_piece - 1);
						map[i - 1][i2 + 1] = (active_piece - 1);
						map[i + 1][i2 + 1] = (active_piece - 1);
						return;
					}
					else if(map[i][i2 + 1] == (active_piece - 1) && map[i + 1][i2] == 0 && i2 < 8)
					{

						map[i][i2] = 0;
						map[i][i2 + 1] = 0;
						map[i + 2][i2 + 1] = 0;
						map[i][i2 + 2] = (active_piece - 1);
						map[i + 1][i2 + 2] = (active_piece - 1);
						map[i + 1][i2] = (active_piece - 1);
						return;
					}
					else
						return;
				}
				else
					return;
			}
			i2++;
		}
	i++;
	}
}