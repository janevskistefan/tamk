insert into tamk.products(name, description, category_id, image_url)
values ('Intel Core i9-14900K', 'Processor', (select id from tamk.categories where name = 'Processors'), ''),
       ('Intel Core i9-13900K', 'Processor', (select id from tamk.categories where name = 'Processors'), ''),
       ('NVidia RTX 3090Ti', 'Gpu', (select id from tamk.categories where name = 'Graphics Cards'), ''),
       ('Philips 24" 1080p IPS Monitor', 'Monitor', (select id from tamk.categories where name = 'Monitors'), '');

insert into tamk.stock(product_id, vendor_id, price, listing_url)
values ((select id from tamk.products where name = 'Intel Core i9-14900K'),
        (select id from tamk.vendors where name = 'Anhoch'), 1000, ''),
       ((select id from tamk.products where name = 'Intel Core i9-13900K'),
        (select id from tamk.vendors where name = 'Anhoch'), 999, ''),
       ((select id from tamk.products where name = 'NVidia RTX 3090Ti'),
        (select id from tamk.vendors where name = 'Anhoch'), 998, ''),
       ((select id from tamk.products where name = 'Philips 24" 1080p IPS Monitor'),
        (select id from tamk.vendors where name = 'Anhoch'), 997, ''),
       ((select id from tamk.products where name = 'Intel Core i9-14900K'),
        (select id from tamk.vendors where name = 'Setec'), 1000, ''),
       ((select id from tamk.products where name = 'Intel Core i9-14900K'),
        (select id from tamk.vendors where name = 'Neptun'), 1000, '');