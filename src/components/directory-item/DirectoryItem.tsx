import { BackgroundImage, Body, Directory } from "./directory-item.styles.jsx";

export const DirectoryItem = ({ category }: any) => {
  const { imageUrl, title } = category;

  return (
    <Directory>
      <BackgroundImage
        src={imageUrl}
        className="background-image"
        alt="product"
      />
      <Body>
        <h2> {title} </h2>
        <p> Shop Now </p>
      </Body>
    </Directory>
  );
};
