# 🌐 TaskFlow - Render API (AOI)

This repository hosts the backend service (API) for the Task Management application, specifically configured for seamless deployment and scaling on Render.

## 📋 Features

* **RESTful Architecture:** Clear and predictable URL structures for Task and User resources.
* **Security:** Integrated CORS configuration to manage cross-origin requests.
* **Database Integration:** Optimized connection pooling for MongoDB/PostgreSQL.
* **Automated Deployment:** Includes `render.yaml` for Infrastructure-as-Code (IaC) setups.

## 🛠 Tech Stack

* **Runtime:** Node.js / Express
* **Database:** MongoDB Atlas
* **Hosting:** Render.com
* **CI/CD:** GitHub Actions

## 🔗 Environment Variables

To run this API, you will need to add the following variables to your `.env` file or Render dashboard:

* `PORT`
* `DATABASE_URL`
