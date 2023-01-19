from django.shortcuts import render,get_object_or_404,get_list_or_404
from .models import Receitas
from django.http import HttpResponse
# Create your views here.

receitas =  Receitas.objects.all()

def index(request):
    dados = {
        'receitas': receitas
    }
    return render(request, 'index.html', dados)


def receita(request, receita_id):
    receita = get_object_or_404(Receitas, pk=receita_id)

    receita_a_exibir = {
        'receita': receita
    }
    return render(request, 'receita.html', receita_a_exibir)
