from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField


class AddWordForm(FlaskForm):
    addword = StringField('Skriv ord')
    submit = SubmitField('Lägg till')