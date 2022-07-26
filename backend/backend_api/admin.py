from django.contrib import admin
from .models import Movie
from .models import User

# Register your models here.

class MovieAdmin(admin.ModelAdmin):
    list = ('name', 'genre', 'starring')

    admin.site.register(Movie)

class UserAdmin(admin.ModelAdmin):
    list = ('name', 'email', 'address')

    admin.site.register(User)