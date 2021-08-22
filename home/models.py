from django.db import models

# Create your models here.


class MusicRecord(models.Model):
    title = models.CharField(max_length=100)
    section = models.CharField(max_length=100)
    link = models.TextField()
    source = models.TextField(blank=True)


    def __str__(self):
        return f'{self.title}'
