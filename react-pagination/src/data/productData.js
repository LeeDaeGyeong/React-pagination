const productArr = ["옷", "마이크", "핸드폰", "신발"];

const productData = (count) =>
  Array(count)
    .fill()
    .map((_, index) => ({
      id: index + 1,
      product: productArr[Math.floor(Math.random() * productArr.length)],
    }));

export default productData;
