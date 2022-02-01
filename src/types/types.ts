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
    },
    action: {
        internal: boolean;
        title: string;
        url: string;
    }
};