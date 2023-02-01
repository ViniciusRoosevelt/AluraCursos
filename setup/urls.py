
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework import routers
from crud.views import *
from django.conf.urls.static import static
router = routers.DefaultRouter()
router.register('images', ImageViewSet, basename='Images')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('crud.urls')),
    path('', include(router.urls)),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
