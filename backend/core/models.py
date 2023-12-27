from django.db import models
from django.utils import timezone
from django.conf import settings

class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    dateLastPassReset = models.DateTimeField()
    verifedEmail = models.BooleanField(default=False)
    password = models.CharField(max_length=255)
    creation = models.DateTimeField()
    updated = models.DateTimeField()

    def __str__(self) -> str:
        return self.name

class Company(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    creation = models.DateTimeField(default=timezone.now)
    updated = models.DateTimeField(blank=True, null=True)
    # userCreate = models.OneToOneField(User, on_delete=models.SET_NULL, null=True)
    timezone = models.CharField(
        default='-03:00',
        max_length=50,
        choices=(
            ('-03:00', 'GMT -3'),
            ('-04:00', 'GMT -4'),
            ('-05:00', 'GMT -5'),
        )
    ) 
    language = models.CharField(
        default='pt',
        max_length=50,
        choices=(
            ('pt', 'Português'),
            ('es', 'Espanhol'),
            ('en', 'Inglês'),
        )
    )

    def update(self):
        self.updated = timezone.now()
        self.save()

    def __str__(self) -> str:
        return self.name 


class Doc(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    deleted = models.BooleanField(default=False)
    creation = models.DateTimeField()
    updated = models.DateTimeField()
    signatureDeadline = models.DateTimeField()
    signed = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name




