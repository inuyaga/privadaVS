from django.contrib import admin
from app.web.models import Blog

from tinymce.widgets import TinyMCE
from django import forms


class BlogForms(forms.ModelForm):
    blog_contenido = forms.CharField(widget=TinyMCE(attrs={'cols': 80, 'rows': 30}))
    class Meta:
        model = Blog
        fields = ('__all__')

class BlogConfig(admin.ModelAdmin):
    form = BlogForms
# Register your models here.
admin.site.register(Blog, BlogConfig)