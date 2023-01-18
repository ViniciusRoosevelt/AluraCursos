import random;
print("################################")
print("######Jogo de Adivinhação#######")
print("################################")






rodada = 0
# while(total_de_tentativas != 0):
#     acertou = number_kick == number_secret
#     maior = number_kick > number_secret
#     menor = number_kick < number_secret

    

    
#     if(acertou):
#         print("Parabéns, você acertou!")
#         break
#     elif(maior):
#         print("Seu chute foi maior quer o número!")
#         total_de_tentativas -= 1
#         number_kick = int(input("Digite o Número: "))
#     elif(menor):
#         print("Seu chute foi menor que o número!")
#         total_de_tentativas -= 1
#         number_kick = int(input("Digite o Número: "))



# if(total_de_tentativas == 0):
#         print('Acabou suas chances')
print("Escolha um nível 1- 1 a 10 Fácil 2- 1 a 100 3 - 1 a 1000")
level = int(input("Insira o nível: "))
if(level == 1):
        total_de_tentativas = 4
        number_secret = round(random.randrange(1,11))
    
        print(number_secret)
elif(level == 2):
        total_de_tentativas = 10
        number_secret = round(random.randrange(1,101))
        print(number_secret)
else:
        number_secret = round(random.randrange(1,1001))
        total_de_tentativas = 16
        print(number_secret)

for rodada in range(0,total_de_tentativas):
   



    print("Tentativa {} de {}".format(rodada,total_de_tentativas))
    number_kick = int(input("Digite o Número: ")) 
    acertou = number_secret == number_kick
    maior = number_secret < number_kick
    menor = number_secret > number_kick
    if(level == 1 and number_kick < 1 or number_kick > 10):
        print("Digite um número que esteja dentro do seu nível")
        
    if(level == 2 and number_kick < 1 or number_kick > 100):
        print("Digite um número que esteja dentro do seu nível")
    if(level == 3 and number_kick < 1 or number_kick > 1001):
        print("Digite um número que esteja dentro do seu nível")
        
    
    
    if(acertou):
        print("Acertou")
        break
    else:
        if(maior):
            print('Seu chute foi maior que o número')
        elif(menor):
            print("Você errou! chute menor que o número")

print("Fim de Game")
    