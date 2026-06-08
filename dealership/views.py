from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Dealer, Review
from .serializers import DealerSerializer, ReviewSerializer

class DealerView(APIView):
    def get(self, request):
        dealers = Dealer.objects.all()
        return Response(DealerSerializer(dealers, many=True).data)


class ReviewView(APIView):

    def get(self, request, dealer_id):
        reviews = Review.objects.filter(dealer_id=dealer_id)
        return Response(ReviewSerializer(reviews, many=True).data)

    def post(self, request):
        review = Review.objects.create(
            dealer_id=request.data["dealer"],
            user_id=request.data["user"],
            rating=request.data["rating"],
            comment=request.data["comment"]
        )
        return Response({"message": "Review added"})