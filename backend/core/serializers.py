from rest_framework import serializers
from .models import Company, Doc, User


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class CompanySerializer(serializers.ModelSerializer):
    class Meta:
        model = Company
        fields = '__all__'

class DocSerializer(serializers.ModelSerializer):
    class Meta:
        model = Doc
        fields = '__all__'



