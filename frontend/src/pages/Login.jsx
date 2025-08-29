export default function Login() {
  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-r from-green-200 to-green-400">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mb-4">Login</h1>
        <form className="flex flex-col gap-3">
          <input className="border p-2 rounded" type="text" placeholder="Usuário" />
          <input className="border p-2 rounded" type="password" placeholder="Senha" />
          <button className="bg-green-500 hover:bg-green-600 text-white p-2 rounded">Entrar</button>
        </form>
      </div>
    </div>
  );
}
