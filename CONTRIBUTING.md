# Contributing

## Installation

Squiggles is built with [CMake](https://cmake.org/). A convenience script for creating the
CMake makefiles on a \*nix environment is included as `run_cmake_format.sh`.

The tests are built alongside the source binaries and depend on [GoogleTest](https://github.com/google/googletest).
GoogleTest is included in this project as a [Git Submodule](https://git-scm.com/book/en/v2/Git-Tools-Submodules) and needs to be
downloaded by running `git submodule init && git submodule update`.

The path visualizations are created with Python and [Matplotlib](https://matplotlib.org/). The
dependencies for the Python portion of the project are handled by [Poetry](https://python-poetry.org/).
Once you have Poetry installed you can install Squiggles' dependencies by running
`poetry install` in this directory. Then build the Squiggles source code and run
the visualization in the Poetry shell with `poetry run cdll`.
