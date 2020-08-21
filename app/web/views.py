from django.shortcuts import render
from django.views.generic import TemplateView, DetailView, ListView
from app.web.models import Chalet, RedSocial
from django.db.models import Max, Min, Count
class IndexWebView(TemplateView):
    template_name = "web/inicio.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['portadas']=Chalet.objects.filter(chalet_portada=True)
        context['chalets']=Chalet.objects.exclude(chalet_portada=True)[:6]
        return context





class ChaletListView(ListView):
    template_name = "web/chalets-list.html"
    model = Chalet
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['max_price'] = Chalet.objects.all().aggregate(Max('chalet_costo'))       
        context['min_price'] = Chalet.objects.all().aggregate(Min('chalet_costo'))       
        return context
    def get_queryset(self):
        queryset = super().get_queryset()
        order_by_range_price = self.request.GET.get('order_by_range_price')
        order_by_mixed = self.request.GET.get('order_by_mixed')
        minimo = Chalet.objects.all().aggregate(Min('chalet_costo'))

        if order_by_mixed == 'max-min':
            queryset = queryset.order_by('-chalet_costo')            
        if order_by_mixed == 'min-max':
            queryset = queryset.order_by('chalet_costo')
        if order_by_mixed == 'newDate':
            queryset = queryset.order_by('-chalet_creado')
        if order_by_mixed == 'oldDate':
            queryset = queryset.order_by('chalet_creado')

        if order_by_range_price != None:
            queryset = queryset.filter(chalet_costo__range=[minimo['chalet_costo__min'], order_by_range_price])
        return queryset
    


class ChaletSingle(DetailView):
    template_name = "web/chalet-single.html"
    model = Chalet
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['chalet_related'] = Chalet.objects.values(
            'chalet_titulo',
            'chalet_descripcion',
            'chalet_imagen', conteo=Count('chalet_id')).filter(
                chalet_tag__in=self.object.chalet_tag.all()
                ).exclude(chalet_id=self.object.chalet_id).order_by('chalet_id')
        
        return context
