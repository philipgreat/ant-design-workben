
# Build for large projects
export NODE_OPTIONS=--max-old-space-size=10230
DEST_HOST=btapp@test.baotongcha.com
yarn build 
timeExpr=$(date +'%Y%m%dT%H%M')
ssh btapp@test.baotongcha.com "mkdir -p ~/resin-3.1.16/webapps/ROOT/adminxp${timeExpr}"
rsync -avz   dist/* ${DEST_HOST}:~/resin-3.1.16/webapps/ROOT/adminxp${timeExpr}/
echo "file has been uploaded to https://test.baotongcha.com:433/adminxp${timeExpr}/index.html"

