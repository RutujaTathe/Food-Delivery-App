const ContactUs = () => {
  return (
    <div>
      <h1 className="font-bold text-3xl p-4 m-4">
        Welcome to our contact us page:
      </h1>
      <form>
        <input
          type="text"
          className="m-4 p-4 border border-black "
          placeholder="Name"
        />
        <input
          type="text"
          className="m-4 p-4 border border-black "
          placeholder="Message"
        />
        <button
          type="submit"
          className="m-4 p-4 border border-black bg-blue-100 rounded-lg"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
