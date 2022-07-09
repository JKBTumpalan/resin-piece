import "./category_item.styles.scss";

export const CategoryItem = ({ category }: any) => {
  const { imageUrl, title } = category;

  return (
    <div className="category-container">
      <img src={imageUrl} className="background-image" alt="product" />
      <div className="category-body-container">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
