public class ContaCorrente extends Conta {
    public ContaCorrente(Cliente cliente, boolean beneficio, double chequeEspecial) {
        super(cliente);
        this.beneficio = beneficio;
        this.chequeEspecial = chequeEspecial;
    }

    private double chequeEspecial;
    public boolean beneficio;

    public void sacarBeneficio(double valor) {
        if(!this.beneficio){
            System.out.println(String.format("não existe benefico"));
        } else {
            if(this.chequeEspecial + this.saldo >= valor){
                this.saldo -= valor;
            }else {System.out.println(String.format("saldo insuficiente"));}

            if(chequeEspecial <= 0){
                System.out.println(String.format("não existe saldo"));
            }}
    }

    public void imprimirExtrato() {
        System.out.println("=== Extrato Conta Corrente ===");
        super.imprimirInfosComuns();
    }
}