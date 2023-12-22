const Clients = () => {
  return (
    <div>
      <section>
        <h2 className="text-3xl text-center">Who Benefits from Our Website?</h2>

        <p className="text-center">
          Our platform is designed to cater to a diverse audience, offering
          valuable resources and tools that resonate with various professionals
          and enthusiasts. Whether you're a seasoned developer or a corporate
          professional, our website has something for everyone. Here's a
          breakdown of the types of individuals who can benefit from what we
          have to offer:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/g3rTWH9/developers.jpg"
                alt="Developers"
                className="h-[240px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Developers and Programmers</h2>
              <p>
                Explore the latest coding techniques, frameworks, and
                programming languages
              </p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/gFd1xzV/corporate.jpg"
                alt="Corporate"
                className="h-[240px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Corporate Professionals</h2>
              <p>
                Stay informed about industry trends, leadership strategies, and
                business insights.
              </p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/tsVfDqG/bank.jpg"
                alt="Banker"
                className="h-[240px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Bankers and Finance Professionals</h2>
              <p>
                Stay updated on financial market trends, regulations, and
                industry news.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clients;
