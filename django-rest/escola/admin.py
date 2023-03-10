from django.contrib import admin
from escola.models import Aluno, Curso, Matricula,Image
# Register your models here.


class Alunos(admin.ModelAdmin):
    list_display = ('id', 'nome', 'rg', 'cpf', 'data_nascimento',)
    list_display_links = ('id', 'nome')
    search_fields = ['nome']
    list_per_page = 20


admin.site.register(Aluno, Alunos)


class Cursos(admin.ModelAdmin):
    list_display = ('id', 'código_curso', 'descrição', 'nível')
    list_display_links = ('id', 'código_curso', 'descrição')
    search_fields = ['código_curso']
    list_per_page = 10


admin.site.register(Curso, Cursos)


class Matriculas(admin.ModelAdmin):
    list_display = ('id', 'aluno', 'curso', 'periodo')
    list_display_links = ['id']


admin.site.register(Matricula, Matriculas)


class Images(admin.ModelAdmin):
    list_display = ('id', 'descricao', 'foto')
    list_display_links = ('id', 'descricao')


admin.site.register(Image, Images)
