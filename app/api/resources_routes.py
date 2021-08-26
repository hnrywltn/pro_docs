from flask import Blueprint, request
from app.models import Resource, db, resources
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



@resources_routes.route('/<int:id>', methods=['PUT'])
def update_resource(id):
    data = request.json
    resource = Resource.query.get(id)
    print("OOOOOOOOOOOOOOOO_AHHHHHHHHHHHHHH!! OK", data)
    resource.name = data['name']
    resource.description = data['description']
    resource.ref_link = data['ref_link']
    db.session.commit()
    return {**resource.to_dict()}
