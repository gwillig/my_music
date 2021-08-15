from django.contrib import admin
from home.models import MusicRecord

class DataAdmin(admin.ModelAdmin):
    list_display = ['title', "section", 'link']


admin.site.register(MusicRecord, DataAdmin)

