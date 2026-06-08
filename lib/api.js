const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://gabon-hubtech-api.onrender.com";

export const apiFetch = async (endpoint, options = {}) => {
    const defaultHeaders = {
        'Content-Type': 'application/json',
    };

    const config = {
        ...options,
        headers: {
            ...defaultHeaders,
            ...options.headers,
        },
    };

    const response = await fetch(`${API_URL}${endpoint}`, config);
    
    if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
    }

    return response.json();
};

export const contactApi = {
    submit: (data) => apiFetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
    }),
};
