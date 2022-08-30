import { QueryKey } from "react-query";

export type CollectionsQueryOptionsType = {
  text?: string;
  collection?: string;
  status?: string;
  limit?: number;
};
export type ConceitosQueryOptionsType = {
  name?: string;
  thumbnail?: string;
  limit?: number;
}
export type CategoriesQueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type ProductsQueryOptionsType = {
  type: string;
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};
export type QueryOptionsType = {
  text?: string;
  category?: string;
  status?: string;
  limit?: number;
};

export type QueryParamsType = {
  queryKey: QueryKey;
  pageParam?: string;
};
export type Attachment = {
  id: string | number;
  thumbnail: string;
  original: string;
};
export type Conceitos = {
  id: string | number;
  name: string,
  thumbnail: string;


}
export type Category = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Collection = {
  id: number | string;
  name: string;
  slug: string;
  details?: string;
  image?: Attachment;
  icon?: string;
  products?: Product[];
  productCount?: number;
};
export type Brand = {
  id?: number | string;
  name?: string;
  slug?: string;
  image?: Attachment;
  background_image?: any;
  [key: string]: unknown;
  title?: string;
};

export type AtachmentReyou = {
  desktop: {
    url: string;
    width: number;
    height: number;
  };
  mobile: {
    url: string;
    width: number;
    height: number;
  }
};

export type BrandReyou = {
  uid?: number | string;
  image: AtachmentReyou;
  background_image?: any;
  [key: string]: unknown;
  title?: string;
  action: {
    title: string;
    url: string;
    internal: boolean;
  };

};
export type Tag = {
  id: string | number;
  name: string;
  slug: string;
};
export type Product = {
  uid?: number | string;
  imageThumb: {
    url: string;
  }
  imageMedium: {
    url: string;
  }
  name?: string;
  tags: string;
  productName?: string;
  slug?: string;
  price: number;
  quantity?: number;
  sale_price?: number;
  image: {
    thumbnail: string;
    [key: string]: unknown;
  };
  sku?: string;
  gallery?: Attachment[];
  category?: Category;
  tag?: Tag[];
  meta?: any[];
  description?: string;
  variations?: object;
  shortDescription?: string;
  stateProduct?: string;
  state: string;
  brand?: Brand;
  manufacturer?: string;
  discount?: string;
  size: {
    uid: string,
    order: number,
    code: string,
    name: string,
  }
};
export type OrderItem = {
  id: number | string;
  name: string;
  price: number;
  quantity: number;
};
export type Order = {
  id: string | number;
  name: string;
  slug: string;
  products: OrderItem[];
  total: number;
  tracking_number: string;
  customer: {
    id: number;
    email: string;
  };
  shipping_fee: number;
  payment_gateway: string;
};


export type TypeBannerHome = {
  title: string;
  urls: {
    full: string;
    raw: string;
    regular: string;
    small: string;
    small_s3: string;
  };
  id: string;
  description: string;
}