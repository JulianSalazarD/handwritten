from flask import Flask
from flask_cors import CORS

def create_app():
    app = Flask(__name__, 
                static_folder='../../frontend/static', 
                template_folder='../../frontend/templates')
    CORS(app)  # Esto permite las solicitudes desde el frontend

    from backend.app.routes import main
    app.register_blueprint(main)
    
    return app