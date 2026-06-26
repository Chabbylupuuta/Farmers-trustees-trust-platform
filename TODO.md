# TODO

- [ ] Add PostgreSQL persistence for student membership forms (register/login/check)
  - [ ] Add DB dependencies (pg, bcryptjs)
  - [ ] Add env vars and DB connection utility
  - [ ] Create migration/schema for membership accounts
  - [ ] Replace src/app/api/membership/_store.ts file-based store with Postgres implementation
  - [ ] Update register route to hash passwords with bcrypt
  - [ ] Update login route to verify password hashes
  - [ ] Update membership check route to query DB
  - [ ] Add basic error handling for DB failures
  - [ ] Run lint/build

