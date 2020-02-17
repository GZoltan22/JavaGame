from flask import Flask, render_template, request, redirect, url_for, session
import bcrypt

app = Flask(__name__)


@app.route('/')
def main():
    return render_template('menü.html')

@app.route('/game_easy')
def game_easy():
    return render_template('index.html')


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8000,
        debug=True,
    )
