from django.db import models

# Create your models here.
class Note(models.Model):
    id = models.BigAutoField(primary_key=True)
    title = models.CharField(max_length = 255)
    content = models.TextField(max_length = 2000)
    created_at = models.DateTimeField(auto_now_add=True)
