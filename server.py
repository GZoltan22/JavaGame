from flask import Flask, render_template, request, redirect, url_for, session
import bcrypt

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('menü.html')

@app.route('/game_easy/<int:id>')
def game_easy(id=None):
    if id == 1 :
        hero = "../static/css/magicguy.gif"
        return render_template('index.html',character=hero)
    elif id == 2 :
        return render_template('index.html',character="../static/css/sorcerer.gif")
    elif id == 3 :
        return render_template('index.html',character="../static/css/necromancer.gif")
    else:
        return render_template('index.html',character="../static/css/paladin.gif")
    return render_template('index.html')

@app.route('/choose-character')
def character():
    return render_template('character.html')


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )
