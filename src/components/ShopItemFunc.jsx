import Item from '../classes/Item';

const ShopItemFunc = () => {
  const item = new Item(
    'Tiger of Sweden',
    'Leonard coat',
    'Minimalistic coat in cotton-blend',
    'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
    399,
    '£'
  );

  if (item instanceof Item) {
    return (
      <div className="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div className="description">
          {item.descriptionFull}
        </div>
        <div className="highlight-window mobile"><div className="highlight-overlay"></div></div>
        <div className="divider"></div>
        <div className="purchase-info">
          <div className="price">{item.currency}{item.price.toFixed(2)}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    )
  }
};

export default ShopItemFunc;
