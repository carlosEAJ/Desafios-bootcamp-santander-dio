package tipos.strategy;

public class ComportamentoDefensivo implements comportamento {

    @Override
    public void mover() {
        System.out.println("Movendo-se defensivamente...");
    }

}