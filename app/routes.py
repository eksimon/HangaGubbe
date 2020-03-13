from app import app
from flask import render_template, url_for, redirect
from app.forms import AddWordForm


@app.route('/')
@app.route('/index', methods=['GET'])
def index():
    return render_template('index.html', title="Start")


@app.route('/game', methods=['GET', 'POST'])
def game():
    
    #hämta slumpat ord från DB
    
    
    return render_template('game.html', title="Hänga Gubbe")


@app.route('/addword', methods=['GET', 'POST'])
def addword():
    
    form = AddWordForm()
    
    if form.validate_on_submit():
        #lägg till ord  DB
        word = Word(word=form.addword.data)
        db.session.add(word)
        db.session.commit()
        flash('Ordet har lagts till')
        
        return redirect(url_for('index'))
    
    return render_template('addword.html', title="Lägg till ord", form=form)
    