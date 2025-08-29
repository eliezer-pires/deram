import { useEffect, useState } from "react";

export default function Gerencial() {
    const [materiais, setMateriais] = useState([]);

    useEffect(() => {
        fetch("http://backend:8000/materials")
            .then(res => res.json())
            .then(data => setMateriais(data));
    }, []);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Gerenciar Materiais</h1>
            <ul className="space-y-2">
                {materiais.map(m => (
                    <li key={m.id} className="border p-2 rounded">{m.nome} - {m.localizacao}</li>
                ))}
            </ul>
        </div>
    );
}
