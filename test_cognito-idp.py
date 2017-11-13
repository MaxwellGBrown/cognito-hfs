import subprocess

import pytest


@pytest.fixture(scope="session", autouse=True)
def build_webpack():
    """ npm build """
    subprocess.run(["npm", "build"])


@pytest.fixture(scope="session")
def run_build(build_webpack):
    """ node build.js <function_name> """

    def _run_build(*args):
        response = subprocess.check_output(["node", "build.js", *args])
        return response.decode('utf-8').strip('\n')

    return _run_build


def test_hello_world(run_build):
    output = run_build("helloWorld")
    assert output == "Hello World"
