from app import db


class Word(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    word = db.Column(db.String(64), index=True, unique=True)
    
    def __repr__(self):
        return '<Word> {}'.format(self.word)