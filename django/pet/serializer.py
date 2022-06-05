from dataclasses import field
from pyexpat import model
from unicodedata import name
from rest_framework import serializers

from .models import Pet

class PetSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Pet
        fields = ('id', 'name', 'history', 'photo')