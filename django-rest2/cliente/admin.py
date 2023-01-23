from django.contrib import admin

from cliente.models import Cliente
# Register your models here.


class Clientes(admin.ModelAdmin):
    list_display = ('id', 'nome', 'cpf', 'rg', 'celular',
                    'data_nascimento', 'ativo')
    list_display_links = ('id', 'nome')
    search_fields = ('nome', 'cpf', 'rg',)
    list_filter = ('ativo',)
    list_editable = ('ativo',)
    list_per_page = 10
    ordering = ('nome',)


admin.site.register(Cliente, Clientes)
