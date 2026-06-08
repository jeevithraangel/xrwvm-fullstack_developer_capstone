from rest_framework import serializers
from .models import Dealer, Review

class DealerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Dealer
        fields = "__all__"

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = "__all__"