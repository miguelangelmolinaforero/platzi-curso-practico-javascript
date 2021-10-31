// CALUCLO DE FIGURAS GEOMETRICAS


// Código cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;

function calculosCuadrado(ladoCuadrado) {
    console.log("Los lados del cuadrado miden " + ladoCuadrado + " centimetros");
    const perimetroCuadrado = (ladoCuadrado) => {
        return ladoCuadrado * 4;
    }
    console.log("El perímetro del cuadrado es " + perimetroCuadrado(ladoCuadrado) + " centimetros");
    const areaCuadrado = (ladoCuadrado) => {
        return ladoCuadrado * ladoCuadrado;
    }
    console.log("El área del cuadrado es " + areaCuadrado(ladoCuadrado) + " cm^2");

}

calculosCuadrado(ladoCuadrado);

console.groupEnd();


// Código Triangulo
console.group("Triangulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

function calculosTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo, alturaTriangulo) {
    const perimetroTriangulo = (ladoTriangulo1, ladoTriangulo2, baseTriangulo) => {
        return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
    }
    const areaTriangulo = (baseTriangulo, alturaTriangulo) => {
        return (baseTriangulo * alturaTriangulo) / 2;
    }

    console.log("los lados del triangulo miden " + ladoTriangulo1 + " cm, " + ladoTriangulo2 + " cm, " + baseTriangulo + " cm");
    console.log("La altura del triangulo es " + alturaTriangulo + " cm");
    console.log("El perimetro del triangulo es " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) + " cm");
    console.log("El área del triangulo es " + areaTriangulo(baseTriangulo, alturaTriangulo) + " cm^2");
}

calculosTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo, alturaTriangulo);

console.groupEnd();


// Código Ciculo
console.group("Ciculo");

const radioCirculo = 4;
const pi = Math.PI;

function calculosCirculo(radioCirculo, pi) {
    const diametroCirculo = (radioCirculo) => {
        return radioCirculo * 2;
    }

    function perimetroCirculo(radioCirculo, pi) {
        return diametroCirculo(radioCirculo) * pi;
    }
    const areaCirculo = (radioCirculo, pi) => {
        return (radioCirculo * radioCirculo) * pi;
    }
    console.log("el radio del circulo es " + radioCirculo + " cm");
    console.log("el diametro del circulo es " + diametroCirculo(radioCirculo) + " cm");
    console.log("PI es " + pi + " cm");
    console.log("el perimetro del circulo es " + perimetroCirculo(radioCirculo, pi) + " cm");
    console.log("el área del circulo es " + areaCirculo(radioCirculo, pi) + " cm");
}

calculosCirculo(radioCirculo, pi);

console.groupEnd();