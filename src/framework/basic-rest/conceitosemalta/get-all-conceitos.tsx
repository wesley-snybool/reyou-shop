import { ConceitosQueryOptionsType, Conceitos } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchConceitos = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const {
		data: { data },
	} = await http.get(API_ENDPOINTS.Conceitosemalta);
	return { conceitos: { data: data as Conceitos[] } };
};
export const useCategoriesQuery = (options: ConceitosQueryOptionsType) => {
	return useQuery<{ categories: { data: Conceitos[] } }, Error>(
		[API_ENDPOINTS.Conceitosemalta, options],
        
	);
};
