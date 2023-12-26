from django.db import models


class Company(models.Model):
    name: models.CharField(max_length=255)
    creation: models.DateTimeField()
    updated: models.DateTimeField()
    timezone: models.CharField(max_length=50) 
    linguagem: models.CharField(50) 

    def __str__(self) -> str:
        return self.name
    
class Doc(models.Model):
    name: models.CharField(max_length=255)
    deleted: models.BooleanField()
    creation: models.DateTimeField()
    updated: models.DateTimeField()
    signatureDeadline: models.DateTimeField()
    signed: models.BooleanField()

    def __str__(self) -> str:
        return self.name

class User(models.Model):
    name: models.CharField(max_length=255)
    dateLastPassReset: models.DateTimeField()
    verifedEmail: models.BooleanField()
    password: models.CharField(max_length=255)
    creation: models.DateTimeField()
    updated: models.DateTimeField()

    def __str__(self) -> str:
        return self.name