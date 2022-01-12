import logoImg from "../../assets/logo.svg";

export function Header() {
  return (
    <header>
      <img src={logoImg} alt="dt money" />
      <button type="submit">Nova transação</button>
    </header>
  );
}
