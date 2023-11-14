from django.urls import path,include
from rest_framework.routers import DefaultRouter
# from .views import registration
from . import views

app_name ="my_app"
router = DefaultRouter()
router.register('profiles',views.ProfileViewSet, basename='profile-viewset')

urlpatterns = [
    path('', views.index, name="index"),
    # path('', registration),
]

urlpatterns+=[path(r'api/', include(router.urls))]