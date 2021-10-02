from django.urls import path
from . import views

urlpatterns = [
    path('api/account/', views.AccountListCreate.as_view() ),
    path('api/auth/login', views.LoginAPI.as_view() ),
    path('api/auth/user', views.UserAPI.as_view()),
]