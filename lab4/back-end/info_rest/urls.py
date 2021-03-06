from django.urls import path
from django.conf.urls import url
from . import views
from rest_framework_jwt.views import obtain_jwt_token, refresh_jwt_token


urlpatterns = [
    path('', views.index, name='index'),
    path('menu/', views.menu_club, name='menu_rest'),
    path('menu-rest/', views.menu_rest, name='menu_restaurant'),
    path('menu-wine', views.menu_wine, name='menu_wine'),
    path('menu-bar', views.menu_bar, name='menu_bar'),
    path('login/', views.user_login, name='login'),
    path('logout/', views.logout_view, name='logout'),
    path('register', views.register, name='register'),
    path('api/dishes/', views.DishView.as_view()),
    path('api/locations/', views.LocationView.as_view()),
    path('api/category/', views.CategoryView.as_view()),
    path('api/auth/obtain_token/', obtain_jwt_token),
    path('api/auth/refresh_token/', refresh_jwt_token),
    path('api/auth/register/', views.RegisterView.as_view()),
    path('contact/', views.contact, name='contact'),
    url(r'^$', views.dish_list, name='dish_list'),
    path('dish_list/', views.dish_list, name='dish_list'),
    url(r'^(?P<category_slug>[-\w]+)/$', views.dish_list, name='dish_list_by_category'),
    url(r'^dishes/(?P<slug>[-\w]+)/$', views.dish_detail, name='dish_detail'),
]
