from flask_wtf import FlaskForm
from wtforms import StringField, TextField
from wtforms.validators import DataRequired, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def github_handle_exists(form, field):
    # Checking if github_handle is already in use
    github_handle = field.data
    user = User.query.filter(User.github_handle == github_handle).first()
    if user:
        raise ValidationError('github_handle is already in use.')


class SignUpForm(FlaskForm):
    github_handle = StringField(
        'github_handle', validators=[DataRequired(), github_handle_exists])
    email = StringField('email', validators=[DataRequired(), user_exists])
    password = StringField('password', validators=[DataRequired()])
    bio = TextField('bio', validators=[DataRequired()])
    linkedin = StringField('linkedin')
