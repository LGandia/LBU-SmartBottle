from flask import Flask, request, jsonify
from models import db, Profile

app = Flask(__name__)
app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///db.sqlite3"
db.init_app(app)

with app.app_context():
    db.create_all()

@app.route("/profile", methods=["POST"])
def save_profile():
    data = request.json
    profile = Profile(
        name=data.get("name"),
        gender=data.get("gender"),
        dob=data.get("dob"),
        height=data.get("height"),
        weight=data.get("weight"),
    )
    db.session.add(profile)
    db.session.commit()
    return jsonify({"status": "success", "message": "Profile saved"})