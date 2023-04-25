from django.urls import path
from django.views.decorators.csrf import csrf_exempt

from rest_framework import routers

from .views import SkinAnalysisViewset

router = routers.DefaultRouter()

urlpatterns = router.urls

urlpatterns = [
    path('analysis/', SkinAnalysisViewset.as_view(), name='analysis-data'),
]
