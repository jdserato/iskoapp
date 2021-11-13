from django.db import models
from django.contrib.auth.models import AbstractUser, Group

# Create your models here.
class Client(AbstractUser):
	is_teacher = models.BooleanField(default=False)
	birthdate = models.DateField(default="2000-01-01", blank=True)
	contact_number = models.CharField(max_length=13, blank=True)
	address = models.TextField(blank=True)
	education_level = models.TextField(blank=True)
	verification_code = models.IntegerField(default=0, blank=True)
	status = models.CharField(max_length=50, blank=True)