from django.shortcuts import render
from django.views.generic import TemplateView
from app.web.models import Blog
class IndexWebView(TemplateView):
    template_name = "web/inicio.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['portadas']=Blog.objects.filter(blog_portada=True)
        return context
    
# Create your views here.
