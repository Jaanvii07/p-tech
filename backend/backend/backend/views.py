from django.shortcuts import render

def home(request):
 return render(request,"home.html")

def ask(request):
 return render(request,"ask_question.html")

def guide(request):
 return render(request,"guide.html") 

def volunteer(request):
 return render(request,"volunteer.html") 