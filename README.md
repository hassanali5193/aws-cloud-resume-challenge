# AWS Cloud Resume Challenge – Hassan Ali

This project is my submission for the [AWS Cloud Resume Challenge](https://cloudresumechallenge.dev/). It's a fully functional resume website hosted entirely on AWS services, designed to showcase my cloud and DevOps skills.

## Features

- Static resume website built with HTML, CSS, and JavaScript
- Hosted on Amazon S3 with public access via HTTPS
- CloudFront used as CDN for performance and SSL
- Route 53 configured with a custom domain
- Visitor counter using:
  - Amazon API Gateway (REST)
  - AWS Lambda (Python)
  - Amazon DynamoDB
- CI/CD Pipeline via GitHub Actions for automatic deployments

## AWS Services Used

- S3 – static site hosting
- CloudFront – CDN + HTTPS
- Route 53 – domain management (via IONOS for domain purchase)
- DynamoDB – to store visitor count
- Lambda – backend function for counter
- API Gateway – exposes Lambda as a REST API
- IAM – for roles and permissions
- GitHub Actions – CI/CD for deploying frontend and backend changes

## Deployment Instructions

1. Update your frontend HTML/CSS/JS code.
2. Commit and push to `main` branch.
3. GitHub Actions deploys updated code to S3 automatically.
4. Backend code (Lambda/API) updates also go through GitHub Actions.

## What I Learned

- Hands-on with AWS core services
- Serverless backend architecture
- Writing and deploying Lambda functions
- Managing permissions with IAM
- Automating deployments using GitHub Actions
- DNS management and SSL setup with Route 53 and CloudFront

This challenge helped solidify my understanding of cloud architecture and DevOps practices. All code is in this repo. Open to feedback or suggestions.
