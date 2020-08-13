from django.db import models

class Blog(models.Model):
    blog_id=models.AutoField(primary_key=True)
    blog_titulo =models.CharField('Titulo', max_length=250)
    blog_descripcion =models.CharField('Descripcion', max_length=500)
    blog_contenido=models.TextField('Contenido', blank=True, null=True)
    blog_imagen = models.ImageField('Imagen Blog', upload_to='img_blogs/')
    blog_creado=models.DateTimeField('Creado en', auto_now_add=True)
    blog_ultima_actualizacion=models.DateTimeField('Ultima Actualizacion', auto_now=True)
    blog_portada=models.BooleanField("Portada",default=False, help_text="Utilizar como portada en pagina principal")
    # blog_pertenece=models.ForeignKey(Usuario, on_delete=models.CASCADE)
    def __str__(self):
        return self.blog_titulo
