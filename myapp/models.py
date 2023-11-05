from django.db import models
from .validators import validate_file_size
# from django.contrib.auth.models import Profile

# Create your models here.
class Profile(models.Model):
    GENDER_CHOICES = (
        ('MALE', 'Male'),
        ('FEMALE', 'Female')
    )

    name = models.CharField(max_length=60, db_index=True)
    gender = models.CharField(max_length=6, choices=GENDER_CHOICES)
    photo = models.FileField(validators=[validate_file_size])
    date = models.DateField()
    telegram = models.CharField(max_length=30)
    phone = models.CharField(max_length=12)
    aboutuser = models.TextField()

