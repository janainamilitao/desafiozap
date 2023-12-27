# Generated by Django 5.0 on 2023-12-27 17:58

import django.utils.timezone
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('creation', models.DateTimeField(default=django.utils.timezone.now)),
                ('updated', models.DateTimeField(blank=True, null=True)),
                ('timezone', models.CharField(choices=[('-03:00', 'GMT -3'), ('-04:00', 'GMT -4'), ('-05:00', 'GMT -5')], default='-03:00', max_length=50)),
                ('language', models.CharField(choices=[('pt', 'Português'), ('es', 'Espanhol'), ('en', 'Inglês')], default='pt', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Doc',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('deleted', models.BooleanField(default=False)),
                ('creation', models.DateTimeField()),
                ('updated', models.DateTimeField()),
                ('signatureDeadline', models.DateTimeField()),
                ('signed', models.BooleanField(default=False)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('dateLastPassReset', models.DateTimeField()),
                ('verifedEmail', models.BooleanField(default=False)),
                ('password', models.CharField(max_length=255)),
                ('creation', models.DateTimeField()),
                ('updated', models.DateTimeField()),
            ],
        ),
    ]
