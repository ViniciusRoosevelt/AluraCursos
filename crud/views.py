from rest_framework import viewsets, status
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework import generics
from rest_framework import response
import os
from .models import *
from .serializers import *
# Create your views here.


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Imagem.objects.all().order_by('-creation_date')
    serializer_class = ImagesSerializer
    parse_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class RegisterViewSet(generics.CreateAPIView):
    "Cadastra um novo usuario"
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer


class GetUserViewSet(generics.ListAPIView):
    "Mostra os dados de um usuário"
    def get_queryset(self):
        queryset = User.objects.filter(id=self.kwargs['pk'])
        return queryset

    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = GetUserSerializer


class AllUserViewSet(viewsets.ModelViewSet):
    "Lista todos os usuarios"
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = AllUserSerializer


class AllImagesCreatedFromUser(generics.ListAPIView):
    """Lista as imagens de um usuário"""

    serializer_class = ImageCreatedFromUserSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def get_queryset(self):
        queryset = Imagem.objects.filter(creator_id=self.kwargs['pk'])
        return queryset


class ImageCreatedFromUser(generics.ListAPIView):
    """Mostra os dados da imagem de um usuário"""

    serializer_class = ImageCreatedFromUserSerializer
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def get_queryset(self):
        queryset = Imagem.objects.filter(
            creator_id=self.kwargs['pk'], id=self.kwargs['id'])
        return queryset
    "Remove a imagem de um usuário"
    def delete(self, request, *args, **kwargs):
        queryset = Imagem.objects.filter(
            creator_id=self.kwargs['pk'], id=self.kwargs['id'])
        path = str(queryset.get().image_url.path)
        print(path)
        if os.path.exists(path):
            print('True')
            os.remove(path)
            queryset.delete()
            return response.Response(status=status.HTTP_200_OK)
        else:
            return response.Response(status=status.HTTP_404_NOT_FOUND)
