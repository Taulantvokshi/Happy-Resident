With this project, I wanted to show the full capabilities of production level architecture and deployment. The virtual machine runs on Digital Ocean, I used a reverse proxy (NGINX) to handle load balancing, https traffic using lets-encrypt certificates, and also SSL termination that will enable superfast communication between servers. I configured NGINX to serve static files instead of the servers, by this measure servers have less load and become very manageable. The system is immune to Failovers if one node is down, users are served by other nodes. For CICD I’m using Jenkins and git, so the new integration, testings, and deployments are just one commit away.

Happyresident is a building management system that gives both the building owners and the tenants an easy way to manage,
organize and efficiently respond to their requests.
By implementing an easy to use dashboard, residents have access to a variety of services,
like reporting maintenance problems, paying the rent, check their rent status throughout time, etc.

Happy resident Report Dashboard offers tenants an easy way to report a faulty appliance just by clicking an icon or customize a special request. I implemented a priority queue on the backend so each tenant will be served on a priority level in order to minimize long waitings for essential appliances reparations.

Happyresident is a building management system that gives both the building owners and the tenants an easy way to manage,
organize and efficiently respond to their requests.
By implementing an easy to use dashboard, residents have access to a variety of services,
like reporting maintenance problems, paying the rent, check their rent status throughout time, etc.

Technologies used:
Backend: NodeJS, Nginx, DigitalOchean, Bash, Sequelize, Postgres AWS and Stripe
Frontend: Javascript, React, Redux, Sass, Html
Website : https://happy-resident.taulantvokshi.com
