from django.urls import path
from . import views


urlpatterns = [
    path('', views.index ),
    path('signup', views.index ),
    path('home', views.index ),
    path('shop', views.index ),
    path('my-playlist', views.index ),
    path('update-account', views.index ),
    path('course', views.index ),
]