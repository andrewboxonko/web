from django.shortcuts import render, redirect, get_object_or_404
from django.views.decorators.http import require_POST
from rest_framework.views import APIView
from rest_framework.response import Response
from cart.models import OrderItem
from info_rest.models import Dish
from .cart import Cart
from .forms import CartAddProductForm, OrderCreateForm
from .serializers import OrderSerializer, OrderItemsSerializer


@require_POST
def cart_add(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Dish, id=product_id)
    form = CartAddProductForm(request.POST)
    if form.is_valid():
        cd = form.cleaned_data
        cart.add(product=product,
                 quantity=cd['quantity'],
                 update_quantity=cd['update'])
    return redirect('cart_detail')


def cart_remove(request, product_id):
    cart = Cart(request)
    product = get_object_or_404(Dish, id=product_id)
    cart.remove(product)
    return redirect('cart_detail')


def cart_detail(request):
    cart = Cart(request)
    return render(request, 'cart/detail.html', {'cart': cart})


def order_create(request):
    cart = Cart(request)
    if request.method == 'POST':
        form = OrderCreateForm(request.POST)
        if form.is_valid():
            order = form.save()
            for item in cart:
                OrderItem.objects.create(order=order,
                                         product=item['product'],
                                         price=item['price'],
                                         quantity=item['quantity'])
            # очистка корзины
            cart.clear()
            return render(request, 'order/created.html',
                          {'order': order})
    else:
        form = OrderCreateForm
    return render(request, 'order/create.html',
                  {'cart': cart, 'form': form})


class OrderView(APIView):
    def get(self, request):
        order_items = OrderItem.objects.all()
        serializer = OrderItemsSerializer(order_items, many=True)
        return Response({"order_items": serializer.data})