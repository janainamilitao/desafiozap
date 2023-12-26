from rest_framework import serializers
from .models import Company, Doc, User


class CompanySerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Company
        fields = ['name', 'timezone', 'language']

class DocSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Doc
        fields = ['name', 'deleted', 'signatureDeadline', 'signed']

class UserSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'dateLastPassReset', 'verifedEmail', 'password']



