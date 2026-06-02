# Deploying DevSphere on Render Free Tier

This project should be deployed as two Render services:

- `devsphere-api`: Node/Express Web Service for the backend.
- `devsphere-web`: Static Site for the Vite React frontend.

The repo includes `render.yaml`, so you can deploy from Render Blueprints. You can also create both services manually from the Render dashboard.

## 1. Prepare MongoDB Atlas

Use MongoDB Atlas for the database because Render free web services do not include a persistent MongoDB service.

1. Create a MongoDB Atlas cluster.
2. Create a database user.
3. In Network Access, allow Render to connect. For a quick free-tier launch, use `0.0.0.0/0`; for production, restrict this later.
4. Copy your connection string.

Use a database-specific URI:

```text
mongodb+srv://USER:PASSWORD@CLUSTER.mongodb.net/devsphere?retryWrites=true&w=majority
```

## 2. Push the repo to GitHub

Render deploys from a Git repo. Commit your changes and push to GitHub before creating services.

## 3. Deploy with Render Blueprint

1. Open Render Dashboard.
2. Click `New` -> `Blueprint`.
3. Connect this GitHub repo.
4. Render will read `render.yaml` and create:
   - `devsphere-api`
   - `devsphere-web`
5. Fill the required environment variables marked as `sync: false`.

## 4. Backend environment variables

Set these on `devsphere-api`:

```text
NODE_ENV=production
HOST=0.0.0.0
MONGODB_URI=your_mongodb_atlas_uri
JWT_SECRET=generate_a_long_random_secret
FRONTEND_URL=https://devsphere-web.onrender.com
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
```

Do not set `PORT` manually unless Render asks for it. Render provides the port automatically.

## 5. Frontend environment variables

Set this on `devsphere-web`:

```text
VITE_API_URL=https://devsphere-api.onrender.com
```

After changing `VITE_API_URL`, redeploy the frontend because Vite bakes this value into the built files.

## 6. OAuth callback URLs

After the backend service is live, update your OAuth apps.

Google OAuth authorized redirect URI:

```text
https://devsphere-api.onrender.com/api/auth/google/callback
```

GitHub OAuth callback URL:

```text
https://devsphere-api.onrender.com/api/auth/github/callback
```

Also keep local callback URLs if you still want local development:

```text
http://localhost:5001/api/auth/google/callback
http://localhost:5001/api/auth/github/callback
```

## 7. Deploy order

1. Deploy backend first.
2. Copy the backend Render URL.
3. Put that URL into frontend `VITE_API_URL`.
4. Deploy frontend.
5. Copy the frontend Render URL.
6. Put that URL into backend `FRONTEND_URL`.
7. Redeploy backend once.
8. Update Google/GitHub OAuth callback URLs.

## 8. Health checks

Backend health check:

```text
https://devsphere-api.onrender.com/health
```

Expected response:

```json
{
  "status": "ok"
}
```

## 9. Free-tier notes

- Render free web services can sleep after inactivity, so the first backend request can be slow.
- Static frontend hosting is the right fit for the Vite app.
- MongoDB Atlas should be external.
- Jitsi video calls are external, so your Render backend is not carrying the video stream.

