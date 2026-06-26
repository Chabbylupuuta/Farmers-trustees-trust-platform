-- PostgreSQL schema for membership + contact forms
-- Run this against your DATABASE_URL.

create table if not exists membership_accounts (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  email text not null unique,
  name text not null,
  username text not null,
  number text not null,
  address text not null,
  password_hash text not null,
  created_at timestamptz not null default now()
);

create index if not exists membership_accounts_category_idx
  on membership_accounts (category);

create table if not exists contact_messages (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text not null,
  location text not null,
  message text,
  created_at timestamptz not null default now()
);

