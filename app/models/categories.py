from .db import db

class Category(db.Model):
  __tablename__= 'categories'

  id = db.Column(db.Integer, primary_key=True)
  cat = db.Column(db.String(50), nullable=False)








  def to_dict(self):
    return dict(
      id=self.id,
      cat=self.cat
    )
