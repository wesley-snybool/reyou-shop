import { CategoriesQueryOptionsType, Category } from "@framework/types";
import http from "@framework/utils/http";
import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from "react-query";

export const fetchPrinciples = async ({ queryKey }: any) => {
	const [_key, _params] = queryKey;
	const {
		data: { data },
	} = await http.get(API_ENDPOINTS.PRINCIPLES);
	return { categories: { data: data as Category[] } };
};
export const usePrinciplesQuery = (options: CategoriesQueryOptionsType) => {
	return useQuery<{ categories: { data: Category[] } }, Error>(
		[API_ENDPOINTS.PRINCIPLES, options],
		fetchPrinciples
	);
};
