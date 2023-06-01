from django.contrib import admin
from django.urls import path
from pomodoro import views

urlpatterns = [
    path('', views.index)
]
