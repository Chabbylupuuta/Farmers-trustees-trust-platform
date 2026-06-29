# Farmers-trustees-trust-platform — Backend Phase Plan

## Phase 1 — Foundation (Backend Architecture)
- [ ] Create Prisma schema (`prisma/schema.prisma`) with User + Role + UserStatus + profile tables (Farmer/Student/Employer/Trustee/Investor)
- [ ] Add Prisma client singleton (`src/lib/prisma.ts`)
- [ ] Add Auth.js (NextAuth) route (`src/app/api/auth/[...nextauth]/route.ts`) with Credentials provider + Prisma adapter
- [ ] Add Zod validation utilities (`src/lib/validation.ts`) and use for auth payloads
- [ ] Add env example / ensure required env vars for Prisma + NextAuth
- [ ] Generate Prisma client + run initial migration
- [ ] Run lint/build

## Phase 2 — User Management
- [ ] Replace /api/membership/register + /api/membership/login with auth-backed flows
- [ ] Profile management endpoints
- [ ] Email verification + password reset

## Phase 3+ — Business modules
- [ ] Agriculture domain
- [ ] TalentLink domain (jobs/candidates)
- [ ] Estate planning domain
- [ ] Membership & payments domain
- [ ] Administration + audit logs

