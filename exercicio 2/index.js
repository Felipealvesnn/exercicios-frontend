function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var anopessoa = document.getElementById('txtano');
    var res = document.querySelector('p#res2');
    var img = document.getElementById('imagem');

    if (anopessoa.value.length == null || anopessoa.value > ano) {
        window.alert('verifique os dados');

    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(anopessoa.value);
        

        var genero = '';
        if (fsex[0].checked) {
            genero = 'homem';
            if (idade > 0 && idade < 10) {
                //crianca
               // i/mg.sr
                img.src = "/imagem net/menino.png";


            }

        } else {
            genero = 'mulher';
        }
       
        res.innerHTML = `idade calculada é:  ${idade} e o genero é ${genero}`
    }
}