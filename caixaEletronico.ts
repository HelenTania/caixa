 class Caixa{

    private nome: string
    private cliente: string
    private pessoaFisica: boolean
    private pessoaJuridica: boolean
    private contaCorrente: boolean
    private contaPopanca: boolean
    private contaDigital: boolean
    private opcao: boolean
    private saldo: number
    private saldoCliente: number
    private saque:boolean
    private deposito: boolean
    private pix: boolean

    constructor(

        nome: string,
        cliente: string,
        pessoaFisica: boolean,
        pessoaJuridica: boolean,
        contaCorrente: boolean,
        contaPoupanca: boolean,
        contaDigital: boolean,
        opcao: boolean,
        saldo: number,
        saldoCliente: number,
        saque: boolean,
        deposito: boolean,
        pix: boolean

    ){

     this.nome = nome
     this.cliente = cliente
     this.pessoaFisica = pessoaFisica
     this.pessoaJuridica = pessoaJuridica
     this.contaCorrente = contaCorrente
     this.contaPopanca = contaPoupanca
     this.contaDigital = contaDigital
     this.opcao = opcao
     this.saldo = saldo
     this.saldoCliente = saldoCliente
     this.saque = saque
     this.deposito = deposito
     this.pix = pix

    }

    abrirConta(){

    }
       
    tipoConta(){

    }
    cadastrarCliente(){
        
    }
    opcaoOpercao(){

    }
    sacar(){

        this.saldo = this.saldo -= this.saque
          this.saldoCliente = this.saldoCliente - this.saque
    }
    depositar(){

    }

    }
    
