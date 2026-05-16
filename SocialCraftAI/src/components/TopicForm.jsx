export default function TopicForm({
  topic,
  setTopic,
  loading,
  error,
  inputRef,
  onSubmit,
}) {
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className={`input-wrap ${error ? 'input-wrap--error' : ''}`}>
        <input
          ref={inputRef}
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter a topic — e.g. Artificial Intelligence..."
          disabled={loading}
          className="input"
        />
      </div>
      {error && <p className="error-msg">{error}</p>}
      <button type="submit" disabled={loading} className="generate-btn">
        {loading ? (
          <>
            <span className="spinner" />
            Generating…
          </>
        ) : (
          <>Generate Content</>
        )}
      </button>
    </form>
  );
}
