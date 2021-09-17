from django.shortcuts import render
from .models import Client
from .serializers import ClientSerializer
from rest_framework import generics

class AccountListCreate(generics.ListCreateAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer