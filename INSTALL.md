## Installation (nix)

The included default.nix derivation will build an environment to execute the
iPython notebook and dependencies. If you already have nix, just run
"nix-shell" from the directory with default.nix.

If you don't have nix in your path, installation instructions are here*:

https://nixos.org/download.html

*because we can't have nice things, MacOS (Catalina) restricted all access to the root directory, so nix can't install to /nix. You can create an APFS volume that mounts at /nix. See instructions here:

https://dev.to/louy2/installing-nix-on-macos-catalina-2acb

## Post install dependencies

There are two libraries that need to be installed manually by pip from within the nix-shell. The first is pyhdf, which is needed to open the MODIS files; it can be installed with:

`pip install git+https://github.com/espg/pyhdf.git`

The other library is pyorbital, which can similarly be installed with:

`pip install git+https://github.com/espg/pyorbital.git`

Note that both of these libraries are forked from the mainline repos and modified to work (pyhdf has a naming convention problem with the build libraries, and pyorbital is feature behind in terms of being able to parse TLE archives).

