export const Addtask = ({ handleSubmit }) => {
  return (
    <>
      <form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          placeholder="Write Your Task Here"
          required
          maxLength={30}
        />
        <button className="accept-input">Add</button>
      </form>
    </>
  );
};
