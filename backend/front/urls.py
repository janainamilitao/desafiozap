
from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from core.views import CompanyViewSet, DocViewSet, UserViewSet


router = routers.DefaultRouter()
router.register(r'companys', CompanyViewSet)
router.register(r'docs', DocViewSet)
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
    path('admin/', admin.site.urls)
]
