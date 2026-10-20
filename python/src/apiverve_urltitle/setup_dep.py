from setuptools import setup, find_packages

setup(
    name='apiverve_urltitle',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='URL Title fetches the HTML title tag of any web page in real time from a target URL. Paid plans also retrieve an array of every H1 heading tag found on the page.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/urltitle?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
