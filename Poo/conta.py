class Conta:
    def __init__(self  ,numero, titular , saldo , limite):
     
        self.numero = numero
        self.titular = titular
        self.saldo = saldo
        self.limite = limite


def initi():
    conta = Conta(1,"Vinicius",500,1000.0)
    print(conta.titular)
    


if(__name__ == "__main__"):
    initi()