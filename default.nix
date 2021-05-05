{
  current ? import (builtins.fetchTarball {
             url = "https://github.com/NixOS/nixpkgs/archive/20.09.tar.gz";
             sha256 = "1wg61h4gndm3vcprdcg7rc4s1v3jkm5xd7lw8r2f67w502y94gcy";
             }) {}
}:

with current;

stdenv.mkDerivation rec {
  name = "env" ;
  env = buildEnv { name = name; paths = buildInputs; };
  buildInputs = [ git hdf4 gcc pybind11 wget libjpeg openjpeg
    (python38.buildEnv.override {
      ignoreCollisions = true;
      extraLibs = with python38Packages; [
        numpy
        scipy
        flake8
        matplotlib
        geopandas
        boto3
	    pip
        notebook
        cython
        pandas
        wheel
        seaborn
        gdal
        h5py
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
	    ipyleaflet
	    ipywidgets
      ];
     })
    ];

  shellHook = ''
            alias pip="PIP_PREFIX='$(pwd)/_build/pip_packages' \pip"
            export PYTHONPATH="$(pwd)/_build/pip_packages/lib/python3.8/site-packages:$PYTHONPATH"
            unset SOURCE_DATE_EPOCH'';}
