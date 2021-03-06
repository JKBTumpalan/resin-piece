import { CategoryList } from "../components/category-list/CategoryList";
import bookmark from "../assets/bookmark_1.jpeg";
import letters from "../assets/letter_1.jpeg";
import coasters from "../assets/coaster1.jpeg";
import combs from "../assets/comb1.jpeg";
import bundle from "../assets/black_bundle.jpeg";

export const Home = () => {
  const categories = [
    {
      id: 1,
      title: "Letters",
      imageUrl: letters,
      route: "shop/letters",
    },
    {
      id: 2,
      title: "Bookmarks",
      imageUrl: bookmark,
      route: "shop/bookmarks",
    },
    {
      id: 3,
      title: "Coasters",
      imageUrl: coasters,
      route: "shop/coasters",
    },
    {
      id: 4,
      title: "Combs",
      imageUrl: combs,
      route: "shop/combs",
    },
    {
      id: 5,
      title: "Customized",
      imageUrl: bundle,
      route: "shop/bundle",
    },
  ];

  return (
    <div>
      <CategoryList categories={categories} />
    </div>
  );
};
