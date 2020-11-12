function carregar(){
  var numero = document.getElementById('txtNum')
  var res = document.getElementById('seltab')
  var resultado = document.getElementById('resultado')
  var num = numero.value
  if (numero.value.length == 0){
    alert('Digite um numero')
  } else {
    res.innerHTML=''
    for( let i = 0; i <=10 ; i++){
      let item = document.createElement('option')
      item.text = `${num}x${i} = ${num*i}`
      res.appendChild(item)
    }
  }
}
