import './catagories.style.scss'

const App = () => {
  const catagories = [
    {
      id: 1,
      titile: "Hats",
    },
    {
      id: 2,
      titile: "Jackets",
    },
    {
      id: 3,
      titile: "Sneakers",
    },
    {
      id: 4,
      titile: "Womens",
    },
    {
      id: 5,
      titile: "Mens",
    },
  ];

  return (
    <div className="categories-container">
      {catagories.map((catagory) => (
        <div className="category-container">
          {/* <img /> */}
          <div key={catagory.id} className="category-body-container">
            <h2>{catagory.titile}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
