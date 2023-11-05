from django.shortcuts import render, redirect
from .forms import UsersForm
from .models import Profile

def registration(request):
    if request.method == 'POST':
        form = UsersForm(request.POST)
        if form.is_valid():
            user = form.save()
            Profile.objects.create(user=user)
            # username= form.cleaned_data.get('name')
            return redirect('/')
    else:
        form = UsersForm()
    return render(request, 'myapp/index1.html', {'form': form})
