import { Collection } from "./Collection";
import React, { useEffect, useState } from "react";
import "./Photos.scss";
import { Modal } from "../Modal/Modal";
import { CollectionModal } from "./CollectionModal";

const cats = [
  { name: "Все" },
  { name: "Море" },
  { name: "Горы" },
  { name: "Архитектура" },
  { name: "Города" },
];
export const Photos = () => {
  const [categoryId, setCategoryId] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  // const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [collections, setCollections] = useState([]);
  const [collectionsOne, setCollectionsOne] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    const category = categoryId ? `category=${categoryId}` : "";
    // const pageParam = `page${page}`;

    fetch(`https://63d2ef314abff8883415c381.mockapi.io/Collection?${category}`)
      .then((res) => res.json())
      .then((json) => {
        setCollections(json);
      })
      .catch((err) => {
        console.warn(err);
        alert("Ошибка при получении данных");
      })
      .finally(() => setIsLoading(false));
  }, [categoryId]);

  // const click = (obj) => {
  //   categoryId(obj);
  // };
  // console.log(click);

  return (
    <div className="Photos">
      <h1>Моя коллекция фотографий</h1>
      <div className="top">
        <ul className="tags">
          {cats.map((obj, i) => (
            <li
              onClick={() => setCategoryId(i)}
              className={categoryId === i ? "active" : ""}
              key={obj.name}
            >
              {obj.name}
            </li>
          ))}
        </ul>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          className="search-input"
          placeholder="Поиск по названию"
        />
      </div>
      <div
        // onClick={(e) => setCollectionsOne(e)}
        className="content"
      >
        {isLoading ? (
          <h2>Идёт загрузка...</h2>
        ) : (
          collections
            .filter((obj) => {
              return obj.name.toLowerCase().includes(searchValue.toLowerCase());
            })
            .map((obj, index) => (
              <Collection key={index} name={obj.name} images={obj.photos} />
            ))
        )}
      </div>
      <Modal open={collectionsOne} setOpen={setCollectionsOne} children>
        {/*// <CollectionModal key={i} name={obj.name} image={obj.photos} />*/}
        <div>
          {collections.map((obj, index) => (
            <CollectionModal value={index} key={index} image={obj.photos} />
          ))}
        </div>
      </Modal>
      {/*<ul className="pagination">*/}
      {/*  {[...Array(5)].map((obj, i) => (*/}
      {/*    <li*/}
      {/*      onClick={() => setPage(i + 1)}*/}
      {/*      className={page === i + 1 ? "active" : ""}*/}
      {/*    >*/}
      {/*      {i + 1}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
};
