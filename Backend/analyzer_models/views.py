from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import CreateAPIView

from .models import UserInfo
from .serializers import SkinAnalysisSerializer


class SkinAnalysisViewset(CreateAPIView):
    queryset = UserInfo.objects.all()
    serializer_class = SkinAnalysisSerializer
    permission_classes = (AllowAny,)

    def post(self, request, *args, **kwargs):
        req_data = {
            'user_uuid': request.data['user_uuid'],
            'source': request.data['source']
        }
        serializer = SkinAnalysisSerializer(data=req_data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        return Response(
            {
                'message': 'Skin Analysis Result',
                'status': status.HTTP_200_OK,
                'data': serializer.data,
            }
        )
