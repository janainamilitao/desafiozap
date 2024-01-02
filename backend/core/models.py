from django.db import models
from django.utils import timezone


class User(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    date_last_pass_reset = models.DateTimeField(blank=True, null=True)
    verifed_email = models.BooleanField(default=False)
    password = models.CharField(max_length=255)
    date_creation = models.DateTimeField(default=timezone.now)
    date_updated = models.DateTimeField(blank=True, null=True)

    def update_last_pass_reset(sender, instance, **kwargs):
        # Verifique se o campo 'email' foi alterado
        if instance.pk is not None:  # Se o objeto já existe no banco de dados
            original = User.objects.get(pk=instance.pk)
            if instance.password != original.password:
                # Atualize o campo 'nome' aqui com base na alteração do 'email'
                instance.date_last_pass_reset = timezone.now()

    def save(self, *args, **kwargs):
        self.date_creation = timezone.now()
        super().save(*args, **kwargs)

    def update_date_updated(sender, instance, **kwargs):
       instance.date_updated = timezone.now()

    def __str__(self) -> str:     
        return self.name
    

class Company(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    date_creation = models.DateTimeField(default=timezone.now)
    date_updated = models.DateTimeField(blank=True, null=True)
    guests = models.ManyToManyField(User, 'guests')
    user_created = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        blank=True,
        null=True)
    
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

    def save(self, *args, **kwargs):
                self.date_creation = timezone.now()
                super().save(*args, **kwargs)

    def update_date_updated(sender, instance, **kwargs):
         instance.date_updated = timezone.now()

    def __str__(self) -> str:
        return self.name 
    
class Doc(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    deleted = models.BooleanField(default=False)
    date_creation = models.DateTimeField(default=timezone.now)
    date_updated = models.DateTimeField(blank=True, null=True)
    signature_deadline = models.DateTimeField(blank=True, null=True)
    signed = models.BooleanField(default=False)
    associate_company =  models.ForeignKey(
        Company, 
        on_delete=models.CASCADE,
        blank=True,
        null=True)
    user_created = models.ForeignKey(
        User, 
        on_delete=models.CASCADE,
        blank=True,
        null=True)

    def save(self, *args, **kwargs):
            self.date_creation = timezone.now()
            super().save(*args, **kwargs)
    
    def update_date_updated(sender, instance, **kwargs):
         instance.date_updated = timezone.now()

    def __str__(self) -> str:
        return self.name
    
