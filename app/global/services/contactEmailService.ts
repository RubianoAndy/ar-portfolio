import { environment } from "../utils/environment";

export const contactEmailService = async (
    body: {
        name: string,
        email: string,
        subject: string,
        message: string,
    }
) => {
    try {
        const apiUrl = environment.apiUrl;
        
        const response = await fetch(apiUrl + 'send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });

        if (!response.ok)
            throw new Error('Error en la respuesta del servidor');

        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error al enviar el formulario: ', error);
        throw error;
    }
}