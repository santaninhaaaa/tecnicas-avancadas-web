package exemplos.aula2.util;

public class TestaDog {

    public static void main (String args[]){ //vai precisar do método main pra INICIALIZAR a aplicação
        Ex1Dog d = new Ex1Dog();
        d.nome = "Toby";
        d.raca = "Vira-lata";
        d.idade = 9;
        d.tamanho = 'M';

        d.latir();
        d.comer();
        //for(int i = 0; i<5; i++){
            c.brincar();
        //}

        d.quemSouEu();
    }
}