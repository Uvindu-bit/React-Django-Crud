from backend_api.views import MovieViewSet
from rest_framework.routers import DefaultRouter
from backend_api import views
from backend_api.views import UserViewSet

router = DefaultRouter()
router.register(r'movies', views.MovieViewSet, basename='movie')
router.register(r'users', views.UserViewSet, basename='user')
urlpatterns = router.urls