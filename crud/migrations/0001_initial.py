# Generated by Django 4.1.5 on 2023-01-30 11:29

import crud.models
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Imagem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=80)),
                ('description', models.TextField()),
                ('image_url', models.ImageField(blank=True, null=True, upload_to=crud.models.upload_to)),
                ('creator', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='listings', to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]
