class Conta:
    def __init__(self  ,numero, titular , saldo , limite):
     
        self.numero = numero
        self.titular = titular
        self.saldo = saldo
        self.limite = limite


    def criar(numero,titular,saldo,limite):
        conta = Conta(numero,titular,saldo,limite)
        print("Conta Criada id:",conta.numero)
    def saldo(self):
        self.saldo

    


