package tipos.strategy;

public class ComportamentoAgressivo implements comportamento {

    @Override
    public void mover() {
        System.out.println("Movendo-se agressivamente...");
    }

}
