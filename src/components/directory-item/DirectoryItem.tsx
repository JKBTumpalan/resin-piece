import { useNavigate } from "react-router-dom";
import { BackgroundImage, Body, Directory } from "./directory-item.styles.jsx";

export const DirectoryItem = ({ category }: any) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);
  return (
    <Directory onClick={onNavigateHandler}>
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
