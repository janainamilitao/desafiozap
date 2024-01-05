#!/bin/bash

cd /home/desafiozap/
python -m venv venv
source venv/bin/activate
pip install django
pip install djangorestframework
pip install django-cors-headers
pip install psycopg
#pip install psycopg2
#pip install psycopg2-binary
django-admin startproject front .
cd /home/desafiozap/backend
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
python manage.py startapp core

cd /home/desafiozap
source venv/bin/activate 
gunicorn --bind=0.0.0.0:8000 backend.front.wsgi:application
