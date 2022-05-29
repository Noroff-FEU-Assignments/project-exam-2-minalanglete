export default function LoginForm() {
  return (
    <form className="login">
      <div className="container-message"></div>
      <div>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <button type="submit">Logon</button>
    </form>
  );
}
