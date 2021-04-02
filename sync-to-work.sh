cp -R src/components/SmallTextInput src/components/HTMLEditor src/components/PrivateImageEditInput src/components/RichEditInput src/components/HTMLEditor ~/githome/skynet-react-framework/src/components/ 
cp -R src/components/SmallTextInput src/components/PrivateImageEditInput src/components/RichEditInput src/components/HTMLEditor ~/githome/teachain-biz-suite/bizui/src/components/

filePath=`pwd`

cd ~/githome/skynet-react-framework/

git add -A .
git commit -m "Sync with dev work"
git push

cd ${filePath}


