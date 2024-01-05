CREATE TABLE categories
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(255) NOT NULL,
    logo_url TEXT         NOT NULL
);

-- A vendor is an e-shop.
CREATE TABLE vendors
(
    id       SERIAL PRIMARY KEY,
    name     VARCHAR(255) NOT NULL,
    logo_url TEXT         NOT NULL
);

-- Each product is a unique listing.
CREATE TABLE products
(
    id          SERIAL PRIMARY KEY,
    name        TEXT NOT NULL,
    description TEXT NOT NULL,
    price       INT  NOT NULL,
    listing     TEXT NOT NULL UNIQUE,
    category_id INT  NOT NULL,
    image_url   TEXT NOT NULL,
    FOREIGN KEY (category_id) REFERENCES categories (id)
);

CREATE TABLE stock
(
    id         SERIAL PRIMARY KEY,
    product_id INT NOT NULL,
    vendor_id  INT NOT NULL,
    FOREIGN KEY (product_id) REFERENCES products (id),
    FOREIGN KEY (vendor_id) REFERENCES vendors (id)
);
