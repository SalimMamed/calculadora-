function botao(num){
    var salvo=document.calc.visor.value;
    document.calc.visor.value = salvo + num;
}
function reset(){


}
function calcule(resultado){
    var salvo=document.calc.visor.value;
    if(salvo){
        document.calc.visor.value =  eval (salvo);
    }
    
   
}