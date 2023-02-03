import os

from PIL import Image
from rest_framework import (generics, permissions, response, status, views,
                            viewsets)
from rest_framework.parsers import FormParser, MultiPartParser
from rest_framework.views import APIView
from rest_framework_simplejwt import views
from django.http import JsonResponse
from crud.models import *
from crud.serializers import *


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Imagem.objects.all().order_by('-creation_date')
    serializer_class = ImagesSerializer
    parse_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.AllowAny]
    # authentication_classes = [SessionAuthentication, BasicAuthentication]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class RegisterViewSet(generics.CreateAPIView):
    "Cadastra um novo usuario"
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer


class MyTokenObtainPairView(views.TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class GetUserViewSet(generics.ListAPIView):
    "Mostra os dados de um usuário"

    def get_queryset(self):
        queryset = User.objects.filter(id=self.kwargs['pk'])
        return queryset

    permission_classes = [permissions.IsAuthenticated]
    # authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = GetUserSerializer


class AllUserViewSet(generics.ListAPIView):
    "Lista todos os usuarios"
    permission_classes = [permissions.IsAuthenticated]
    # authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = AllUserSerializer

    def get_queryset(self):
        queryset = User.objects.all()
        return queryset


class AllImagesCreatedFromUser(generics.ListAPIView):
    """Lista as imagens de um usuário"""

    serializer_class = ImageCreatedFromUserSerializer
    permission_classes = [permissions.IsAuthenticated]
    # authentication_classes = [SessionAuthentication, BasicAuthentication]

    def get_queryset(self):
        queryset = Imagem.objects.filter(creator_id=self.kwargs['pk'])
        return queryset


class ImageCreatedFromUser(generics.ListAPIView):
    """Mostra os dados da imagem de um usuário"""

    serializer_class = ImageCreatedFromUserSerializer
    permission_classes = [permissions.IsAuthenticated]
    # authentication_classes = [SessionAuthentication, BasicAuthentication]

    def get_queryset(self):
        queryset = Imagem.objects.filter(
            creator_id=self.kwargs['pk'], id=self.kwargs['id'])
        return queryset
    "Remove a imagem de um usuário"

    def delete(self, request, *args, **kwargs):
        queryset = Imagem.objects.get(
            creator_id=self.kwargs['pk'], id=self.kwargs['id'])
        path = str(queryset.image_url.path)
        print(path)
        if os.path.exists(path):
            print('True')
            os.remove(path)
            queryset.delete()
            return response.Response(status=status.HTTP_200_OK)
        else:
            return response.Response(status=status.HTTP_404_NOT_FOUND)


class FileImageCreatedFromUser(generics.ListAPIView):

    serializer_class = FileImageCreatedFromUserSerializer
    permission_classes = [permissions.IsAuthenticated]
    # authentication_classes = [SessionAuthentication, BasicAuthentication]

    def get(self, request, *args, **kwargs):
        queryset = Imagem.objects.filter(
            creator_id=self.kwargs['pk'], id=self.kwargs['id'])
        path = str(queryset.get().image_url.path)
        print(path)

        if os.path.exists(path):
            file = Image.open(path, 'r')

            file.show()
            return response.Response(status=status.HTTP_200_OK)

        else:
            return response.Response(status=status.HTTP_404_NOT_FOUND)


class ImageUploadViewSet(APIView):
    """Upload Images"""
    parser_classes = [MultiPartParser,FormParser]
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request,*args, **kwargs):
        images = Imagem.objects.filter(creator_id=self.kwargs['pk'])
        for image in images:
            if image.title.lower() == str(request.data['title']).lower():
                return response.Response("Duplicate name", status=status.HTTP_409_CONFLICT)
        if str(request.data['image_url']).split('.')[1] != 'png' and str(request.data['image_url']).split('.')[1] != 'jpg':
            return response.Response("Invalid file extension. Only .jpg and .png files.", status=status.HTTP_400_BAD_REQUEST)



        image_url = request.FILES['image_url']

        serializer = ImagesSerializer(data=request.data,context={'image_url':image_url})

        
        if serializer.is_valid():
            if request.data.get('image_url') is not None:
                image_url.name = request.data.get('image_url').name
                creator = self.kwargs['pk']
                serializer.save(image_url=image_url,creator_id=creator)
            return response.Response(serializer.data, status=status.HTTP_201_CREATED)
        return response.Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
