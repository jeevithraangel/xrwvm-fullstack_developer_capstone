from django.urls import path
from . import views

urlpatterns = [
    path('login', views.login_view),
    path('logout', views.logout_user),

    path('get_dealers', views.get_dealers),
    path('get_dealer/<int:id>', views.get_dealer_by_id),
    path('get_dealers/<str:state>', views.get_dealers_by_state),

    # ✅ IMPORTANT: Reviews endpoint
    path('dealer/<int:id>/reviews', views.get_dealer_reviews),
]