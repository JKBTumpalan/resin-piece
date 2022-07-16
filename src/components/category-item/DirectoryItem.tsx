import "./directory-item.styles.scss";

export const DirectoryItem = ({ category }: any) => {
  const { imageUrl, title } = category;

  return (
    <div className="directory">
      <img src={imageUrl} className="background-image" alt="product" />
      <div className="body">
        <h2>{title}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};
