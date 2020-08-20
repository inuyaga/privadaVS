from django.shortcuts import render
from django.views.generic import TemplateView, DetailView, ListView
from app.web.models import Chalet, RedSocial
from django.db.models import Max, Min
class IndexWebView(TemplateView):
    template_name = "web/inicio.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['portadas']=Chalet.objects.filter(chalet_portada=True)
        context['chalets']=Chalet.objects.exclude(chalet_portada=True)[:6]
        return context


class ChaletSingle(DetailView):
    template_name = "web/chalet-single.html"
    model = Chalet
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['chalet_related'] = Chalet.objects.filter(chalet_tag__in=self.object.chalet_tag.all())
        
        return context


class ChaletListView(ListView):
    template_name = "web/chalets-list.html"
    model = Chalet
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['max_price'] = Chalet.objects.all().aggregate(Max('chalet_costo'))       
        context['min_price'] = Chalet.objects.all().aggregate(Min('chalet_costo'))       
        return context
    

