===========
cognito-hfs
===========

This is a reverse engineering of the JavaScript SDK for AWS cognito-idp for python.


Quickstart
----------

#. Install JavaScript requirements::

   $ npm install


#. Install Python requirements::

   $ mkvirtualenv cognito-hfs
   $ pip install -r requirements.txt


#. Build JavaScript functions::

   $ npm run build


#. Run a Built JS function::

   $ node build.js <function_name>
