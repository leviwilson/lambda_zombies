# Zombies!!

Welcome to the Zombie Apocalypse Survival: Building Serverless Microservices workshop. The following guide will help you spin up the AWS Lambda Signal Corps communications system to connect to the remaining survivors around the world.

## 1) CloudFormation Template

https://s3-us-west-2.amazonaws.com/reinvent-wrk305-2015/CreateZombieWorkshop.json

You will need your own AWS account to launch this application. If you don't have one, you can sign-up here.

You must launch the CloudFormation script in the US-West-2 (Oregon) region.

https://console.aws.amazon.com/cloudformation/home?region=us-west-2
Select 'Create Stack'
Choose the 'Specify an Amazon S3 template URL' option and use the following URL and press next
https://s3-us-west-2.amazonaws.com/reinvent-wrk305-2015/CreateZombieWorkshop.json
Name your stack
It's not necessary to adjust the advanced options
The CloudFormation template requires IAM roles for the creation of resources such a S3 bucket, API Gateway APIs and Lambda functions. These IAM roles will be deleted when you delete you stack.
Check the box next to 'I acknowledge that this template might cause AWS CloudFormation to create IAM resources.'
Create your stack - this will take a minute or two
Now check your stack's "Output" tab for the 'MyChatRoomURL' property which points to your static S3 site those hosts your Zombie chat room.

## 2) Challenges

You have the baseline group chat app in the CloudFormation script above. Now it's time to hack on this app and complete some challenges. Pick one or more or make up your own challenge!

Base Challenge

show typing indicator
Extra Credit Challenges

Channel with history view
SMS from your portable comms device to the chat
Send images in chat of zombies and environments
Chat bot for weapons caches and survivor camps using geospatial tagging
Zombie motion detection from shared motion sensor through SNS topic (see details below)
Make your own challenge!

## 3) Zombie Motion Sensor

The AWS Lambda Signal Corps has installed a motion sensor that detects Zombies across the world. You can consume these motion events off this SNS Topic:

arn:aws:sns:us-west-2:836601329801:ZombieMotionSensor

To subscribe to this sensor, you can create a Lambda function in your account and consume these SNS events.

Open Lambda console at https://us-west-2.console.aws.amazon.com/lambda
Create a new Lambda function
Select the 'sns-message' blueprint
Paste the ARN listed above into the 'SNS Topic' field Complete the wizard and you'll be subscribed!

## 4) API Gateway CloudWatch Logging

You may want to capture all API Gateway traffic in CloudWatch logs. You can enable this feature by following the directions provided in the API Gateway documentation.
