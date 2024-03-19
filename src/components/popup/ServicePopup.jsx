const ServicePopup = ({ data, open, close }) => {


  return (

    <div className={`dizme_tm_modalbox ${open ? "opened" : ""}`}>
      <div className="box_inner">
        <div className="close">
          <a href="#" onClick={() => close()}>
            <i className="icon-cancel" />
          </a>
        </div>
        {data && (
          <div className="description_wrap">
            <div className="service_popup_informations">
              <div className="image">
                <img src="img/thumbs/4-2.jpg" alt="image" />
                <div
                  className="main"
                  data-img-url={data && data?.image?.url}
                  style={{ backgroundImage: `url(${data?.image?.url})` }}
                />
              </div>
              <div className="main_title">
                <h3>{data && data.name ? data.name : "Title"}</h3>
                <span className="price">
                  Starts from <span>{data && data.charge}</span>
                </span>
              </div>
              <div className="descriptions">
                {data && data.desc}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default ServicePopup;
