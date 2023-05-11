 

-- Create a table for posts
create table posts (
    id bigserial not null,
    slug text not null unique,
    "createdAt" timestamp with time zone default now() not null,
    "updatedAt" timestamp with time zone default now() null,
    title text null,
    content text null,
    "isPublished" boolean default false not null,
    "authorId" uuid not null,
    "parentId" bigint null references posts (id),
    live boolean default true null,
    "siteId" bigint default '1' ::bigint not null,
    "isPinned" boolean default false not null,
    "isDeleted" boolean default false not null,
    "isApproved" boolean default false not null,

    primary key (id),
    unique (slug)
);

alter table posts enable row level security;
