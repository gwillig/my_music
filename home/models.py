from django.db import models
from datetime import timedelta
# Create your models here.


class MusicRecord(models.Model):
    title = models.CharField(max_length=100)
    section = models.CharField(max_length=100)
    link = models.TextField()
    source = models.TextField(blank=True)


    def __str__(self):
        return f'{self.title}'



class TimeRecord(models.Model):
    title = models.CharField(max_length=100)
    date = models.DateTimeField()
    duration = models.DurationField()
    note = models.TextField(blank=True)

    def __str__(self):
        return f'{self.title} - {self.date}'