from django.contrib.auth import authenticate
from django.http import JsonResponse

def login_view(request):
    return JsonResponse({"message": "Login endpoint"})