package tipos.singleton;

public class singletonP {
    private static singletonP instancia;

    private singletonP() {
        super();
    }

    public static singletonP getInstancia() {
        if (instancia == null) {
            instancia = new singletonP();
        }
        return instancia;
    }
}
