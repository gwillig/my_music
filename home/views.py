from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
from rest_framework.response import Response

from .serializers import TimeRecordSerializer
from rest_framework.decorators import api_view


from home.models import MusicRecord, TimeRecord
from django.utils.timezone import datetime
from django_pandas.io import read_frame
import pandas as pd
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


def time_record_stats(request):
    """
    @description:
        Creates an static for each day

    """
    '#1.Step: Get all records'
    qs = TimeRecord.objects.all()
    df = read_frame(qs)
    '#2.Step: Convert to dataframe'
    s = pd.to_datetime(df['date'])
    '#3.Step: Round to full days'
    df["date"] = pd.to_datetime(df['date']).dt.floor('d')
    '#4.Step: Get all unique days'
    days = df["date"].unique()
    '#4.1.Step: Sort days'
    days_sorted = sorted(days, reverse=True)
    result = []
    '#5.Step: Calculate the stats for each day'
    for el in days_sorted:
        '#5.1.Step: Sum by title'
        df_grouped = df[df["date"]==el] .groupby("title").agg(["sum"])
        '#5.2.Step: Select only the column sum'
        df_selected = df_grouped["duration"]
        stats_day = df_selected["sum"].apply(lambda x: str(x).split("days ")[1]).T.to_dict()
        key = el.strftime("%m/%d/%Y")
        stats_day["Date"] = key
        result.append(stats_day)

    return JsonResponse({"result":result})