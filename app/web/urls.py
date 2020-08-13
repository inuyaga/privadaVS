from django.contrib import admin
from django.urls import path, include
from app.web import views as WebViews

app_name="web"
urlpatterns = [
    path('', WebViews.IndexWebView.as_view(), name="index"),
]
