# SelfStylo Skin Analyzer

_It is a standalone backend application for detecting various skin problems like acne, dark-circles etc._


### Technology

_Backend_

> - Python 3.9.16 
> - Django 4.0 
> - djangorestframework 3.14.0 
> - Postgres

_Machine Learning_
> - Tensorflow 2.12.0
> - keras = 2.12.0
> - scikit-learn = 1.2.2
> - OpenCV = 4.7.0
> - matplotlib = 3.7.1


### Project Set-Up

1. Clone the repository

    ``
        git clone url
    ``

2. Create Virtual environment

   ``
      virtualenv env
   ``
3. Install Dependencies 

    > kindly make sure your virtual environment is active.

     ``
        pip install -r requirements.tx  
     ``

4. Create local.py File

    > Kindly replace database details as per your local postgres setup. 

    ``
     copy content of example-production file to local.py file.
    ``


5. Run Migrations

    ``
    python manage.py migrate
    ``


6. Run Project

    ``
    python manage.py runserver
    ``

