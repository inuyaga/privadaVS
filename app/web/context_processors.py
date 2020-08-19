from app.web.models import RedSocial
def load_red_socials(request):
    rs=RedSocial.objects.all()
    items={ 
        'redes_sociales':rs
    }
    return items