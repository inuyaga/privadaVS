from django.db import models
from django.utils.safestring import mark_safe


class Tag(models.Model):
    tag_nombre = models.CharField(verbose_name="Nombre", max_length=50, unique=True)
    def __str__(self):
        return self.tag_nombre


class Galeria(models.Model):
    g_clave=models.CharField(verbose_name="Clave", help_text="Nombre de la imagen", max_length=300)
    g_imagen = models.ImageField(verbose_name="Imagen", upload_to='Galeria/')
    def __str__(self):
        return self.g_clave
    def preview(self):
        return mark_safe("""<a href="{}"><img src="{}"  style="border: gray 3px solid; width: 100px; height: 80px;"></a>""".format(self.g_imagen.url, self.g_imagen.url))        


TIPO=((1, 'Casa'), (2, 'Departamento'))
class Chalet(models.Model):
    chalet_id=models.AutoField(primary_key=True)
    chalet_titulo =models.CharField('Titulo', max_length=250)
    chalet_descripcion =models.CharField('Descripcion', max_length=500)
    chalet_contenido=models.TextField('Contenido', blank=True, null=True)
    chalet_imagen = models.ImageField('Imagen', upload_to='img_blogs/')
    chalet_creado=models.DateTimeField('Creado en', auto_now_add=True)
    chalet_ultima_actualizacion=models.DateTimeField('Ultima Actualizacion', auto_now=True)
    chalet_portada=models.BooleanField("Portada",default=False, help_text="Utilizar como portada en pagina principal")
    chalet_tipo=models.IntegerField(verbose_name="Tipo de chalet", choices=TIPO, default=1, help_text="Elija la opcion correspondiente")
    chalet_galeria=models.ManyToManyField(Galeria,verbose_name="Galeria", help_text="Imagenes adicionales", blank=True)
    chalet_costo=models.FloatField(verbose_name="Precio/Costo")
    chalet_no_recamara=models.IntegerField(verbose_name="Recamaras", help_text="Escriba la cantidad de este elemento")
    chalet_no_cocina=models.IntegerField(verbose_name="Cocina", help_text="Escriba la cantidad de este elemento")
    chalet_no_bano=models.IntegerField(verbose_name="Baño", help_text="Escriba la cantidad de este elemento")
    chalet_no_estacionamiento=models.IntegerField(verbose_name="Estacionamiento", help_text="Escriba la cantidad de este elemento")
    chalet_amueblado=models.BooleanField(verbose_name="Amueblado", default=False, help_text="Escriba la cantidad de este elemento")
    Chalet_ubucacion=models.TextField(verbose_name="Ubicación", help_text="Inserte el IFRAME de la ubicacion ya sea de Google Maps o Apple Maps")
    chalet_tag=models.ManyToManyField(Tag, verbose_name="Tags relacionados")
    # chalet_user_add=models.ForeignKey(Usuario, on_delete=models.CASCADE)
    def __str__(self):
        return self.chalet_titulo


RED_SOCIAL=(
    ('fa fa-facebook', 'Facebook'),
    ('fa fa-twitter', 'Twitter'),
    ('fa fa-tumblr', 'Tumbler'),
    ('fa fa-google-plus', 'Google'),
    ('fa fa-instagram', 'Instagram'),
    ('fa fa-linkedin', 'Linkedin'),
)
class RedSocial(models.Model):
    rs_tipo=models.CharField(verbose_name="Tipo de red social", max_length=1000, choices=RED_SOCIAL)
    rs_url=models.URLField(verbose_name="URL a redireccionar")
    def __str__(self):
        return self.get_rs_tipo_display()
