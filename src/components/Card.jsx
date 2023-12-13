import React from 'react';

const Card = ({ isNew, title, src, desc_lists, price }) => {
  const list = desc_lists?.map((desc_list, i) => (
    <span key={i}>
      {desc_list} <br />
    </span>
  ));

  return (
    <div className="card" style={{ width: '15rem', margin: '.5rem .5rem', display: 'flex', flexDirection: 'column' }}>
      <div
        className="img-container"
        style={{ height: '256px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}
      >
        <img src={src} alt="Card example image" style={{ width: '100%' }} />
      </div>

      <div className="card-body" style={{ flexGrow: 1 }}>
        <h4 className="card-title">
          {isNew && (
            <>
              <span className="badge success">New!</span>
              <br />
            </>
          )}
          {title}
        </h4>
        <p className="card-text">{list}</p>
      </div>

      <div className="row" id="purchase" style={{ justifyContent: 'flex-start', marginLeft: "1rem" }}>
        <button className="" style={{ width: '100%' }}>
          <div className="row flex-middle flex-spaces" style={{ margin: '0 auto' }}>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2652/2652204.png "
              style={{ width: '36px', height: '36px' }}
              className=""
            />
            <div className="" style={{ marginLeft: '1rem' }}>
              ${price}
            </div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Card;
