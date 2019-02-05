# -*- coding: utf-8 -*-
"""
Created on Tue Feb  5 05:51:38 2019

@author: amar.lad
"""

from flask import Flask

app = Flask(__name__)

@app.route("/")

def index():
    return "Hello, World"

@app.route("/<string:name>")

def hello(name):
    return "Hello, {}".format(name)
