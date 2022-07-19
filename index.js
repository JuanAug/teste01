const valorSistema = 850.75;

const modulos = [
  { id: 1, name: "oficina", valor: 50.0 },
  { id: 2, name: "vendas", valor: 50.0 },
  { id: 3, name: "financeiro", valor: 75.0 },
  { id: 4, name: "NFe", valor: 125.0 },
  { id: 5, name: "NFCe", valor: 125.0 },
  { id: 6, name: "NFSe", valor: 155.15 },
  { id: 7, name: "Estoque online", valor: 175.0 }
]

function somar() {
  var result = $("input:checked");
  var total = 850.75

  for (var i=0; i<result.length; i++)
  {
    total = total + parseFloat(result[i].value)
  }
  $("#result").val(total.toFixed(2));
}
