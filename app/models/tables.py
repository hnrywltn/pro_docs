from .db import db

class Table(db.Model):
  __tablename__= 'tables'

  id = db.Column(db.Integer, primary_key=True)
  project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)
  datatype_id = db.Column(db.Integer, db.ForeignKey('datatypes.id'), nullable=False)
  name = db.Column(db.String(50), nullable=False)
  datatype_spec = db.Column(db.Integer, nullable=True)
  null = db.Column(db.Boolean, nullable=False)
  relationship = db.Column(db.String(50), nullable=True)















  def to_dict(self):
    return dict(
      id=self.id,
      project_id=self.project_id,
      datatype_id=self.datatype_id,
      name=self.name,
      datatype_spec=self.datatype_spec,
      null=self.null,
      relationship=self.relationship
    )
