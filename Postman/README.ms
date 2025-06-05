1 - download folder here: https://onedrive.live.com/?redeem=aHR0cHM6Ly8xZHJ2Lm1zL3UvcyFBdl9SMUhOc2FBRGdfQndxeXFsQVB3RVBYQm5kP2U9UVRnMUJv&cid=E000686C73D4D1FF&id=E000686C73D4D1FF%2115900&parId=E000686C73D4D1FF%2115803&o=OneUp

2 - go to the vs code 

3 - create a folder called 'Postman"

4 - under the folder import below files:
        01-Course.postman_collection.json
        COURSE.postman_environment.json

----------------------------

// install postman to k6 converter

    Developer acively using Postman
    You can directly take Postman collection and env variables fom dev team
    Use converter to autogenerate k6 Scripts
    Fix K6 scripts to satisfy your requirements

1 - lets install
    npm install -g postman-to-k6

2 - go inside the folder_Postman on your desktop
    right click -> Open Git Bash Here

3 - run this command
    postman-to-k6 01-Course.postman_collection.json -e COURSE.postman_environment.json -o script.js

4 - now you can see script.js file & 3rd party postman to k6 libraries(libs) are automatically generated

5 - 


