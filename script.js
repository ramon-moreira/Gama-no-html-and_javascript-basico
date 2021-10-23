
let userName = document.getElementById("userClient");
userName.addEventListener("keydown", function(e) {
  if (e.key >= "0" && e.key <= "9") {
	  alert("Por favor, use apenas letras, até 10 caracteres!");
    e.preventDefault();
  }
});

//A cima, usamos o evento keydown para obtermos a interação do usuário. Então com condicionais if else exibimos uma mensagem ao usuário após o mesmo tentar inserir números no campo.

let valor_cpf = document.querySelector('#cpfUser');
valor_cpf.addEventListener("keydown", function(e) {
if (e.key > "a" && e.key < "z" == true){
alert ("Por favor, use apenas números!");
     e.preventDefault();
   }
 });
//A cima, garantimos que o usuário apenas digite desta vez, números. Usamos evento keydown, com essa diferença então. Igualmente é mostrado um alerta.
valor_cpf.addEventListener("blur", function(e) {
let validar_cpf = this.value.replace( /\D/g , "");
//A cima, usamos replace e regex para que fique então somente números.
if (validar_cpf.length == 11){
//A cima, caso a quantidade de número esteja ok, então temos validação de fato do cpf.
let Soma;
let Resto;
Soma = 0;
for (i=1; i<=9; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (11 - i);
     Resto = (Soma * 10) % 11;
if ((Resto == 10) || (Resto == 11))  Resto = 0;
if (Resto != parseInt(validar_cpf.substring(9, 10)) )
return alert("CPF Inválido!");;
Soma = 0;
for (i = 1; i <= 10; i++) Soma = Soma + parseInt(validar_cpf.substring(i-1, i)) * (12 - i);
Resto = (Soma * 10) % 11;
if ((Resto == 10) || (Resto == 11))  Resto = 0;
if (Resto != parseInt(validar_cpf.substring(10, 11) ) )
return alert("CPF Inválido!");

//A cima temos toda a validação do nosso cpf.

let cpf_final = validar_cpf.replace( /(\d{3})(\d)/ , "$1.$2");
cpf_final = cpf_final.replace( /(\d{3})(\d)/ , "$1.$2");
cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/ , "$1-$2");
document.getElementById('cpfUser').value = cpf_final;
}else{
	alert("CPF Inválido! É esperado 11 dígitos numéricos.");
}
})
//A cima a formatação dos valores para exibição ao usuário.
let validaCelular = document.getElementById("validaCelular");  
validaCelular.addEventListener("keydown", function(e) {
if (e.key > "a" && e.key < "z") {
alert("Digite apenas números");
e.preventDefault();
}
});
//A cima, temos que nosso campo do celular aceitará apenas números
let validadorCelular = document.querySelector('#validaCelular');
validadorCelular.addEventListener("blur", function(e) {
let celular = this.value.replace( /\D/g , "");
if (celular.length==11){
celular = celular.replace(/^(\d{2})(\d)/g,"($1) $2");
resultado_celular = celular.replace(/(\d)(\d{4})$/,"$1-$2");
document.getElementById('validaCelular').value = resultado_celular;
} else {
alert("Digite 11 números, por favor!");
}
})

let validadorFixo = document.querySelector('#validaFixo');  
validadorFixo.addEventListener("keydown", function(e) {
if (e.key > "a" && e.key < "z") {
alert("Digite apenas números!");
e.preventDefault();
}
});
//Agora, nosso campo do telefone aceitará apenas números
validadorFixo = document.querySelector('#validaFixo');
validaFixo.addEventListener("blur", function(e) {
let telefone = this.value.replace( /\D/g , "");
//Removemos então tudo que não é dígito
if (telefone.length == 10){
telefone = telefone.replace(/^(\d{2})(\d)/g,"($1) $2");
resultado_telefone = telefone.replace(/(\d)(\d{4})$/,"$1-$2");
document.getElementById("validadorFixo").value = resultado_telefone;
} else {
alert("Digite 10 números, por favor!");
}
})
