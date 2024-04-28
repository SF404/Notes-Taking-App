from django.urls import path
from .views import NoteListCreateAPI, NoteRetrieveUpdateDestroyAPI

urlpatterns = [
    path('notes/', NoteListCreateAPI.as_view(), name='notes__list_create'),
    path('notes/<int:pk>/', NoteRetrieveUpdateDestroyAPI.as_view(), name='notes__retrive_update_destroy'),


]