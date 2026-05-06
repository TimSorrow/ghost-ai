# Feature 04: Database and Projects

We need to set up the relational database using Prisma and PostgreSQL to store project metadata, access controls, and artifact references. 

## Requirements

- Install and configure Prisma.
- Define the database schema for Projects, Collaborators, Specs, and Task Runs.
- Create database seed/utility scripts if necessary.
- Build server actions or API routes for creating and listing projects.
- Update the `ProjectSidebar` to fetch and display the user's projects.

## Schema Details (Proposed)

- **Project**: 
  - `id`: unique identifier
  - `name`: string
  - `ownerId`: string (Clerk user ID)
  - `canvasJsonPath`: string (optional, URL to Vercel Blob)
  - Timestamps (`createdAt`, `updatedAt`)
- **ProjectCollaborator**:
  - Links a `Project` to a `userId` (Clerk user ID)
  - Used to determine who can access/edit a project alongside the owner.
- **Spec**:
  - `id`: unique identifier
  - `projectId`: relation to Project
  - `name`: string
  - `filePath`: string (URL to Vercel Blob)
  - Timestamps
- **TaskRun**:
  - `id`: unique identifier
  - `projectId`: relation to Project
  - `type`: enum/string (`DESIGN_GENERATION`, `SPEC_GENERATION`)
  - `status`: enum/string (`PENDING`, `SUCCESS`, `FAILED`)
  - Timestamps

## Technical Tasks

- [ ] Initialize Prisma (`npx prisma init`).
- [ ] Define models in `prisma/schema.prisma`.
- [ ] Set up Neon/Supabase/local Postgres connection string in `.env.local`.
- [ ] Run initial migration (`npx prisma migrate dev`).
- [ ] Create a Prisma client singleton in `lib/prisma.ts`.
- [ ] Create Server Actions for creating a new project and listing projects.
- [ ] Integrate Server Actions into `ProjectSidebar` and the "New Project" button.

## Check when done
- [ ] `prisma/schema.prisma` accurately reflects the architecture context.
- [ ] Prisma client is accessible at `lib/prisma.ts`.
- [ ] `ProjectSidebar` successfully loads projects from the database.
- [ ] Users can create a new project.
