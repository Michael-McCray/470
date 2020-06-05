from django.db import models

class Message(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    published = models.BooleanField(default=False)
    published = models.BooleanField(default=False)
    owner = models.ForeignKey('auth.User')



    
class Reply(models.Model):    
	category = models.ForeignKey(
        Category, related_name='ingredients', on_delete=models.CASCADE)