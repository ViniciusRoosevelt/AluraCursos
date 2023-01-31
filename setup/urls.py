"""setup URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework import routers
from rest_framework import views
from crud.views import *
from django.conf.urls.static import static
router = routers.DefaultRouter()
router.register('images', ImageViewSet, basename='Images')
router.register('all-user', AllUserViewSet, basename='AllUsers')
router.register('upload-file', FileImageCreatedFromUserUploadViewSet,
                basename='Upload_file_image_created_from_user')
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('register/', RegisterViewSet.as_view(), name='auth_register'),
    path('users/<int:pk>/images/', AllImagesCreatedFromUser.as_view(),
         name='all_images_from_user'),
    path('users/<int:pk>/images/<int:id>',
         ImageCreatedFromUser.as_view(), name='image_created_from_user'),
    path('users/<int:pk>/images/<int:id>/file',
         FileImageCreatedFromUser.as_view(), name='file_image_created_from_user'),
    path('users/<int:pk>/', GetUserViewSet.as_view(), name='get_user_from_id'),
    path('api-auth/', include('rest_framework.urls')),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
