from django.shortcuts import render
from django.views.generic import TemplateView, DetailView
from app.web.models import Chalet, RedSocial
class IndexWebView(TemplateView):
    template_name = "web/inicio.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['portadas']=Chalet.objects.filter(chalet_portada=True)
        context['chalets']=Chalet.objects.exclude(chalet_portada=True)
        return context


class ChaletSingle(DetailView):
    template_name = "web/chalet-single.html"
    model = Chalet
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['chalet_related'] = Chalet.objects.filter(chalet_tag__in=self.object.chalet_tag.all())
        
        return context
    
# Create your views here.
