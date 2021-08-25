from .db import db

class Resource(db.Model):
  __tablename__= 'resources'

  id = db.Column(db.Integer, primary_key=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
  cat_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
  name = db.Column(db.String(80), nullable=False)
  ref_link = db.Column(db.Text, nullable=False)
  description = db.Column(db.Text, nullable=False)








  def to_dict(self):
    return dict(
      id=self.id,
      user_id=self.user_id,
      cat_id=self.cat_id,
      ref_link=self.ref_link,
      description=self.description
    )
