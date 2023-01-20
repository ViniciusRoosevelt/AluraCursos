from django.http import JsonResponse

# Create your views here.


def alunos(request):
    if (request.method == 'GET'):
        alunos = {
            "id": 1, 'name': 'Vinicius', "description": "Estuda em Ads",
        }
        return JsonResponse(alunos)
