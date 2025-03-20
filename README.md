# My photo reel

## Gallery

> Production ready

Incredibly basic photo gallery, just the way I like it.

### Stack

- Nextjs
- Tailwindcss
- Cloudinary

### Environment variables

```sh
CLOUDINARY_API_KEY="API_KEY_NAME"
CLOUDINARY_API_SECRET="API_KEY_SECRET"
CLOUDINARY_COLLECTION_ENDPOINT="https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/resources/search"
CLOUDINARY_NAME="YOUR_CLOUD_NAME"
```

## Digital Asset Management

A platform where I can efficiently share the photo session assets with my clients

### Features

- [x] Supabase authentication by email + password
- [ ] Administration dashboard 
  - [ ] User managemnet
    - [ ] Create
    - [x] Read
    - [ ] Update
    - [ ] Delete
  - [ ] Photo sessions
    - [ ] Create
    - [x] Read
      - [x] Get Object from S3
        - [x] Pre-sign URL
    - [ ] Update
      - [ ] Add photos
      - [ ] Assign users
      - [ ] Edit metadata
    - [ ] Delete
- [x] Client dashboard
  - [ ] Photo sessions
    - [ ] Read
    - [ ] Update (limited)
      - [ ] Flag
        - [ ] Approved
        - [ ] Rejected
        - [ ] Need edit

### Stack

- Supabase
- S3 + IAM

### Database schema overview

https://drawsql.app/teams/aaanh/diagrams/photo-dam

### AWS Setup

1. Create a new S3 bucket for storage
   - Name it an indentifiable/recognizable name. E.g. your-aws-account-name-photo-dam-some-random-identifiers
   - Disable public access. E.g. you can only get objects with a pre-signed URL generate at runtime
2. Create a new user for S3 operations
3. Assign the user these permissions (create new customer managed policy if needed):
  - ListBucket
  - GetObject
  - PutObject
  - DeleteObject
4. Scope the permissions to the previous created S3 bucket

### Environment variables

```sh
DATABASE_URL="SUPABASE_POSTGRES_URL"
SUPABASE_SERVICE_KEY="SUPABASE_DATABASE_SERVICE_KEY"

NEXT_PUBLIC_SUPABASE_ANON_KEY="SUPABASE_ANON_KEY"
NEXT_PUBLIC_SUPABASE_URL="SUPABASE_PUBLIC_URL"

AWS_ACCESS_KEY_ID=""
AWS_SECRET_ACCESS_KEY=""
AWS_REGION=mars-south-69
S3_BUCKET_NAME=CASE_SENSITIVE_BUCKET_NAME
S3_BUCKET_URL=CASE_SENSITIVE_BUCKET_URL
```