// CALUCLO DE FIGURAS GEOMETRICAS


// Código cuadrado
console.group("Cuadrado");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden " + ladoCuadrado + " centimetros");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perímetro del cuadrado es " + perimetroCuadrado + " centimetros");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es " + areaCuadrado + " cm^2");
console.groupEnd();


// Código Triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;

console.log("los lados del triangulo miden " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");
console.log("La altura del triangulo es " + alturaTriangulo + " cm");
console.log("El perimetro del triangulo es " + perimetroTriangulo + " cm");
console.log("El área del triangulo es " + areaTriangulo + " cm^2");

console.groupEnd();


// Código Ciculo
console.group("Ciculo");

const radioCirculo = 4;
const diametroCirculo = radioCirculo * 2;
const pi = Math.PI;
const perimetroCirculo = diametroCirculo * pi;
const areaCirculo = (radioCirculo * radioCirculo) * pi;

console.log("el radio del circulo es " + radioCirculo + " cm");
console.log("el diametro del circulo es " + diametroCirculo + " cm");
console.log("PI es " + pi + " cm");
console.log("el perimetro del circulo es " + perimetroCirculo + " cm");
console.log("el área del circulo es " + areaCirculo + " cm");

console.groupEnd();