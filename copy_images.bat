@echo off
set SRC=C:\Users\kabir\.cursor\projects\c-Users-kabir-OneDrive-Desktop-New-folder-2-Drkps\assets
set DEST=public\images

if not exist %DEST% mkdir %DEST%
if not exist %DEST%\doctors mkdir %DEST%\doctors
if not exist %DEST%\clinic mkdir %DEST%\clinic
if not exist %DEST%\gallery mkdir %DEST%\gallery

copy "%SRC%\gera-logo.png" "public\favicon.jpeg" /Y
copy "%SRC%\gera-clinic-exterior.png" "%DEST%\clinic\clinic-building.jpg" /Y
copy "%SRC%\gera-clinic-exterior.png" "%DEST%\hero.png" /Y
copy "%SRC%\gera-clinic-interior.png" "%DEST%\about.png" /Y
copy "%SRC%\dr-rajesh-gera.png" "%DEST%\doctors\dr-rajesh-gera.png" /Y
copy "%SRC%\gera-clinic-interior.png" "%DEST%\gallery\consultation.png" /Y
copy "%SRC%\gera-clinic-exterior.png" "%DEST%\gallery\exterior.png" /Y

echo Dr. Gera clinic images copied successfully!
