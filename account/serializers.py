from rest_framework import serializers
from .models import Client
from django.contrib.auth import authenticate

class UserSerializer(serializers.ModelSerializer):
  class Meta:
    model = Client
    fields = ('id', 'username', 'email', 'first_name')

class ClientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Client
        fields = ('email', 'password',  'is_teacher','first_name', 'last_name', 'birthdate', 'contact_number', 'address', 'education_level')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = Client.objects.create_user(validated_data['email'], validated_data['password'])

        return user


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
