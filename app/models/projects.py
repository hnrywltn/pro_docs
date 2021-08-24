from .db import db

class Project(db.Model):
  __tablename__= 'projects'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  resources_array = db.Column(db.Text, nullable=True)
  tech_array = db.Column(db.Text, nullable=True)
  wireframing_array = db.Column(db.Text, nullable=True)
  description = db.Column(db.Text, nullable=False)
  github_link = db.Column(db.String(100), nullable=True)
  complete = db.Column(db.Boolean, default=False)








  def to_dict(self):
    return dict(
      id=self.id,
      user_id=self.user_id,
      resources_array=self.resources_array,
      tech_array=self.tech_array,
      wireframing_array=self.wireframing_array,
      description=self.description,
      github_link=self.github_link,
      complete=self.complete
    )
