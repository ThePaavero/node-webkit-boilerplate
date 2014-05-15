@echo off
echo Creating ZIP...
pushd %CD%
7z a -tzip ..\package.zip .\* -mx0 -xr!node_modules
cd ..
del package.nw
ren package.zip package.nw
taskkill /f /im nw.exe
start package.nw
popd
echo Done...
