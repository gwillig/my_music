from .models import TimeRecord
from rest_framework import serializers


class TimeRecordSerializer(serializers.ModelSerializer):

    # date = serializers.DateTimeField(format="%Y-%m-%d %H:%M:%S", input_formats=['%Y-%m-%d',])
    # date = serializers.DateTimeField( input_formats=['%Y-%m-%d', ])

    class Meta:
        model = TimeRecord
        fields = '__all__'


