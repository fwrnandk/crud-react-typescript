import { useState } from "react"

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEntrar = () => {

    }

    return (
        <div>
            <form>
                <label>
                    <span>Email</span>
                    <input value={email} onChange={e => setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha</span>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
                </label>

                <button type="button" onClick={handleEntrar}>
                    Entrar
                </button>
            </form>
        </div>
    );
}