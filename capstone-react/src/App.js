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
    <div className="catagories-container">
      {catagories.map((catagory) => (
        <div className="catagory-container">
          {/* <img /> */}
          <div id={catagory.id} className="categoty-body-container">
            <h2>{catagory.titile}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
