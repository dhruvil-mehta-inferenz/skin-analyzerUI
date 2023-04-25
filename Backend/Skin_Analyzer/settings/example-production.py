from .base import *

SECRET_KEY = 'Its Secret!!'

DEBUG = True

ALLOWED_HOSTS = []

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'Skin-Analyzer',
        'USER': 'your-db-user',
        'PASSWORD': 'db-user-pwd',
        'HOST': 'localhost',
        'PORT': 5432
    }
}

