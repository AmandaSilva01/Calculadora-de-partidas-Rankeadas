function calcularNivel(conquistas, derrotas) {
    let saldoDeconquistas = conquistas - derrotas;
    let nivel;
  
    if (conquistas < 10) {
      nivel = "Ferro";
    } else if (conquistas >= 11 && conquistas <= 20) {
      nivel = "Bronze";
    } else if (conquistas >= 21 && conquistas <= 50) {
      nivel = "Prata";
    } else if (conquistas >= 51 && conquistas <= 80) {
      nivel = "Ouro";
    } else if (conquistas >= 81 && conquistas <= 90) {
      nivel = "Diamante";
    } else if (conquistas >= 91 && conquistas <= 100) {
      nivel = "Lendário";
    } else if (conquistas >= 101) {
      nivel = "Imortal";
    }
  
    return { saldoconquistas, nivel };
  }
  
  let conquistas = 90;
  let derrotas = 70;
  let { saldoconquistas, nivel } = calcularNivel(conquistas, derrotas);
  
  console.log(
    ` O herói tem  um saldo de ${saldoconquistas}  está no nível ${nivel}`
  );