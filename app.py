from flask import Flask, render_template, request, jsonify
import certifi

app = Flask(__name__)

from pymongo import MongoClient

client = MongoClient("mongodb+srv://test:sparta@cluster0.kfz2usy.mongodb.net/?retryWrites=true&w=majority",tlsCAFile=certifi.where())
db = client.sparta

@app.route('/')
def home():
  return render_template('index.html')

@app.route('/tmi')
def tmi():
  return render_template('tmi.html')
@app.route('/tmi/sung')
def sung():
  return render_template('sung.html')
@app.route('/tmi/bae')
def bae():
  return render_template('bae.html')

@app.route('/goal')
def goal():
  return render_template('goal.html')

@app.route('/guestbook')
def guestbook():
  return render_template('guestbookIndex.html')

@app.route("/guestbook/comments", methods=["POST"])
def guestbook_post():
  name_receive = request.form["name_give"]
  comment_receive = request.form["comment_give"]

  doc = {
    'name': name_receive,
    'comment': comment_receive
  }

  db.homework.insert_one(doc)
  return jsonify({'msg': '감사합니다!'})


@app.route("/guestbook/comments", methods=["GET"])
def guestbook_get():
  comment_list = list(db.homework.find({}, {'_id': False}))
  return jsonify({'comments': comment_list})


if __name__ == '__main__':
  app.run('0.0.0.0', port=8000, debug=True)
