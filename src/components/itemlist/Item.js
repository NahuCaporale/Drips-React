const Item =({producto})=>{
    return(
        <>
        <div class="card" style={{width: '18rem'}}>
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{producto.categoria}</h5>
    <p class="card-text">{producto.modelo}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </>
    )
}
export default Item