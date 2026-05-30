// first exercise
let estoque_atual = 100;
let produtos_por_caixa = 12;
let vendas_dia = 35;
estoque_atual -= vendas_dia;
estoque_atual += 10;
let estoque_extra = estoque_atual % produtos_por_caixa;
console.log(estoque_atual, estoque_extra);


