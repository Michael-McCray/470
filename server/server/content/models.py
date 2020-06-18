from django.db import models
from django.core.validators import validate_email
from django.core.exceptions import ValidationError

# def custom_validate_email(value):
#     if <custom_check>:
#         raise ValidationError('Email format is incorrect')

class Attention(models.Model):
    title  = models.CharField(max_length=100)
    text  = models.TextField()
    button_txt = models.CharField(max_length=100)
    active = models.BooleanField(unique=False,default=False)
    
    def __str__(self):
        return self.title


class Board_Page(models.Model):
    title = models.CharField(max_length=100)
    active = models.BooleanField(unique=False,default=False)
    rsvp_link= models.URLField(max_length=200, blank=True)

    def __str__(self):
        return self.title


class Footer(models.Model):
    footer_text = models.CharField(max_length=100)
    active = models.BooleanField(unique=False,default=False)

    def __str__(self):
        return self.footer_text


class Home(models.Model):
    title = models.CharField(max_length=100)
    assotiation_title = models.TextField()
    button_txt = models.CharField(max_length=100)
    active = models.BooleanField(unique=False,default=False)
    
    def __str__(self):
        return self.title

class Tag(models.Model):
    text = models.CharField(max_length=100)
    active = models.BooleanField(unique=False,default=False)
    page = models.ForeignKey(
        "Home", related_name='tags', on_delete=models.CASCADE)

    def __str__(self):
        return self.text

class Meeting(models.Model):
    title = models.CharField(max_length=100)
    time = models.TimeField((u"Conversation Time"), blank=True)
    location = models.CharField(max_length=100)
    text = models.TextField()
    active = models.BooleanField(unique=False,default=False)
    board_page = models.ForeignKey(
        "Board_Page", related_name='meetings', on_delete=models.CASCADE)


    def __str__(self):
        return self.title

class Memo(models.Model):
    title = models.CharField(max_length=100)
    text = models.TextField()

    
    def __str__(self):
        return self.title

class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=254, blank=False, unique=True, validators=[validate_email])

    def __str__(self):
        return self.email
    
        


