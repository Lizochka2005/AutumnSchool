from django import forms
from django.forms import ModelForm
from .models import Profile

class UsersForm(ModelForm):
    date = forms.DateField(required=False,widget=forms.DateInput(attrs={'class':'input_date','id':'date','placeholder':'Дата рождения','type':'date'}))
    photo = forms.ImageField(required=False,widget=forms.FileInput(attrs={'id':'input_img','accept':'.png,.jpg,.jpeg','onchange':'readURL();'}))
    name = forms.CharField(required=False,widget=forms.TextInput(attrs={'id':'first_name', 'class':'input_first_name','name':'name','pattern':"^[А-Яа-яЁё\s]+$"}))
    gender = forms.ChoiceField(required=False, widget=forms.RadioSelect(attrs={'class':'input_sex1','name':'gender','type':'radio'}))
    telegram = forms.CharField(required=False,widget=forms.TextInput(attrs={'id':'telegram','class':'input_telegram','type':'telegram','name':'telegram','pattern':"[@]{1}[a-zA-Z0-9\-_]{1,15}"}))
    phone = forms.CharField(required=False,widget=forms.TextInput(attrs={'class':'input_number','id':'number','name':'phone','type':'phone','pattern':"[@]{1}[a-zA-Z0-9\-_]{1,15}"}))
    aboutuser = forms.CharField(required=False, widget=forms.Textarea(attrs={'name':"aboutme", 'id':"aboutme", 'class':"input_about_me", 'cols':"10", 'rows':"4"}))

    class Meta:
        model = Profile
        fields = ('name', 'gender', 'photo', 'date', 'telegram', 'phone', 'aboutuser')