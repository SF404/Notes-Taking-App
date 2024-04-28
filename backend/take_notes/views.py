from rest_framework import generics
from .models import Note
from .serializers import NoteSerializer

# Create your views here.

# ------------------ Using Generics -----------------------
class NoteListCreateAPI(generics.ListCreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer

class NoteRetrieveUpdateDestroyAPI(generics.RetrieveUpdateDestroyAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer