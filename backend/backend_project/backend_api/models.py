from django.db import models

# Create your models here.

class Movie(models.Model):
    name = models.CharField(max_length=250)
    genre = models.CharField(max_length=200)
    starring = models.CharField(max_length=350)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name

class User(models.Model):
    name = models.CharField(max_length=250)
    email = models.EmailField(max_length=250)
    address = models.CharField(max_length=250)
    id = models.AutoField(primary_key=True, editable=False)

    def __str__(self):
        return self.name