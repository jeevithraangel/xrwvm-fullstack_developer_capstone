from django.urls import path, include
from django.contrib import admin
from django.http import HttpResponse
def home(request):
    return HttpResponse("Car Dealership Backend Running")

urlpatterns = [
    path('', home),  # 👈 add this
    path('admin/', admin.site.urls),
    path('djangoapp/', include('api.urls')),
]