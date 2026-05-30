let assinatura_ativa = true;
let primeira_compra = true;
let conta_suspensa = false;
let elegivel = assinatura_ativa || (primeira_compra && !conta_suspensa)
console.log(elegivel)