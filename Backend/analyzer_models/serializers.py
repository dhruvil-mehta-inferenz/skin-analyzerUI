from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers

from .models import UserInfo


class SkinAnalysisSerializer(serializers.Serializer):
    source_list = ['WEB_PORTAL', 'MOBILE_APP', 'BACKEND']

    id = serializers.IntegerField(read_only=True, required=False)
    user_uuid = serializers.UUIDField(format='hex_verbose', required=True)
    source = serializers.ChoiceField(choices=source_list, required=True)
    created = serializers.DateTimeField(read_only=True, required=False)
    modified = serializers.DateTimeField(read_only=True, required=False)

    def create(self, validated_data):
        usr_uuid = validated_data['user_uuid']
        source = validated_data['source']

        try:
            obj = UserInfo.objects.get(user_uuid=usr_uuid)
            return obj

        except ObjectDoesNotExist:
            res = UserInfo.objects.create(user_uuid=usr_uuid,
                                          source=source)
            return res

