import tipos.facade.facade;
import tipos.singleton.singletonA;
import tipos.singleton.singletonP;
import tipos.singleton.singletonPC;
import tipos.strategy.*;

public class Main {
    public static void main(String[] args) {
        // Singleton

        singletonP lazy = singletonP.getInstancia();
        System.out.println(lazy);
        lazy = singletonP.getInstancia();
        System.out.println(lazy);

        singletonA eager = singletonA.getInstancia();
        System.out.println(eager);
        eager = singletonA.getInstancia();
        System.out.println(eager);

        singletonPC lazyHolder = singletonPC.getInstancia();
        System.out.println(lazyHolder);
        lazyHolder = singletonPC.getInstancia();
        System.out.println(lazyHolder);

        // Strategy

        comportamento defensivo = new ComportamentoDefensivo();
        comportamento normal = new ComportamentoNormal();
        comportamento agressivo = new ComportamentoAgressivo();

        robo robo = new robo();
        robo.setComportamento(normal);
        robo.mover();
        robo.mover();
        robo.setComportamento(defensivo);
        robo.mover();
        robo.setComportamento(agressivo);
        robo.mover();
        robo.mover();
        robo.mover();

        // Facade

        facade facade = new facade();
        facade.migrarCliente("Carlos", "21312300");
    }
}