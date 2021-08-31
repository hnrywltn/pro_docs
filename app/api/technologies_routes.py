from flask import Blueprint, request
from app.models import Technology, db


technologies_routes = Blueprint('technologies', __name__)

@technologies_routes.route('/', methods=['GET'])
def get_technologies():
    technologies = Technology.query.all()
    return {'technologies': [technology.to_dict() for technology in technologies]}
