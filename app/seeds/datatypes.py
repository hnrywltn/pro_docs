from app.models import db, DataType

def seed_dataTypes():


  b= DataType(type="boolean")
  s= DataType(type="varchar")
  text= DataType(type="text")
  i= DataType(type="integer")
  f= DataType(type="float")
  d= DataType(type="date")
  dec= DataType(type="decimal")
  j= DataType(type="json")
  email= DataType(type="email")
  password= DataType(type="password")

  db.session.add(b)
  db.session.add(s)
  db.session.add(i)
  db.session.add(f)
  db.session.add(d)
  db.session.add(dec)
  db.session.add(j)
  db.session.add(email)
  db.session.add(password)
  db.session.add(text)

  db.session.commit()




def undo_dataTypes():
    db.session.execute('TRUNCATE datatypes RESTART IDENTITY CASCADE;')
    db.session.commit()
