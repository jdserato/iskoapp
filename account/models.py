from django.db import models
from django.contrib.auth.models import AbstractUser, Group

# Create your models here.
class Client(AbstractUser):
	verification_code = models.IntegerField(default=0)