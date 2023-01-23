from django.shortcuts import render

from rest_framework import viewsets, filters
from cliente.models import Cliente
from cliente.serializers import ClienteSerializer
from django_filters.rest_framework import DjangoFilterBackend
# Create your views here.


class ClientesViewSet(viewsets.ModelViewSet):
    "Get All Clientes"
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer
    filter_backends = [DjangoFilterBackend, filters.OrderingFilter, filters.SearchFilter]
    ordering_fields = ['nome']
    search_fields = ['nome','cpf','rg']
    filterset_fields = ['ativo']
