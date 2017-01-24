// x, y, z in N
// x2 + y2 = z2
// x + y + z = P
//===============
// z = P - x - y
// x2 + y2 = (P - x - y)2 = P2 - 2P(x + y) + (x + y)2 = P2 - 2Px - 2Py + x2 + 2xy + y2
// 0 = P2 - 2Px - 2Py + 2xy
// x (2P - 2y) = P2 - 2Py
// x = (P2 - 2Py) / 2(P - y) = P (P - 2y) / 2(P - y)

var perimeter = 1000;

var biggerSideOf = y => perimeter * (perimeter - (y * 2)) / (2 * (perimeter - y)),
	lowerSide = nums(1, perimeter/2).find(y => biggerSideOf(y) % 1 === 0),
	biggerSide = biggerSideOf(lowerSide),
	product = lowerSide * biggerSide * (perimeter - lowerSide - biggerSide);
	
solution(product);