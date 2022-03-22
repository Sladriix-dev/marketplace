import { useParams } from "react-router-dom";

export default function Product() {
  let params = useParams();
  return <h2>{params.productId}</h2>;
}