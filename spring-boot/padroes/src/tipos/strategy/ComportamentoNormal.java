package tipos.strategy;

public class ComportamentoNormal implements comportamento {

    @Override
    public void mover() {
        System.out.println("Movendo-se normalmente...");
    }

}