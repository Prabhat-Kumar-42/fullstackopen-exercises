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

  return (
    <div>
      <h2>create a new anecdote</h2>
      <form onSubmit={handleSubmit}>
        <div>
          content
          <input {...content} />
        </div>
        <div>
          author
          <input {...author} />
        </div>
        <div>
          url for more info
          <input {...info} />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
