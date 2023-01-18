import random;
print("################################")
print("######Jogo de Adivinhação#######")
print("################################")


number_secret = round(random.randrange(1,101))
print(number_secret);



total_de_tentativas = 3
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
for rodada in range(0,total_de_tentativas):
    print("Tentativa {} de {}".format(rodada,total_de_tentativas))
    number_kick = int(input("Digite o Número: ")) 
    acertou = number_secret == number_kick
    maior = number_secret < number_kick
    menor = number_secret > number_kick
    if(number_kick < 1 or number_kick > 100):
        print("Digite um número entre 1 e 100")
        continue
    
    
    
    if(acertou):
        print("Acertou")
        break
    else:
        if(maior):
            print('Seu chute foi maior que o número')
        elif(menor):
            print("Você errou! chute menor que o número")

print("Fim de Game")
    