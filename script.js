
function verificar(){
let data = new Date();
let ano = data.getFullYear();
let resAno = document.getElementById('textano');
let res = document.getElementById('res');

if(resAno.value == 0 || Number(resAno.value)> ano){
    window.alert ('[ERRO] Verifique seus Dados!');

}else{
    let rSex = document.getElementsByName('radsex');
    let idade = ano - Number(resAno.value);
    let genero = '';
    let img = document.getElementById('img')
    if(rSex[0].checked){
        genero = 'homem';
        if(idade >=0 && idade < 3 ){
            img.src = './images/bebe.png';
        }
        else if(idade < 9){
            img.src = './images/criancaM.png';
        }
        else if(idade < 20){
            img.src = './images/jovemM.png';

        }
        else if(idade < 55){
            img.src = './images/homem.png';
        }
        else{
            img.src = './images/idoso.png';
        }
    }
    else if(rSex[1].checked){
        genero = 'mulher'
        if(idade >= 0 && idade < 3){
            img.src = './images/bebe.png';
        }
        else if(idade < 9 ){
            img.src = './images/criancaF.png';
        }
        else if(idade < 20){
            img.src = './images/jovemF.png';
        }
        else if(idade < 55){
            img.src = './images/mulher.png';
        }
        else{
            img.src = './images/idosa.png';
        }
    }
    res.style.textAlign = 'center'
    res.innerText = `Detectamos ${genero} com idade de ${idade} anos!`;
    res.appendChild(img);


}
}




