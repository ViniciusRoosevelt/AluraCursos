from django.shortcuts import render

from rest_framework import viewsets
from cliente.models import Cliente
from cliente.serializers import ClienteSerializer
# Create your views here.


class ClientesViewSet(viewsets.ModelViewSet):
    "Get All Clientes"
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
