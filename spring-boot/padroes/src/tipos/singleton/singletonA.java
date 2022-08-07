package tipos.singleton;

public class singletonA {
    private static singletonA instancia = new singletonA();

    private singletonA() {
        super();
    }

    public static singletonA getInstancia() {
        return instancia;
    }
}
