const SingleBill = ({ bill }) => {
  const { name, address, hospital, date, amount, image } = bill;
  return (
    <section className="bill">
      <h4>{name}</h4>
      <p>{address}</p>
      <p>{hospital}</p>
      <p>{date}</p>
      <p>${amount}</p>
      <img src={image} alt="medical bill" />
    </section>
  );
};

export default SingleBill;
