import os
from start import SITE_ROOT

def _get_file(path, permissions):
    return open(os.path.join(SITE_ROOT, 'pages', path), permissions)

def save(path, page):
    with _get_file(path, 'w') as f:
        f.write(page)

def get(path):
    with _get_file(path, 'r') as f:
        return f.read()
