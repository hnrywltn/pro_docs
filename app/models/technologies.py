from .db import db

class Technology(db.Model):
  __tablename__ = 'technologies'

  id = db.Column(db.Integer, primary_key=True)
  cat_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
  name = db.Column(db.String(50), nullable=False)
  description = db.Column(db.Text, nullable=False)
  resource_id = db.Column(db.Integer, db.ForeignKey('resources.id'), nullable=True)
