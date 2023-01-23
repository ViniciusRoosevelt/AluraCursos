import re
from rest_framework import serializers
from cliente.models import Cliente


class ClienteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Cliente
        fields = '__all__'

    def validate_cpf(self, cpf):
        if len(cpf) != 11 or cpf.isalpha():
            raise serializers.ValidationError('Cpf must be 11 characters numeric')
        return cpf

    def validate_rg(self, rg):
        if len(rg) != 9:
            raise serializers.ValidationError('Rg must be 9 characters')
        return rg

    def validate_celular(self, celular):
        if len(celular) <= 11 or celular.isalpha():
            raise serializers.ValidationError('Celular must be 12 characters numeric')
        return celular

    def validate_email(self, email):
        if not re.search(r"^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$", email):
            raise serializers.ValidationError('Format the email invalid')
        return email

    def validate_nome(self, nome):
        if not nome.isalpha():
            raise serializers.ValidationError('Nome invalido')
        return nome
