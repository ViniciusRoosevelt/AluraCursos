from django.db import models



# Create your models here.


class Aluno(models.Model):
    nome = models.CharField(max_length=100)
    rg = models.CharField(max_length=9)
    cpf = models.CharField(max_length=11)
    data_nascimento = models.DateField()

    def __str__(self):
        return self.nome


class Curso(models.Model):
    Enível = (
        ('B', 'Básico'), ('I', 'Intermediário'), ('A', 'Avançado')
    )
    código_curso = models.CharField(max_length=10)
    descrição = models.CharField(max_length=100)
    nível = models.CharField(
        max_length=1, choices=Enível, blank=False, null=False, default='B')

    def __str__(self):
        return self.descrição
