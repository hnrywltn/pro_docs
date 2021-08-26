from flask import Blueprint, request
from app.models import Category, db


categories_routes = Blueprint('categories', __name__)

@categories_routes.route('/', methods=['GET'])
def get_categories():
    categories = Category.query.all()
    return {'categories': [category.to_dict() for category in categories]}
