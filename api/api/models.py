from django.db import models
from django.contrib.auth.models import User
# Create your models here.


class Company(models.Model):
    name = models.CharField(max_length=255)
    url = models.TextField()

    def __str__(self):
        return self.name


class ProductSize(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Category(models.Model):
    name = models.CharField(max_length=255)

    def __str__(self):
        return self.name


class Product(models.Model):
    name = models.CharField(max_length=255)
    content = models.TextField()
    category = models.ManyToManyField(Category, related_name='products')
    created_At = models.DateField(auto_now_add=True)
    updated_At = models.DateField(auto_now=True)

    class Meta:
        ordering = ['-created_At',]

    def __str__(self):
        return self.name


class ProductSite(models.Model):
    name = models.CharField(max_length=255)
    product = models.ForeignKey(
        Product, on_delete=models.CASCADE, related_name='sites', related_query_name='site')
    company = models.ForeignKey(
        Company, on_delete=models.CASCADE, related_name='sites', related_query_name='site')
    ProductSize = models.ForeignKey(
        ProductSize, on_delete=models.CASCADE, related_name='sites', related_query_name='site')
    price = models.DecimalField(max_digits=9, decimal_places=2)
    url = models.TextField()
    created_At = models.DateField(auto_now_add=True)
    updated_At = models.DateField(auto_now=True)

    def __str__(self):
        return self.name


class Comment(models.Model):
    title = models.CharField(max_length=255)
    content = models.TextField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE,
                                related_name='comments', related_query_name='comment')
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                             related_name='comments', related_query_name='comments')
    created_At = models.DateField(auto_now_add=True)
    updated_At = models.DateField(auto_now=True)
