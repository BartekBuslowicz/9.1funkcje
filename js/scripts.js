function getTriangleArea(a, h) {
	if (a <= 0) {console.log('Nieprawidłowe dane');} 
	else if (h <= 0) {console.log('Nieprawidłowe dane');} 
	return a*h/2;
}
console.log(getTriangleArea(4, 6));

var triangle1Area = getTriangleArea(10, 15);
console.log(triangle1Area);
var triangle2Area = getTriangleArea(5, 7);
console.log(triangle2Area);
var triangle3Area = getTriangleArea(10, 10);
console.log(triangle3Area);