import uuid
from django.db import models
from django.contrib.auth.models import User
from django.urls import reverse


class Category(models.Model):
    name = models.CharField(max_length=30, db_index=True)

    slug = models.SlugField(max_length=30, db_index=True, unique=True)

    class Meta:
        ordering = ['name']
        verbose_name = 'Category'
        verbose_name_plural = 'Categories'

    def __str__(self):
        return self.name

    def get_absolute_url(self):
        return reverse('dish_list_by_category',
                       args=[self.slug])


class Ingredients(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4)

    name = models.CharField(max_length=30)

    stocks = models.IntegerField()

    unit = models.CharField(max_length=4)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']


class Dish(models.Model):
    name = models.CharField(max_length=30)

    id = models.UUIDField(primary_key=True, default=uuid.uuid4)

    slug = models.SlugField(max_length=20, db_index=True, default='')

    image = models.ImageField(upload_to='photo/', blank=True, default='photo/g_tea.jpg')

    price = models.DecimalField(max_digits=10, decimal_places=2)

    category = models.ForeignKey(Category, related_name='products', on_delete=models.DO_NOTHING, default='')

    composition = models.ManyToManyField(Ingredients)

    def __str__(self):
        return self.name

    class Meta:
        ordering = ['name']
        verbose_name_plural = 'dishes'
        index_together = (('id', 'slug'),)

    def get_absolute_url(self):
        return reverse('dish_detail',
                       args=[self.slug])


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.DO_NOTHING)

    phone_number = models.CharField(max_length=10)

    def __str__(self):
        return self.user.username

    def get_total_cost(self):
        return sum(item.get_cost() for item in self.items.all())


class Location(models.Model):
    address = models.CharField(max_length=50, default='')

    phone = models.CharField(max_length=25, default='')

    email = models.CharField(max_length=35, default='')

    def __str__(self):
        return self.address