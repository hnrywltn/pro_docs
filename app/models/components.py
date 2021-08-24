from .db import db

class Component(db.Model):
  __tablename__= 'components'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
  project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
  name = db.Column(db.String(50), nullable=False)
  description = db.Column(db.Text, nullable=False)
  complete = db.Column(db.Boolean, default=False)








  def to_dict(self):
    return dict(
      id=self.id,
      user_id=self.user_id,
      project_id=self.project_id,
      name=self.name,
      description=self.description,
      complete=self.complete
    )
