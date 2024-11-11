export const LoginForm = () => {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const { login, password } = form.elements;

    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};
