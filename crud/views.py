from rest_framework import viewsets
from rest_framework import permissions
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.authentication import BasicAuthentication, SessionAuthentication
from rest_framework import generics
from .models import *
from .serializers import *
# Create your views here.


class ImageViewSet(viewsets.ModelViewSet):
    queryset = Imagem.objects.all().order_by('-creation_date')
    serializer_class = ImagesSerializer
    parse_classes = (MultiPartParser, FormParser)
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [SessionAuthentication, BasicAuthentication]

    def perform_create(self, serializer):
        serializer.save(creator=self.request.user)


class RegisterViewSet(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny]
    serializer_class = RegisterSerializer


class AllUser(viewsets.ModelViewSet):
    queryset = User.objects.all()
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    serializer_class = AllUserSerializer


class ImageCreatedFromUser(generics.ListAPIView):
    """Get All Image Created From User """

    serializer_class = ImageCreatedFromUserSerializer
    def get_queryset(self):
        id = self.kwargs.get('pk')
        print(id)
        queryset = Imagem.objects.filter(creator_id=id)
        return queryset

