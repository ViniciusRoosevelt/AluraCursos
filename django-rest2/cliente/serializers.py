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
            raise serializers.ValidationError({'CPF': 'Cpf obeys format 111.111.111-11'})
        if not validate_rg(data['rg']):
            raise serializers.ValidationError(
                {'Rg': 'Rg must be 9 characters'})
        if not validate_celular(data['celular']):
            raise serializers.ValidationError(
                {'Celular': 'Cell phone obeys format 11 91234-1234'})
        if not validate_email(data['email']):
            raise serializers.ValidationError(
                {'Email': 'Format the email invalid'})
        if not validate_nome(data['nome']):
            raise serializers.ValidationError({'Nome': 'Nome invalido'})
        return data
