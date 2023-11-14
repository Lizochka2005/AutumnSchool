# from django.shortcuts import render, redirect
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.decorators import api_view
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

@api_view(['GET', 'POST'])
def index(request):
    if request.method == 'POST':
        return Response({'message': f'Hello, {request.data["text"]}'})
    return Response({'message': 'Hello world'})

class ProfileViewSet(viewsets.ModelViewSet):
    queryset = Profile.objects.all()
    serializer_for_queryset = ProfileSerializer(
        instance = queryset,
        many = True
    )

