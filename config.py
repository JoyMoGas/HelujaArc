import secrets
import os

class Config:
    SECRET_KEY = os.environ.get('SECRET_KEY') or secrets.token_hex(32)
    
    # Configuración de Flask-Mail
    MAIL_SERVER = 'smtp.gmail.com'
    MAIL_PORT = 587
    MAIL_USE_TLS = True
    MAIL_USERNAME = 'mogasjose.5@gmail.com'
    MAIL_PASSWORD = 'suargzqcyzllomdl'
    MAIL_DEFAULT_SENDER = 'mogasjose.5@gmail.com'