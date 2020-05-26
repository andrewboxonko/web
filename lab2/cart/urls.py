from django.conf.urls import url
from django.urls import path, re_path

from cart.views import OrderView
from . import views


urlpatterns = [
    path(r'^$', views.cart_detail, name='cart_detail'),
    path(r'^add/(?P<product_id>\d+)/$', views.cart_add, name='cart_add'),
    path(r'^remove/(?P<product_id>\d+)/$', views.cart_remove, name='cart_remove'),
    re_path(r'^create/$', views.order_create, name='order_create'),
    path('api/orders/', OrderView.as_view()),
]