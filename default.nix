{
  current ? import (builtins.fetchTarball {
              url = "https://github.com/NixOS/nixpkgs/archive/ae1c8ede09b53007ba9b3c32f926c9c03547ae8b.tar.gz";
              sha256 = "1lpphn9dcf8vh8ia38f472i7cqggp3knpfa2jwlc6z5ldbvrw7ki";
             }) {}
}:

with current;

stdenv.mkDerivation rec {
  name = "env" ;
  env = buildEnv { name = name; paths = buildInputs; };
  buildInputs = [ git hdf4 gcc pybind11 wget libjpeg openjpeg conda
    (python38.buildEnv.override {
      ignoreCollisions = true;
      extraLibs = with python38Packages; [
        numpy
        scipy
        flake8
        matplotlib
        conda
        boto3
        intake
        (dask.override { withExtraComplete = true; })
	    pip
        notebook
        cython
        pandas
        wheel
        seaborn
        gdal
        h5py
        datashader
        netcdf4
	    shapely
	    pyproj
        lib
        env
	    numba
        flask
        joblib
        geos
        scikitlearn
        xarray
        six
	    time
	    pillow
	    gzip
	    setuptools
	    cycler
        rasterio
	    ipython
	    nbformat
	    ipywidgets
      ];
     })
    ];

  shellHook = ''
            alias pip="PIP_PREFIX='$(pwd)/_build/pip_packages' \pip"
            export PYTHONPATH="$(pwd)/_build/pip_packages/lib/python3.8/site-packages:$PYTHONPATH"
            unset SOURCE_DATE_EPOCH
            pip install ipyleaflet
            jupyter nbextension enable --py ipyleaflet
  '';}
