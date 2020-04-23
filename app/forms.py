from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired, ValidationError
from app.models import Word


class AddWordForm(FlaskForm):
    word = StringField('Skriv ord', validators=[DataRequired()])
    submit = SubmitField('Lägg till')
    
    def validate_word(self, word):
        word = Word.query.filter_by(word=word.data).first()
        if word is not None:
            raise ValidationError('Ordet finns redan i databasen.')
            

            
