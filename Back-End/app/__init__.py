from flask import Flask
from flask_cors import CORS
from flask_jwt_extended import JWTManager
from flask_mysqldb import MySQL
from dotenv import load_dotenv
import os

mysql = MySQL()
jwt = JWTManager()

def create_app():
    load_dotenv()

    app = Flask(__name__)
    CORS(app)

    # Config
    app.config.from_object("config.Config")

    # Init extensions
    mysql.init_app(app)
    jwt.init_app(app)

    # Register routes
    from app.routes.auth_route import auth_bp
    app.register_blueprint(auth_bp, url_prefix="/auth")

    return app
