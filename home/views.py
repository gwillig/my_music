from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from home.models import MusicRecord
# Create your views here.


def all_record(request):

    '#1.Step: Get all elements'
    list_section = MusicRecord.objects.values_list('section').distinct()
    '#2.Step: Create dict'
    response= {el[0]:[] for el in list_section}
    all_objects = MusicRecord.objects.all()
    '#2.Step: Divide elements into sections'
    ''
    for el in all_objects:
        response[el.section].append({"musicSrc": el.link, "name": el.title})

    return JsonResponse(response)
