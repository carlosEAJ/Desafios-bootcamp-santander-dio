public class Main {
    public Main() {
    }

    public static void main(String[] args) {
        Cliente carlos = new Cliente();
        carlos.setNome("carlos");
        ContaCorrente cc = new ContaCorrente(carlos, true, 500);
        Conta poupanca = new ContaPoupanca(carlos);
        cc.depositar(100.0);
        cc.transferir(100.0, poupanca);
        cc.sacarBeneficio(600);

        cc.imprimirExtrato();
        poupanca.imprimirExtrato();
    }
}
