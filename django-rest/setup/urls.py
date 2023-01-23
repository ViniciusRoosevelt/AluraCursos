
from django.contrib import admin
from django.urls import include, path
from django.conf import settings
from django.conf.urls.static import static
from escola.views import AlunosViewSet, CursosViewSet, ImagesViewSet, MatriculasViewSet, MatriculasAlunoView, AlunosMatriculadosView
from rest_framework import routers
router = routers.DefaultRouter()
router.register('alunos', AlunosViewSet, basename='Alunos')
router.register('cursos', CursosViewSet, basename='Cursos')
router.register('matriculas', MatriculasViewSet, basename='Matriculas')
router.register('imagens', ImagesViewSet, basename='Images')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('alunos/<int:pk>/matriculas/', MatriculasAlunoView.as_view()),
    path('cursos/<int:pk>/matriculas/', AlunosMatriculadosView.as_view())
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
