insert into tamk.vendor_category(vendor_id, category_id)
select (select id from tamk.vendors where name = 'Anhoch'),
       id
from tamk.categories;