import { useRouter } from 'next/router';
import Layout from "@components/layout/layout";


export default function PostBrands() {
  const { query } = useRouter();
  return (
    <div>{query.uid}</div>
  )
};

PostBrands.Layout = Layout;

