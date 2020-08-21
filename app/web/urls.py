from django.contrib import admin
from django.urls import path, include
from app.web import views as WebViews

app_name="web"
urlpatterns = [
    path('', WebViews.IndexWebView.as_view(), name="index"),
    path('single-chalet/<int:pk>/', WebViews.ChaletSingle.as_view(), name="chalet-single"),
    path('chalet/listar/', WebViews.ChaletListView.as_view(), name="chalet-list"),
]
