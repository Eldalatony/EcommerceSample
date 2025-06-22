from flask import Blueprint, request, jsonify
from app import mysql
from app.utils.security import hash_password, verify_password
from flask_jwt_extended import (
    create_access_token,
    create_refresh_token,
    jwt_required,
    get_jwt_identity
)
from app.models.user_model import get_user_by_email_or_username, insert_user

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()
    username = data.get("username")
    email = data.get("email")
    password = data.get("password")

    if not username or not email or not password:
        return jsonify({"msg": "Missing fields"}), 400

    if get_user_by_email_or_username(email):
        return jsonify({"msg": "Email already exists"}), 400

    hashed = hash_password(password)
    insert_user(username, email, hashed)
    print(f"[REGISTER] User created: {email}")
    return jsonify({"msg": "User registered successfully"}), 201

@auth_bp.route("/login", methods=["POST"])
def login():
    data = request.get_json()
    identifier = data.get("identifier")
    password = data.get("password")

    if not identifier or not password:
        return jsonify({"msg": "Missing fields"}), 400

    user = get_user_by_email_or_username(identifier)
    if not user or not verify_password(password, user["password"]):
        print(f"[LOGIN FAILED] Invalid credentials: {identifier}")
        return jsonify({"msg": "Invalid credentials"}), 401

    access_token = create_access_token(identity=user["id"])
    refresh_token = create_refresh_token(identity=user["id"])
    print(f"[LOGIN SUCCESS] User logged in: {identifier}")
    return jsonify({
        "access_token": access_token,
        "refresh_token": refresh_token
    }), 200

@auth_bp.route("/me", methods=["GET"])
@jwt_required()
def me():
    user_id = get_jwt_identity()
    return jsonify({"msg": f"Hello, your user ID is {user_id}"}), 200

@auth_bp.route("/refresh", methods=["POST"])
@jwt_required(refresh=True)
def refresh():
    identity = get_jwt_identity()
    new_token = create_access_token(identity=identity)
    print(f"[TOKEN REFRESH] Issued new token for user {identity}")
    return jsonify({"access_token": new_token}), 200
