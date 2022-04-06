// 포켓몬 상세 페이지
import React from "react";
import { useParams } from "react-router-dom";

type Params = {
  id: string;
};

const DetailPage: React.FC = () => {
  const { id } = useParams<Params>();
  return <div>detail {id}</div>;
};

export default DetailPage;
