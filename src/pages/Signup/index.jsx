import React, { useState } from "react";
import { useSignup } from "./hooks/useSignup";

const Signup = () => {
    const [nome, setNome] = useState("");
    const { signup } = useSignup();
    const data = {
        name: nome,
    }

    return (
        <form onSubmit={signup(data)}>
            <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </form>
    );
};

export default Signup;
