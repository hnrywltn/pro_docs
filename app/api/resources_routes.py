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
        resource = Resource(
            name=request.json['name'],
            description=request.json['description'],
            ref_link=request.json['ref_link'],
            user_id=request.json['user_id'],
            cat_id=request.json['cat_id']
        )
        db.session.add(resource)
        db.session.commit()
        return {**resource.to_dict()}
    else:
        return 'Method not allowed'



@resources_routes.route('/<int:id>', methods=['PUT'])
def update_resource(id):
    data = request.json
    resource = Resource.query.get(id)
    resource.name = data['name']
    resource.description = data['description']
    resource.ref_link = data['ref_link']
    db.session.commit()
    return {**resource.to_dict()}



@resources_routes.route('/<int:id>', methods=['DELETE'])
def delete_resource(id):
    print("OOOOOOOOOOOOOOOO_AHHHHHHHHHHHHHH!! OK", id)
    resource = Resource.query.get(id)
    db.session.delete(resource)
    db.session.commit()
    return {'message': id}
