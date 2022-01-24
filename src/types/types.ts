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
    frt_priceMin?: number;
    frt_pricemax?: number;
    ftr_brand?: string[];

};

export type ConfigPortal = {
    data: {
        urlVideoInst: string;
        app: {
            showAppDownload: boolean;
        }
    }
};