import { Category } from './category';
import { Vendor } from './vendor';

export type CategoryVendor = {
  id: number;
  vendor: Vendor;
  category: Category;
};
