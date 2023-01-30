from django.contrib import admin
from .models import *
# Register your models here.
class ImagemAdmin(admin.ModelAdmin):
    list_display = ('id', 'creator', 'creator_id', 'title', 'description', 'image_url',)
    list_display_links = ('id', 'creator', 'creator_id', 'title', 'description', 'image_url',)
    search_fields = ('title','description')
    list_per_page = 10
admin.site.register(Imagem,ImagemAdmin)