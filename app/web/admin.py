from django.contrib import admin
from app.web.models import *

from tinymce.widgets import TinyMCE
from django import forms


class ChaletForms(forms.ModelForm):
    chalet_contenido = forms.CharField(widget=TinyMCE(attrs={'cols': 80, 'rows': 30}))
    class Meta:
        model = Chalet
        fields = ('__all__')

class ChaletConfig(admin.ModelAdmin):
    form = ChaletForms
    raw_id_fields = ('chalet_galeria',)

class GaleriaConfig(admin.ModelAdmin):
    search_fields = ('g_clave',)
    list_display = ('id','g_clave', 'preview')

# Register your models here.
admin.site.register(Chalet, ChaletConfig)
admin.site.register(Galeria, GaleriaConfig)
admin.site.register(RedSocial)
admin.site.register(Tag)