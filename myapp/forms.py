from django import forms
from django.forms import ModelForm
from .models import Profile

class UsersForm(ModelForm):

    class Meta:
        model = Profile
        fields = ('name', 'gender', 'photo', 'date', 'telegram', 'phone', 'aboutuser')