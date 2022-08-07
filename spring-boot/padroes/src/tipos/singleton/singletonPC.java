package tipos.singleton;

public class singletonPC {
    private static class InstanceHolder {
        public static singletonPC instancia = new singletonPC();
    }

    private singletonPC() {
        super();
    }

    public static singletonPC getInstancia() {
        return InstanceHolder.instancia;
    }
}
