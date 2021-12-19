Prerequisite:
Docker desktop is installed and running in local.

Steps to run in docker:
1) Cmd on the folder in file explorer OR open command prompt and navigate to the path for the script folder.
2) Run the following command (given on the k6 page : https://k6.io/docs/getting-started/running-k6/)
$ docker run -i loadimpact/k6 run - <script.js

What this command will do?
a) It will search for the k6 image in your local machine, if image not found in local then will pull it from DockerHub
b) Will execute the script.js with 1 max VUs, 10m30s max duration

Here is the output:
![Alt text](https://github.com/ishnetcode/K6LoadTetsDotnet/blob/main/FirstTestWithDocker/img/SampleImage1.jpg)

3) You can add more VUs and custom duration via following command:
docker run -i loadimpact/k6 run --vus 10 --duration 30s - <script.js

Here is the output:
![Alt text](https://github.com/ishnetcode/K6LoadTetsDotnet/blob/main/FirstTestWithDocker/img/SampleImage2.jpg)

