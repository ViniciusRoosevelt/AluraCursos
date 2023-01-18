import Adivinhação
print("###Selecione nossos Jogos 1 - Adivinhação###")
def escolhe_jogo():
    jogo = int(input("Insira qual jogo deseja jogar: "))
    if(jogo == 1):
        Adivinhação.jogar()


if(__name__ == "__main__"):
    escolhe_jogo()