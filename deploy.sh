# sh deploy.sh

npm run build
npm run generate
aws s3 sync ./dist s3://juandesign-web/ --delete --profile juandesign-cli
