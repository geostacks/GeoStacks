let
  jupyter = import (builtins.fetchGit {
    url = https://github.com/espg/jupyterWith;
    #rev = "40da086b59dc6683daaceb2dceadad55d43c4396";
    rev = "6cea42308c0d2e8d0ab1b502ab8cf44e70266e07";
  }) {};

  iPython = jupyter.kernels.iPythonWith {
    name = "python";
    packages = p: with p; [ 
      numpy
      pip
      wheel
      #geopandas
      matplotlib
      pandas
      pandocfilters
      tornado
      pyrsistent
      boto3
      (dask.override { withExtraComplete = true; })
      scikitlearn
      rasterio ];
  };

  jupyterEnvironment =
    jupyter.jupyterlabWith {
      extraPackages = p: [
        p.gcc p.pybind11 p.wget p.libjpeg p.openjpeg p.nodejs
        p.pandoc ];
      kernels = [ iPython ];
      extraJupyterPath = pkgs:
        "./_build/lib/python3.8/site-packages";
      ## The generated directory goes here
      directory = ./jupyterlab;
    };

in
  jupyterEnvironment.env 

