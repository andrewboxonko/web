from django.conf.urls import url
from django.contrib import admin
from django.urls import include
from django.urls import path
from django.views.generic import RedirectView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('info_rest/', include('info_rest.urls')),
    path('', RedirectView.as_view(url='/info_rest/', permanent=True)),
    #path('api/', include('info_rest.urls')),
    url(r'^', include('info_rest.urls',)),
    url(r'^', include('cart.urls',)),
    url(r'^cart/', include('cart.urls')),

]

urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)