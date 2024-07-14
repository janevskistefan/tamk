import {Category} from "@tamk-core/model/category";

export type Product = {
  id: number;
  name: string;
  description: string;
  category: Category;
  imageUrl: string;
}
