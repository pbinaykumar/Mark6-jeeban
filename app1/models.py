from django.contrib.auth.models import User
from django.db import models

# Create your models here.
class Document(models.Model):
    ducname=models.CharField(max_length=100,null=True)
    duc=models.FileField(null=True,upload_to='All_Documents/Input')
    date = models.DateTimeField()
    def __str__(self):
        return self.ducname
class client(models.Model):
    name=models.CharField(max_length=50)
    email=models.CharField(max_length=50)
    subject=models.CharField(max_length=122)
    message=models.CharField(max_length=1000)
    date = models.DateTimeField()
    def __str__(self):
        return self.name