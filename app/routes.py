from app import app, db
from flask import render_template, url_for, redirect, flash
from app.forms import AddWordForm
from app.models import Word
from random import randint


@app.route('/')
@app.route('/index', methods=['GET'])
def index():
    return render_template('index.html', title="Start")


@app.route('/game', methods=['GET', 'POST'])
def game():
    
    #lägger alla ord i databasen i en lista   
    dbword = Word.query.all()
    #slumpar ett nummer mellan 1 och listans längd
    wordnumber = randint(1, len(dbword))   
    #tar ut det ord som motsvarar randomiserade siffran
    word = dbword[wordnumber]
    
    return render_template('game.html', title="Hänga Gubbe", word=word)


@app.route('/addword', methods=['GET', 'POST'])
def addword():
    
    form = AddWordForm()
    
    if form.validate_on_submit():
        #lägg till ord  DB
        print('Validated')
        
        word = Word(word=form.word.data)
        db.session.add(word)
        db.session.commit()
        flash('Ordet har lagts till')
        
        return redirect(url_for('index'))
    
    return render_template('addword.html', title="Lägg till ord", form=form)
    