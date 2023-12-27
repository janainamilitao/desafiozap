from rest_framework import serializers
from .models import Company, Doc, User


class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ['id','name', 'timezone', 'language', 'date_creation', 'date_updated', 'user_created', 'associates_doc', 'associates_user', 'guests']

class DocSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Doc
        fields = ['id', 'name', 'deleted', 'signature_deadline', 'signed', 'date_creation', 'date_updated', 'user_created']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['id','name', 'email', 'date_last_pass_reset', 'verifed_email', 'password', 'date_creation', 'date_updated']



