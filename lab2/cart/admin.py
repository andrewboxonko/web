from django.contrib import admin
from .models import OrderItem, Order


class OrderItemInline(admin.TabularInline):
    model = OrderItem
    raw_id_fields = ['product']


class OrderAdmin(admin.ModelAdmin):
    list_display = ['address', 'city', 'created', 'paid']
    list_filter = ['paid', 'created']
    inlines = [OrderItemInline]


admin.site.register(Order, OrderAdmin)

