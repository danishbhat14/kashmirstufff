const Shimmer = () => {
    return (
      <div className="restaurant-list" data-testid="shimmer">
        {Array(10)
          .fill("")
          .map((e, index) => (
            <div key={index} className="shimmer-card bg-slate-500"></div>
          ))}
      </div>
    );
  };
  
  export default Shimmer;