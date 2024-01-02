# Generated by Django 5.0 on 2024-01-02 03:44

import django.db.models.deletion
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
                ('date_creation', models.DateTimeField(default=django.utils.timezone.now)),
                ('date_updated', models.DateTimeField(blank=True, null=True)),
                ('timezone', models.CharField(choices=[('-03:00', 'GMT -3'), ('-04:00', 'GMT -4'), ('-05:00', 'GMT -5')], default='-03:00', max_length=50)),
                ('language', models.CharField(choices=[('pt', 'Português'), ('es', 'Espanhol'), ('en', 'Inglês')], default='pt', max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('email', models.EmailField(max_length=255)),
                ('date_last_pass_reset', models.DateTimeField(blank=True, null=True)),
                ('verifed_email', models.BooleanField(default=False)),
                ('password', models.CharField(max_length=255)),
                ('date_creation', models.DateTimeField(default=django.utils.timezone.now)),
                ('date_updated', models.DateTimeField(blank=True, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Doc',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('name', models.CharField(max_length=255)),
                ('deleted', models.BooleanField(default=False)),
                ('date_creation', models.DateTimeField(default=django.utils.timezone.now)),
                ('date_updated', models.DateTimeField(blank=True, null=True)),
                ('signature_deadline', models.DateTimeField(blank=True, null=True)),
                ('signed', models.BooleanField(default=False)),
                ('associate_company', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.company')),
                ('user_created', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.user')),
            ],
        ),
        migrations.AddField(
            model_name='company',
            name='guests',
            field=models.ManyToManyField(related_name='guests', to='core.user'),
        ),
        migrations.AddField(
            model_name='company',
            name='user_created',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='core.user'),
        ),
    ]
