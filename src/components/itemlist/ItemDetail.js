import ItemDetailContainer from "./Itemdetailcontainer";

const ItemDetail = ({ id, title, description, price, image }) => {
  return (
    <>
      <div class="card" style={{ width: "18rem" }}>
        <img src={image} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">
            {id}-{title}
          </h5>
          <p class="card-text">{description}</p>
          <p class="card-text">{price}</p>
          <a href="#" class="btn btn-primary">
            Add to cart
          </a>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
