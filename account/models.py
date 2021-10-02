from django.db import models
from django.contrib.auth.models import AbstractUser, Group

# Create your models here.
class Client(AbstractUser):
	is_teacher = models.BooleanField(default=False)
	birthdate = models.DateField(default="2000-01-01")
	contact_number = models.CharField(max_length=13)
	address = models.TextField()
	education_level = models.TextField()
	verification_code = models.IntegerField(default=0)
	status = models.CharField(max_length=50)