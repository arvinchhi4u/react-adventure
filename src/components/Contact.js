const Contact = () => {
  return (
    <div className="m-20">
      <h1 className="my-4 text-xl font-bold">Contact Us</h1>
      <p className="italic">This is React Adventure!!!</p>
      <form>
        <input type="text" className="m-2 p-2 border border-black" placeholder="Name" />
        <input type="text" className="m-2 p-2 border border-black" placeholder="Message" />
        <button className="m-2 p-2 border border-black bg-gray-200 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
