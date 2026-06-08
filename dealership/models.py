from django.db import models
from django.contrib.auth.models import User

class Dealer(models.Model):
    name = models.CharField(max_length=100)
    city = models.CharField(max_length=100)

class Review(models.Model):
    dealer = models.ForeignKey(Dealer, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    rating = models.IntegerField()
    comment = models.TextField()