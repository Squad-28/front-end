export function Header(onOpenNewUserModal) {
  return (
    <div>
      <button type="button" onClick={onOpenNewUserModal}>
        Novo Usuário
      </button>
    </div>
  );
}
