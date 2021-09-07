from django.contrib import admin
from home.models import MusicRecord, TimeRecord

class DataAdmin(admin.ModelAdmin):
    list_display = ['title', "section", 'link']


class TimeRecordAdmin(admin.ModelAdmin):
    list_display = ['title', "date", 'duration']

admin.site.register(MusicRecord, DataAdmin)
admin.site.register(TimeRecord, TimeRecordAdmin)

