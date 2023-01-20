from rest_framework import serializers

from escola.models import Aluno, Curso


class AlunosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Aluno
        fields = ['id', 'name', 'rg', 'cpf', 'data_nascimento']
