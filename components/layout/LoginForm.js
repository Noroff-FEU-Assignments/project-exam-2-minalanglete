export default function () {
  return (
    <form className="login">
      <div>
        <label for="username">Username</label>
        <input type="text" id="username" name="username" required minlength="4" />
      </div>
      <div>
        <label for="password">Password</label>
        <input type="password" id="password" name="password" required minlength="4" />
      </div>
      <button type="submit">Logon</button>
    </form>
  );
}
