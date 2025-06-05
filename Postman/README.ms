1 - download folder here: https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdl9SMUhOc2FBRGdfQndxeXFsQVB3RVBYQm5kP2U9UVRnMUJv&cid=E000686C73D4D1FF&id=E000686C73D4D1FF%2115900&parId=E000686C73D4D1FF%2115803&o=OneUp

2 - go to the vs code 

3 - create a folder called 'Postman"

4 - under the folder import below files:
        01-Course.postman_collection.json
        COURSE.postman_environment.json

----------------------------

// install postman to k6 converter

    Developer acively using Postman
    You can directly take Postman collection and env variables fom devlopment team
    Use converter to autogenerate k6 Scripts
    Fix K6 scripts to satisfy your requirements

1 - lets install
    npm install -g postman-to-k6

2 - go inside the folder_Postman on your desktop
    right click -> Open Git Bash Here

3 - run this command
    postman-to-k6 01-Course.postman_collection.json -e COURSE.postman_environment.json -o script.js

4 - now you can see script.js file & 3rd party postman to k6 libraries(libs) are automatically generated

----------------------------

# setup project to test

1 - install moodlewindowsinstaller: https://onedrive.live.com/?id=E000686C73D4D1FF%2115900&resid=E000686C73D4D1FF%2115900&e=QTg1Bo&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdl9SMUhOc2FBRGdfQndxeXFsQVB3RVBYQm5kP2U9UVRnMUJv&cid=e000686c73d4d1ff&v=validatepermission

2 - click 'start moodle' > run as admininstrator

3 - open terminal > press 1

4 - then you can see the moodle is started successfully

5 - go to credentials file inside the moodlewindowsinstaller folder

6 - copy the URL: http://127.0.0.1:83/my/ & paste it in the browser

note: you can see like this message: Fatal error: $CFG->dataroot is not configured properly, directory does not exist or is not accessible! Exiting.

so lets fix it first

----------------------------

1 - go to moodlewindowsinstaller -> server -> moodle -> configure

2 - copy the path directory

3 - open the notepad with configure file

4 - you can see the dataroot like below
        $CFG->dataroot  = 'D:\\Personal\\SetUp\\MoodleWindowsInstaller-latest\\server\\moodledata';

5 - we have to change the directory like below & SAVE
        $CFG->dataroot  = 'C:\\Users\\soori\\Downloads\\MoodleWindowsInstaller-latest\\MoodleWindowsInstaller-latest\\server\\moodledata';

6 - restart the moodle again 

7 - navigate to here again - http://127.0.0.1:83/my/

8 - login with admin credentials
        username: admin
        PW: Admin123!@#

----------------------------

now you are in the interface

1 - go admininstrator -> courses -> add a new course

2 - open devloper tool & inspect

----------------------------

lets execute the postman to k6 generated k6 scripts

1 - open terminal -> k6 run postman/script.js