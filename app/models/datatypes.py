from .db import db

class DataType(db.Model):
  __tablename__= 'datatypes'

  id = db.Column(db.Integer, primary_key=True)
  type = db.Column(db.Text, nullable=False)









  def to_dict(self):
    return dict(
      id=self.id,
      type=self.type,
    )
