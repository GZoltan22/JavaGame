from flask import Flask, render_template, request, redirect, url_for, session
import bcrypt

app = Flask(__name__)

chosen_hero = None

@app.route('/')
def main():
    return render_template('menü.html')

@app.route('/game_easy/<int:id>')
def game_easy(id=None):
    global chosen_hero
    if id == 1 :
        hero = "../static/css/magicguy.gif"
        chosen_hero = hero
        return render_template('index.html',character=hero)
    elif id == 2 :
        chosen_hero = "../static/css/sorcerer.gif"
        return render_template('index.html',character="../static/css/sorcerer.gif")
    elif id == 3 :
        chosen_hero = "../static/css/necromancer.gif"
        return render_template('index.html',character="../static/css/necromancer.gif")
    else:
        chosen_hero = "../static/css/paladin.gif"
        return render_template('index.html',character="../static/css/paladin.gif")
    return render_template('index.html')

@app.route('/game_medium')
def level_2():
    global chosen_hero
    return render_template('level2.html', character=chosen_hero)

@app.route('/final_level')
def final_stage():
    global chosen_hero
    return render_template('finale.html', character=chosen_hero)

@app.route('/choose-character')
def character():
    return render_template('character.html')


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )
