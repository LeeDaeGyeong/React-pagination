import productData from "../data/productData";

export const paginationData = ({ perPage, curPage, dataCount }) => {
  const data = productData(dataCount);
  const result = data.slice(
    (curPage - 1) * perPage,
    (curPage - 1) * perPage + perPage
  );
};
