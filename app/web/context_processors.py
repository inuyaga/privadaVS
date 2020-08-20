from app.web.models import RedSocial, Chalet
def load_red_socials(request):
    rs=RedSocial.objects.all()
    items={ 
        'redes_sociales':rs
    }
    return items

def load_last_chalet(request):
    chalets=Chalet.objects.all().order_by('-chalet_creado')[:6]
    items={ 
        'chalets_lasts':chalets
    }
    return items