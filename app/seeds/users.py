from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        github_handle='Demo', email='demo@aa.io', password='password', linkedin='https://thispersondoesnotexist.com/', bio='I\'ve been a software engineer for over 10 years, and I love to build web applications. I love to learn new things, and I\'m always looking for a challenge. I\'m also a big fan of learning about the world and trying to understand it. I love to learn about the human mind and how we think and feel.')
    marnie = User(
        github_handle='marnie', email='marnie@aa.io', password='password', linkedin='https://thispersondoesnotexist.com/', bio='I\'ve been a software engineer for over 10 years, and I love to build web applications. I love to learn new things, and I\'m always looking for a challenge. I\'m also a big fan of learning about the world and trying to understand it. I love to learn about the human mind and how we think and feel.')
    bobbie = User(
        github_handle='bobbie', email='bobbie@aa.io', password='password', linkedin='https://thispersondoesnotexist.com/', bio='I\'ve been a software engineer for over 10 years, and I love to build web applications. I love to learn new things, and I\'m always looking for a challenge. I\'m also a big fan of learning about the world and trying to understand it. I love to learn about the human mind and how we think and feel.')


    db.session.add(demo)
    db.session.add(marnie)
    db.session.add(bobbie)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
