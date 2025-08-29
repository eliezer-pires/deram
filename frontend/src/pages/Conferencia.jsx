import { useEffect, useRef } from "react";

export default function Conferencia() {
    const videoRef = useRef(null);

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                if (videoRef.current) videoRef.current.srcObject = stream;
            })
            .catch(err => console.error("Erro ao acessar a câmera", err));
    }, []);

    return (
        <div className="flex flex-col items-center mt-10">
            <h2 className="text-xl font-bold mb-4">Conferência de Materiais</h2>
            <video ref={videoRef} autoPlay className="border rounded w-80"></video>
            <p className="mt-4">Aponte para o QR Code do material</p>
        </div>
    );
}
