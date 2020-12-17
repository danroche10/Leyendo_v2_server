**see Leyendo_v2_client for frontend**

Production version: https://cocky-easley-edf596.netlify.app/ 

This is the backend of Leyendo v2, a improved version of v1. Leyendo aims to provide readers with access to the best writing across the internet. Authenticated users are able to like and comment on pieces that they enjoy.

**A few notes on the v2:**

- The database is built from scratch using MongoDB and hosted using Atlas. There are now three collections. Firstly, there is the 'essays' collection which contains details of each essay + comments and likes for each essay. Second is the
authors collection which contains details of each author inc link to image. Thirdly, the 'users' collection contains user details including an encrypted password.

- I learnt GraphQL for v2 and it was a great decision. I enjoy working with it and find it clean and intuitive (there are still challengings aspects to it). It will become increasingly beneficial as my database grows in size and performance becomes more important.

- I used Apollo for server. Similarly to GraphQL, I enjoyed using it but there were challenges to overcome.

**Plans for v3 backend**

- Join 'essays' and 'authors' collection

- Build out 'users' collection as required by new feautures.

- Increase size of essays collection
