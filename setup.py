# A minimal setup.py file to make a Python project installable.

import setuptools
import yaml

with open("README.md", "r") as fh:
    long_description = fh.read()

with open("binder/environment.yml", "r") as fh:
    env = yaml.safe_load(fh)
requirements = env['dependencies']

setuptools.setup(
    name             = "geostacks",
    version          = "0.0.1",
    author           = "The GeoStacks Team",
    #author_email     = "me@myemail.com",
    description      = "A Python library for querying, stacking, masking, and slicing disparate geospatial data",
    long_description = long_description,
    long_description_content_type = "text/markdown",
    packages         = setuptools.find_packages(),
    classifiers       = [
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: BSD License",
        "Operating System :: OS Independent",
    ],
    python_requires  = '>= 3.7',
    install_requires = requirements,
)