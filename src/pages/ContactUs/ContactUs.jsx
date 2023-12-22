const ContactUs = () => {
  return (
    <div>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row gap-6">
          <img
            src="https://i.ibb.co/SVCyTYR/contact-us.jpg"
            className="w-[500px]"
          />
          <div>
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered lg:w-[500px] w-[350px]"
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered "
              />
            </label>
            <label className="form-control">
              <div className="label">
                <span className="label-text">Your Message</span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Bio"
              ></textarea>
            </label>
            <button className="mt-4 btn bg-[#d88531] text-white">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
