

const Services = () => {
  return (
    <div className="mt-12">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-8 italic">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* 1st Car */}
        <div className="card glass">
          <figure>
            <img
              className="w-full h-72"
              src="https://i.ibb.co/c6V3xXB/s-1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
          <h2 className="card-title">Sports Car</h2>
            <p>The sports car is a stylish and fast toy vehicle that captures the essence of speed and performance. Its sleek design and vibrant colors make it stand out. Kids can pretend to race it on tracks or take it on exciting adventures with their imagination.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      {/* 2nd Car */}
        <div className="card glass">
          <figure>
            <img
            className="w-full h-72"
              src="https://i.ibb.co/wMj9CZK/t-1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Truck</h2>
            <p>The toy truck is a sturdy vehicle designed for heavy-duty play. It features a cargo bed that can be filled with small objects, and its wheels are designed to handle rough terrain. Kids can load up the truck and transport their cargo to different destinations.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      {/* 3rd Car */}
        <div className="card glass">
          <figure>
            <img
            className="w-full h-72"
              src="https://i.ibb.co/McdKsCX/p-1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Police Car</h2>
            <p>The police car is a fast and sleek toy vehicle used for law enforcement missions. It is equipped with flashing lights and sirens for a realistic play experience. Kids can imagine chasing down criminals and maintaining law and order with this exciting toy.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      {/* 4th Car */}
        <div className="card glass">
          <figure>
            <img
            className="w-full h-72"
              src="https://i.ibb.co/HKXjv5x/r-1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Regular Car</h2>
            <p>The regular car is a classic toy vehicle that resembles a real-life car. It is perfect for everyday play and can be used for various scenarios and imaginative play. Kids can create their own stories and use the regular car for transportation or family outings.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      {/* 5th Car */}
        <div className="card glass">
          <figure>
            <img
            className="w-full h-72"
              src="https://i.ibb.co/rQ8fSKm/ft-1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Mini Fire Truck</h2>
            <p>The mini fire truck is a compact toy vehicle inspired by firefighting vehicles. It features a ladder, water hose, and other fire-fighting accessories. Kids can role-play as firefighters and respond to imaginary emergencies, putting out fires and saving the day.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      {/* 6th Car */}
        <div className="card glass">
          <figure>
            <img
            className="w-full h-72"
              src="https://i.ibb.co/7K7CRsy/b-1.jpg"
              alt="car!"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Bus</h2>
            <p>The toy bus is a large, yellow vehicle with wheels that move. It has seating for many passengers and big windows for them to look out. Kids can imagine picking up and dropping off passengers on their own little adventures.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">See More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
