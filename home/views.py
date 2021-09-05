from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response
from home.models import MusicRecord, TimeRecord
from .serializers import TimeRecordSerializer
from rest_framework.decorators import api_view
from django.utils.timezone import datetime
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


@api_view(['GET'])
def time_record_list(request):
    time_records = TimeRecord.objects.all()
    serializer = TimeRecordSerializer(time_records, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def time_record_today(request):
    today = datetime.today()
    time_records = TimeRecord.objects.filter(date__year=today.year,
                                             date__month=today.month,
                                             date__day=today.day).order_by("-date")
    serializer = TimeRecordSerializer(time_records, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def time_record_create(request):
    serializer = TimeRecordSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        print(serializer.errors)
        return Response({"error": serializer.errors})
