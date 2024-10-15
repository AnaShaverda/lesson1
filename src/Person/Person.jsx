const Person = (props) => {
  return (
    <>
      <div>
        <p style={{ color: props.name === "Pikria" ? "green" : "red" }}>
          name : {props.name}
        </p>
        <p>isStudent :{props.isStudent}</p>
        <p>age :{props.age}</p>
      </div>
    </>
  );
};
export default Person;
