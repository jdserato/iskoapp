from django.shortcuts import render
from .models import Client
from .serializers import ClientSerializer, LoginSerializer, UserSerializer
from rest_framework import generics, permissions
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView
from knox.models import AuthToken

class ExampleView(APIView):
    authentication_classes = [SessionAuthentication, BasicAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, format=None):
        content = {
            'user': str(request.user),  # `django.contrib.auth.User` instance.
            'auth': str(request.auth),  # None
        }
        return Response(content)

class AccountListCreate(generics.GenericAPIView):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        try:
            serializer.is_valid(raise_exception=True)
            user = serializer.save()
            return Response({
              "user": UserSerializer(user, context=self.get_serializer_context()).data,
              "token": AuthToken.objects.create(user)[1]
            })
        except:
            print(serializer.errors)
        raise serializer.errors
        # serializer = self.get_serializer(data=request.data)
        # print("whatever this is")
        # serializer.is_valid(raise_exception=False)
        # print("whatever this is ehem")
        # user = serializer.validated_data
        # print(user)
        # _, token = AuthToken.objects.create(user)
        # return Response({
        #   "user": UserSerializer(user, context=self.get_serializer_context()).data,
        #   "token": AuthToken.objects.create(user)[1]
        # })

class LoginAPI(generics.GenericAPIView):
    serializer_class = LoginSerializer

    def post(self, request, *args, **kwargs):
        print("searching for", request.data['email'])
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        print(user)
        _, token = AuthToken.objects.create(user)
        return Response({
          "user": UserSerializer(user, context=self.get_serializer_context()).data,
          "token": AuthToken.objects.create(user)[1]
        })

# Get User API
class UserAPI(generics.RetrieveAPIView):
  permission_classes = [
    permissions.IsAuthenticated,
  ]
  serializer_class = UserSerializer

  def get_object(self):
    return self.request.user