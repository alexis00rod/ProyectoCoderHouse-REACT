

export const ItemDetail = ({detail}) => {
    
    return (
        <>
            <div className="itemDetail">
                <div className="itemDetail__body">
                    <img src={`../assets/img/${detail.img}`} alt={detail.name} />
                    <div className="itemDetail__header-main">
                        <h2>{detail.name}</h2>
                        <h3>${detail.price}</h3>
                        <h4>{detail.category}<span>{detail.type}</span></h4>
                        <p>{detail.description}</p>
                    </div>  
                </div>
                <iframe width="560" height="315" src={detail.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </>
    )  
  }