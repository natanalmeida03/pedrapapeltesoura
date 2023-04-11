const pedra = document.getElementById('pedra');
const papel = document.querySelector('div#papel');
const tesoura = document.querySelector('div#tesoura');
const pla_joga = document.querySelector('span#placar-jogador');
const pla_compu = document.querySelector('span#placar-computador');
const msg = document.querySelector('div.mensagem-resultado');

var pla_comp = 0;
var pla_jog = 0;

var opc_comp;
var opc_jogador;

pedra.addEventListener('click', clickPedra);
pedra.addEventListener('click', clicou);
papel.addEventListener('click', clickPapel);
papel.addEventListener('click', clicou);
tesoura.addEventListener('click', clickTesoura);
tesoura.addEventListener('click', clicou);

function clickPedra(){
    opc_jogador = 0;
    //window.alert('clicou pedra');
    //window.alert(opc_jogador);
    opc_comp = parseInt(Math.floor(Math.random() * 3));
}
function clickPapel(){
    opc_jogador = 1;
    //window.alert('clicou papel');
    //window.alert(opc_jogador);
    opc_comp = parseInt(Math.floor(Math.random() * 3));
}
function clickTesoura(){
    opc_jogador = 2;
    //window.alert('clicou tesoura');
    //window.alert(opc_jogador);
    opc_comp = parseInt(Math.floor(Math.random() * 3));
}

function clicou(){

    if(opc_jogador == 0 && opc_comp == 1){
        msg.innerText = 'PEDRA PERDE PARA PAPEL. PONTO PARA O COMPUTADOR';
        ++pla_comp;
        pla_compu.innerText = pla_comp;
        pla_compu.style.color = 'red';
        pla_joga.style.color = 'white';

    }else if(opc_jogador == 0 && opc_comp == 0){
        msg.innerText = 'PEDRA EMPATA COM PEDRA. NINGUÉM GANHOU PONTO';
        pla_compu.style.color = 'white';
        pla_joga.style.color = 'white';
    }else if(opc_jogador == 0 && opc_comp == 2){
        msg.innerText = 'PEDRA GANHA DE TESOURA. PONTO PARA VOCÊ';
        ++pla_jog;
        pla_joga.innerText = pla_jog;
        pla_compu.style.color = 'white';
        pla_joga.style.color = 'green';
    }
    if(opc_jogador == 1 && opc_comp == 2){
        msg.innerText = 'PAPEL PERDE PARA TESOURA. PONTO PARA O COMPUTADOR';
        ++pla_comp;
        pla_compu.innerText = pla_comp;
        pla_compu.style.color = 'red';
        pla_joga.style.color = 'white';
    }else if(opc_jogador == 1 && opc_comp == 1){
        msg.innerText = 'PAPEL EMPATA COM PAPEL. NINGUÉM GANHOU PONTO';
        pla_compu.style.color = 'white';
        pla_joga.style.color = 'white';
    }else if(opc_jogador == 1 && opc_comp == 0){
        msg.innerText = 'PAPEL GANHA DE PEDRA. PONTO PARA VOCÊ';
        ++pla_jog;
        pla_joga.innerText = pla_jog;
        pla_compu.style.color = 'white';
        pla_joga.style.color = 'green';

    }
    if(opc_jogador == 2 && opc_comp == 0){
        msg.innerText = 'TESOURA PERDE PARA PEDRA. PONTO PARA O COMPUTADOR';
        ++pla_comp;
        pla_compu.innerText = pla_comp;
        pla_compu.style.color = 'red';
        pla_joga.style.color = 'white';
    }else if(opc_jogador == 2 && opc_comp == 2){
        msg.innerText = 'TESOURA EMPATA COM TESOURA. NINGUÉM GANHOU PONTO';
        pla_compu.style.color = 'white';
        pla_joga.style.color = 'white';
    }else if(opc_jogador == 2 && opc_comp == 1){
        msg.innerText = 'TESOURA GANHA DE PAPEL. PONTO PARA VOCÊ';
        ++pla_jog;
        pla_joga.innerText = pla_jog;
        pla_compu.style.color = 'white';
        pla_joga.style.color = 'green';

    }
}








