from django.http import JsonResponse

def user_test(request):
    return JsonResponse({"message": "User API working"})