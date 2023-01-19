import conta

def main():
    print('Teste')
    print("###Menu Banco###")
    print("(1) - Criar Conta")
    print("(2) - Saldo da Conta")
    print("(0) - Sair do Progama")
    option = int(input("Digite a Opção que deseja: "))
    while(option != 0):
        
        
        if(option == 1):
            numero = int(input("Digite o numero que deseja: "))
            titular = input("Digite o nome do titular que deseja: ")
            saldo = int(input("Digite o seu saldo inicial que deseja: "))
            limite = int(input("Digite o limite que deseja: "))
            newaccount = conta.Conta.criar(numero,titular,saldo,limite)
            
            option = int(input("Digite a Opção que deseja: "))

        if(option == 2):
            print("{}".format(newaccount.conta.Conta.saldo))
            option = int(input("Digite a Opção que deseja: "))


   
        
if(__name__ == "__main__"):
    main()