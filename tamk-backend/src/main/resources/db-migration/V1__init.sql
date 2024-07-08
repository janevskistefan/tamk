create table categories
(
    id        serial primary key,
    name      text not null,
    image_url text not null default ''
);

create table vendors
(
    id       serial primary key,
    name     text not null,
    slogan   text,
    logo_url text NOT NULL
);


create table products
(
    id          serial primary key,
    name        text not null,
    description text,
    category_id bigint references categories,
    image_url   text not null default ''
);

create table stock
(
    id          serial primary key,
    product_id  bigint references products,
    vendor_id   bigint references vendors,
    price       bigint not null,
    listing_url text   not null
);