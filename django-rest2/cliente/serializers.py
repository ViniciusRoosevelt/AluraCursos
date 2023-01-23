import re
from rest_framework import serializers
from cliente.models import Cliente
from cliente.validators import *


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

    def validate(self, data):
        if not validate_cpf(data['cpf']):
            raise serializers.ValidationError({'CPF': 'CPF inválido'})
        if not validate_rg(data['rg']):
            raise serializers.ValidationError(
                {'Rg': 'Rg must be 9 characters'})
        if not validate_celular(data['celular']):
            raise serializers.ValidationError(
                {'Celular': 'Celular must be 11 characters numeric'})
        if not validate_email(data['email']):
            raise serializers.ValidationError(
                {'Email': 'Format the email invalid'})
        if not validate_nome(data['nome']):
            raise serializers.ValidationError({'Nome': 'Nome invalido'})
        return data
