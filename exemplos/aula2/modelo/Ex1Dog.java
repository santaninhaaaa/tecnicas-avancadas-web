package exemplos.aula2.modelo;

public class Ex1Dog {
    String nome;
    int idade;
    String raca;
    char tamanho;

    public Ex1Dog(){
        this.nome = nome;
    }

    //MÉTODOS
    public void latir(){
        System.out.println(nome + " late: Au! Au! Au! Au!");
    }
    public void brincar(){ //UM MÉTODO COM VOID - Não retorna nada, imprimiu e cabô
        System.out.println("Dono pega a bolinha.");
        latir();
        System.out.println("Dono joga a bolinha.");
        System.out.println(nome + " corre até a bolinha e pega.");
        System.out.println(nome + " devolve a bolinha.");
        latir();
    }
    public void comer(){
        latir();
        System.out.println("Corre até o pote de comida e aguarda o dono.");
    }

    public void quemSouEu(){
        System.out.println("****************************");
        System.out.println("Nome: " + nome);
        System.out.println("Idade: " + idade);
        System.out.println("Raça: " + raca);
        System.out.println("Tamanho: " + tamanho);
    }
}