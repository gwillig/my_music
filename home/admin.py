from django.contrib import admin
from home.models import MusicRecord, TimeRecord

class DataAdmin(admin.ModelAdmin):
    list_display = ['title', "section", 'link']


admin.site.register(MusicRecord, DataAdmin)
admin.site.register(TimeRecord)

