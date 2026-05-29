@echo off
set SRC=C:\Users\kabir\.gemini\antigravity\brain\cf6a4ffc-5e48-4ef1-b5e3-99c0ae450635
set DEST=public\images

if not exist %DEST% mkdir %DEST%
if not exist %DEST%\doctors mkdir %DEST%\doctors
if not exist %DEST%\gallery mkdir %DEST%\gallery

copy "%SRC%\hero_hospital_exterior_1768671854814.png" "%DEST%\hero.png" /Y
copy "%SRC%\about_hospital_interior_1768671870793.png" "%DEST%\about.png" /Y
copy "%SRC%\doctor_male_1_1768671902435.png" "%DEST%\doctors\doctor1.png" /Y
copy "%SRC%\doctor_female_1_1768671916630.png" "%DEST%\doctors\doctor2.png" /Y
copy "%SRC%\doctor_male_2_1768671934243.png" "%DEST%\doctors\doctor3.png" /Y
copy "%SRC%\doctor_female_2_1768671949265.png" "%DEST%\doctors\doctor4.png" /Y
copy "%SRC%\doctor_male_3_1768671966376.png" "%DEST%\doctors\doctor5.png" /Y
copy "%SRC%\doctor_female_3_1768671984620.png" "%DEST%\doctors\doctor6.png" /Y
copy "%SRC%\gallery_reception_1768672005227.png" "%DEST%\gallery\reception.png" /Y
copy "%SRC%\gallery_ot_1768672019854.png" "%DEST%\gallery\ot.png" /Y
copy "%SRC%\gallery_room_1768672034703.png" "%DEST%\gallery\room.png" /Y
copy "%SRC%\gallery_icu_1768672048246.png" "%DEST%\gallery\icu.png" /Y
copy "%SRC%\gallery_lab_1768672066415.png" "%DEST%\gallery\lab.png" /Y
