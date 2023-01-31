import React, { useContext } from "react";
import { AiContext } from "../../contexts/AiContext";
import Footer from "../Shared/Footer";
const ProductDescription = () => {
  const {
    setProductInput,
    productOutput,
    getProductDescription,
    isLoading,
    setIsLoading,
  } = useContext(AiContext);

  const handleChange = () => {
    const updatedinput = document.getElementById("product-input")?.value;
    console.log(updatedinput);
    setProductInput(updatedinput);
  };

  const handleClick = () => {
    setIsLoading(true);
    getProductDescription();
  };

  return (
    <div className="flex flex-col h-screen justify-between gap-4 p-4">
      <section className="flex flex-col gap-4 mb-0 pb-0">
        <h1 className="text-xl font-bold text-center bg-gray-200 p-4">
          <span>
            <i className="fa-solid fa-icons"></i>
          </span>
          --Product Description--
          <span>
            <i className="fa-solid fa-icons"></i>
          </span>
        </h1>
        <hr />
        <div className="flex gap-2">
          <input
            className="p-2 w-full rounded-sm border-solid border-2 border-gray-300"
            placeholder="enter product name and specifications"
            onChange={handleChange}
            name="product-input"
            id="product-input"
          ></input>
          <button
            className={`btn rounded-sm  px-4 ${
              isLoading ? "bg-slate-700" : "bg-gray-400"
            }`}
            onClick={handleClick}
          >
            <p>
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>
              {isLoading ? (
                <span> Generating Product Description </span>
              ) : (
                <span> Generate </span>
              )}
              <span>
                <i className="fa-solid fa-gear"></i>
              </span>
            </p>
          </button>
        </div>
        <div>
          <p className="font-bold text-xl text-center py-2">
            <i className="fa-solid fa-arrow-down"></i>
          </p>
        </div>
        <textarea
          className="p-2 rounded-md border-solid border-2 border-gray-300"
          placeholder="right sentenses will appear here!"
          defaultValue={productOutput}
          cols="10"
          rows="10"
        ></textarea>
      </section>
      <Footer></Footer>
    </div>
  );
};

export default ProductDescription;
