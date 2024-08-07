import useField from "../../hooks/useField";

const AnecdoteForm = ({ addNew, handleNotification }) => {
  const content = useField("content", "text");
  const author = useField("author", "text");
  const info = useField("info", "text");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNew({
      content: content.value,
      author: author.value,
      info: info.value,
      votes: 0,
    });
    const notificationMessage = `new anecdote '${content.value}' has been created`;
    handleNotification(notificationMessage);
  };

  const handleClearForm = (event) => {
    event.preventDefault();
    content.clearField();
    author.clearField();
    info.clearField();
  };

  const filterAttributes = ({ clearField, ...rest }) => rest;

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...filterAttributes(content)} />
        </div>
        <div>
          author
          <input {...filterAttributes(author)} />
        </div>
        <div>
          url for more info
          <input {...filterAttributes(info)} />
        </div>
        <button type="submit">create</button>
        <button type="reset" onClick={handleClearForm}>
          reset
        </button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
