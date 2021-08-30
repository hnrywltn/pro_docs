from flask import Blueprint, request
from app.models import Project, db, projects


projects_routes = Blueprint('projects', __name__)

@projects_routes.route('/', methods=['GET', 'POST'])
def project():
  if request.method == 'GET':
    projects =  Project.query.all()
    return {'projects': [project.to_dict() for project in projects]}
  elif request.method == 'POST':
    project = Project(
      user_id=request.json['user_id'],
      resources_array=request.json['resources_array'],
      tech_array=request.json['tech_array'],
      wireframing_array=request.json['wireframing_array'],
      description=request.json['description'],
      github_link=request.json['github_link'],
      complete=False
    )
    db.session.add(project)
    db.session.commit()
    return {**project.to_dict()}
  else:
    return 'Method not allowed'
