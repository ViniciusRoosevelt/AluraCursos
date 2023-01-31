from .views import *
from django.urls import path


urlpatterns = [
    path('users/', AllUserViewSet.as_view(), name='Users'),
    path('users/<int:pk>/images/', AllImagesCreatedFromUser.as_view(),
         name='all_images_from_user'),
    path('users/<int:pk>/images/<int:id>',
         ImageCreatedFromUser.as_view(), name='image_created_from_user'),
    path('users/<int:pk>/images/<int:id>/file',
         FileImageCreatedFromUser.as_view(), name='file_image_created_from_user'),
    path('users/<int:pk>/', GetUserViewSet.as_view(), name='get_user_from_id'),
]
