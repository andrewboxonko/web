from django.contrib import admin
from .models import Ingredients, Dish, Category, UserProfile, Location

admin.site.register(Ingredients)


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Category, CategoryAdmin)


class DishAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug', 'category', 'price']
    prepopulated_fields = {'slug': ('name',)}


admin.site.register(Dish, DishAdmin)

admin.site.register(UserProfile)

admin.site.register(Location)