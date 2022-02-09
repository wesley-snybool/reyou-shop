export type FilterTypes = {
    pc?: number;
    pps?: number;
    ssf?: number;
    sso?: number;
    ftr_state?: string[];
    ftr_size?: string;
    ftr_universe?: string[];
    ftr_typeItem?: string[];
    ftr_category?: string[];
    ftr_priceMin?: number;
    ftr_priceMax?: number;
    ftr_brand?: string;
    ftr_material: string;
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

export type Attachment = {
    id: string | number;
    thumbnail: string;
    original: string;
  };

export type ConfigPortal = {
    data: {
        urlVideoInst: string;
        app: {
            showAppDownload: boolean;
        }
    }
};

export type BrandsTypes = {
    isLoading: boolean;
    uid: string;
    tags: [];
    code: string;
    order: number;
    descriptiveText?: string;
    title: string;
    brandDescription: string
    image: {
        mobile: {
            url: string;
            width: number;
            height: number;
        },
        desktop: {
            url: string;
            width: number;
            height: number;
        }
        photoCover: {
          url: string;
        };
    },
    action: {
        internal: boolean;
        title: string;
        url: string;
    }
};

export type TypeProducts = {
    productname: string,
    id?: number | string;
    thumbnail?: string;
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
    meta?: any[];
    description?: string;
    variations?: object;
    shortDescription?: string;
    stateProduct?: string;
    state: string;
    brand?: Brand;
    manufacturer?: string;
    discount?: string;
    similar: {
        colors: [];
        discount?: number;
        favorite?: boolean;
        lastUpdate?: string;
        netPrice?: number;
        onlineSince?: string;
        percDiscount?: number;
        price?: number;
        productDescription?: string;
        productName?: string;
        purchaseInfo?: string;
        relatedTags?: [];
        shortDescription?: string;
        similar?: []
        size?: []
        sustainableValues?: []
        thumbnail?: string;
        uid?: string;
        urlSource?: string;
    }
}

export type TypeFecth = {
    data: TypeProducts[];
    isLoading: boolean;
    error: {
        error_status: boolean,
        error_message: string,
    },
}