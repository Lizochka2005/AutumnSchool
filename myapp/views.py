from django.shortcuts import render, redirect
from rest_framework import viewsets
# from .forms import UsersForm
from .models import Profile
from .serializers import ProfileSerializer

# def registration(request):
#     if request.method == 'POST':
#         form = UsersForm(request.POST)
#         if form.is_valid():
#             form.save()
#             return redirect('/')
#     else:
#         form = UsersForm()
#     return render(request, 'myapp/index1.html', {'form': form})

def index(request):
    return render(request, 'myapp/index1.html')

class ProfileViewSet(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()
