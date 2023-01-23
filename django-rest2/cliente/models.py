from django.db import models

# Create your models here.


class Cliente(models.Model):
    nome = models.CharField(max_length=100)
    rg = models.CharField(blank=False, max_length=9, unique=True)
    email = models.EmailField(blank=False, max_length=30, unique=True)
    cpf = models.CharField(blank=False, max_length=11, unique=True)
    celular = models.CharField(max_length=11)
    data_nascimento = models.DateTimeField()
    ativo = models.BooleanField()

    def __str__(self):
        return self.nome
