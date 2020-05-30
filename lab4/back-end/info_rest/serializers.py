from rest_framework import serializers
from .models import Dish, Category, Location
import uuid


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ['name']


class DishSerializer(serializers.Serializer):
    id = serializers.UUIDField(default=uuid.uuid4)

    name = serializers.CharField(max_length=30)


class DishSerializer(serializers.ModelSerializer):
    slug = serializers.SlugField(max_length=20)

    image = serializers.ImageField(use_url=True)

    price = serializers.DecimalField(max_digits=10, decimal_places=2)

    category = CategorySerializer()

    composition = DishSerializer(many=True, read_only=True)

    class Meta:
        model = Dish
        fields = ('id', 'name', 'slug', 'price', 'image', 'category', 'composition')


class LocationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Location
        fields = ['address', 'phone', 'email']
