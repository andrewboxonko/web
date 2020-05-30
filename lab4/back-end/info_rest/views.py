from django.shortcuts import render, redirect, get_object_or_404
from django.http import HttpResponse
from rest_framework.response import Response
from rest_framework.views import APIView
from info_rest.forms import LoginForm, ExtendedUserCreationForm, UserProfileForm
from .serializers import DishSerializer, LocationSerializer, CategorySerializer
from .models import Dish, Category, UserProfile, Location
from django.contrib.auth import authenticate, login, logout
from cart.forms import CartAddProductForm
from django.contrib.auth.models import User
from braces.views import CsrfExemptMixin


def index(request):
    return render(request, 'index.html', )


def menu_club(request):
    return render(request, 'food-menu.html', )


def menu_rest(request):
    return render(request, 'food-menu-restaurant.html', )


def menu_wine(request):
    return render(request, 'food-menu-wine-card.html')


def menu_bar(request):
    return render(request, 'food-menu-bar.html')


def log(request):
    return render(request, 'login.html')


def contact(request):
    return render(request, 'contact.html')


def register(request):
    if request.method == 'POST':
        form = ExtendedUserCreationForm(request.POST)
        profile_form = UserProfileForm(request.POST)
        if form.is_valid() and profile_form.is_valid():
            user = form.save()
            profile = profile_form.save(commit=False)
            profile.user = user
            profile.save()
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=password)
            login(request, user)
            return redirect('index')
    else:
        form = ExtendedUserCreationForm()
        profile_form = UserProfileForm()

    context = {'form': form, 'profile_form': profile_form}
    return render(request, 'register.html', context)


def logout_view(request):
    logout(request)
    return redirect('index')


def user_login(request):
    if request.method == 'POST':
        form = LoginForm(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(username=cd['username'], password=cd['password'])
            if user is not None:
                if user.is_active:
                    login(request, user)
                    return redirect('index')
                else:
                    return HttpResponse('Disabled account')
            else:
                return HttpResponse('Invalid login')
    else:
        form = LoginForm()
    return render(request, 'login.html', {'form': form})


def dish_list(request, category_slug=None):
    category = None
    categories = Category.objects.all()
    dishes = Dish.objects.all()
    if category_slug:
        category = get_object_or_404(Category, slug=category_slug)
        dishes = dishes.filter(category=category)
    return render(request,
                  'list.html',
                  {'category': category,
                   'categories': categories,
                   'dishes': dishes})


def dish_detail(request, slug):
    dish = get_object_or_404(Dish,
                             slug=slug)
    cart_product_form = CartAddProductForm()
    return render(request, 'detail.html', {'dish': dish,
                                           'cart_product_form': cart_product_form})


class DishView(APIView):
    def get(self, request):
        dishes = Dish.objects.all()
        serializer = DishSerializer(dishes, many=True)
        return Response({'dishes': serializer.data})


class LocationView(APIView):
    def get(self, request):
        locations = Location.objects.all()
        serializer = LocationSerializer(locations, many=True)
        return Response({"locations": serializer.data})


class CategoryView(APIView):
    def get(self, request):
        catogory = Category.objects.all()
        serializer = CategorySerializer(catogory, many=True)
        return Response({"categories": serializer.data})
    

class RegisterView(CsrfExemptMixin, APIView):
    @staticmethod
    def post(request):
        first_name = ' '.join(request.POST['fname'].split())
        last_name = ' '.join(request.POST['lname'].split())
        username = request.POST['username']
        password = request.POST['password']
        email = request.POST['email']
        if User.objects.filter(email=email).exists():
            return Response({'response': 'EMAIL_TAKEN'})
        if User.objects.filter(username=username).exists():
            return Response({'response': 'USERNAME_TAKEN'})

        User.objects.create_user(username=username, email=email, password=password, first_name=first_name,
                                 last_name=last_name).save()
        return Response({'response': 'OK'})
