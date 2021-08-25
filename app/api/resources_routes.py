from flask import Blueprint, request
from app.models import Resource, db
# from app.forms import ResourceForm


resources_routes = Blueprint('resources', __name__)

@resources_routes.route('/', methods=['GET', 'POST'])
def resource():
    if request.method == 'GET':
        resources = Resource.query.all()
        return {'resources': [resource.to_dict() for resource in resources]}
    elif request.method == 'POST':
        resource = Resource(request.form['name'])
        db.session.add(resource)
        db.session.commit()
        return resource
    else:
        return 'Method not allowed'

# @resources_routes.route('/resources/<int:id>', methods=['GET', 'PUT', 'DELETE'])
