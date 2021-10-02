from rest_framework import serializers
from .models import Client
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Client
    fields = ('id', 'username', 'email')

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email', 'verification_code', 'is_teacher', 'birthdate', 'contact_number', 'address', 'education_level', 'status')

class LoginSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('email', 'password')

    def validate(self, data):
        username = Client.objects.filter(email=data['email'])
        if username.exists():
            print(username[0])
            user = authenticate(username=username[0].username, password=data['password'])
            if user and user.is_active:
                return user
        raise serializers.ValidationError("Incorrect email and password")
