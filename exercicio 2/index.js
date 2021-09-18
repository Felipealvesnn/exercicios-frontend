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
            if (idade > 0 && idade <= 10) {
                //crianca
                // i/mg.sr
                img.src = "/exercicio 2/imagem net/menino.png";
            }
            if (idade > 10 && idade <= 20) { //adolecente
                img.src = "/exercicio 2/imagem net/adolecente.png";

            }
            if (idade > 20 && idade <= 50) {
                img.src = "/exercicio 2/imagem net/homem.png";
            }
            if (idade > 50) {
                img.src = "/exercicio 2/imagem net/velho.png";

            }
            
        } else {
            genero = 'mulher';
            if (idade > 0 && idade <= 10) {
                //crianca
                // i/mg.sr
                img.src = "/exercicio 2/imagem net/menina.png";
            }
            if (idade > 10 && idade <= 20) { //adolecente
                img.src = "/exercicio 2/imagem net/adolecenta.png";

            }
            if (idade > 20 && idade <= 50) {
                img.src = "/exercicio 2/imagem net/mulher.png";
            }
            if (idade > 50) {
                img.src = "/exercicio 2/imagem net/velha.png";

            }
        }

        res.innerHTML = `idade calculada é:  ${idade} e o genero é ${genero}`
    }
}