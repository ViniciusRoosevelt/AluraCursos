from django.http import JsonResponse
from escola.models import Aluno
# Create your views here.


def alunos(request):
    if (request.method == 'GET'):
        alunos = Aluno.all()
        return JsonResponse(alunos)
