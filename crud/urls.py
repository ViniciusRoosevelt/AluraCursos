from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView

from .views import *

urlpatterns = [
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterViewSet.as_view(), name='auth_register'),



    path('users/', AllUserViewSet.as_view(), name='Users'),
    path('users/<int:pk>/images/', AllImagesCreatedFromUser.as_view(),
         name='all_images_from_user'),
    path('users/<int:pk>/images/<int:id>',
         ImageCreatedFromUser.as_view(), name='image_created_from_user'),
    path('users/<int:pk>/images/<int:id>/file',
         FileImageCreatedFromUser.as_view(), name='file_image_created_from_user'),
        path('users/<int:pk>/images/file/', ImageUploadViewSet.as_view(),
             name='file_image_created_from_user_upload'),
    path('users/<int:pk>/', GetUserViewSet.as_view(), name='get_user_from_id'),
]
