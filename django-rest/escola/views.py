from rest_framework import viewsets, generics, status
from rest_framework.response import Response


from escola.models import Aluno, Curso, Matricula, Image
from escola.serializer import AlunoSerializer, CursoSerializer, MatriculasSerializer, MatriculasAlunoSerializer, AlunosMatriculadosSerializer,ImagesSerializer, AlunoSerializerV2


class AlunosViewSet(viewsets.ModelViewSet):
    """Get all Alunos"""
    queryset = Aluno.objects.all()

    def get_serializer_class(self):
        if (self.request.version == 'v2'):
            return AlunoSerializerV2
        else:
            return AlunoSerializer


class CursosViewSet(viewsets.ModelViewSet):
    """Get all Cursos"""
    queryset = Curso.objects.all()
    serializer_class = CursoSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            response = Response(
                serializer.data, status=status.HTTP_201_CREATED)
            id = str(serializer.data['id'])
            response['Location'] = request.build_absolute_uri() + id
            return response


class ImagesViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all()
    serializer_class = ImagesSerializer


class MatriculasViewSet(viewsets.ModelViewSet):
    """Get All Matriculas"""
    queryset = Matricula.objects.all()
    serializer_class = MatriculasSerializer


class MatriculasAlunoView(generics.ListAPIView):
    """Get matricula from Aluno specific"""

    def get_queryset(self):
        queryset = Matricula.objects.filter(aluno_id=self.kwargs['pk'])
        return queryset
    serializer_class = MatriculasAlunoSerializer


class AlunosMatriculadosView(generics.ListAPIView):
    """Get Alunos Matriculados"""

    def get_queryset(self):
        queryset = Matricula.objects.filter(curso_id=self.kwargs['pk'])
        return queryset
    serializer_class = AlunosMatriculadosSerializer
