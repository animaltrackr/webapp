#!/bin/bash

 Install aws client
echo -e "\n\n\nInstalling aws client..."
brew install awscli

# Install pip files
echo -e "\n\n\nInstalling pip needs..."
pip install boto3
pip install requests

# Install npm UI needs
echo -e "\n\n\nInstalling UI-react elements via npm"
npm install --save google-map-react
npm install antd

echo -e "\n\n\n\n################\nTo finish, you'll need to configure aws (see here: https://supsystic.com/documentation/id-secret-access-key-amazon-s3/): \n\t1. aws configure, then \n\t2. python config.py"
