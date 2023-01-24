from django.db import models

# Create your models here.


class User(models.Model):
    name = models.CharField(max_length=20)
    email = models.CharField(max_length=30, unique=True, blank=True)
    password = models.CharField(max_length=30)

    def __str__(self):
        return self.name


class Image(models.Model):
    image = models.ImageField()

    def __str__(self):
        return self.descricao
