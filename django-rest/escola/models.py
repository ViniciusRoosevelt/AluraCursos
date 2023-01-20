from django.db import models

# Create your models here.


class Aluno(models.Model):
    nome = models.CharField(max_length=100)
    rg = models.CharField(max_length=100)
    cpf = models.IntegerField()
    data_nascimento = models.CharField(max_length=100)

    def __str__(self):
        return self.nome


class Curso(models.Model):
    Enível = (
        ('B', 'Básico'), ('I', 'Intermediário'), ('A', 'Avançado')
    )
    código_curos = models.CharField(max_length=10)
    descrição = models.CharField(max_length=100)
    nível = models.CharField(
        max_length=1, choices=Enível, blank=False, null=False, default='B')

    def __str__(self):
        return self.descrição
