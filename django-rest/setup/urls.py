
from django.contrib import admin
from django.urls import include, path
from escola.views import AlunosViewSet, CursosViewSet, MatriculasViewSet, MatriculasAlunoView,AlunosMatriculadosView
from rest_framework import routers
router = routers.DefaultRouter()
router.register('alunos', AlunosViewSet, basename='Alunos')
router.register('cursos', CursosViewSet, basename='Cursos')
router.register('matriculas', MatriculasViewSet, basename='Matriculas')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('aluno/<int:pk>/matriculas/', MatriculasAlunoView.as_view()),
    path('curso/<int:pk>/matriculas/', AlunosMatriculadosView.as_view())
]
