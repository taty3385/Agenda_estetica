"use client"

import { useState } from 'react';

export default function Sesion({ open, onClose }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);

	if (!open) return null;

	const handleSubmit = async (e) => {
		e.preventDefault();
		setError('');
		setLoading(true);
		try {
			const response = await fetch('http://localhost:4000/api/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password })
			});
			const data = await response.json();
			if (!response.ok) throw new Error(data.message || 'Error al iniciar sesión');
			// Aquí puedes guardar el token si tu backend lo devuelve
			// localStorage.setItem('token', data.token);
			alert('¡Sesión iniciada correctamente!');
			if (onClose) onClose();
		} catch (err) {
			setError(err.message);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
			<div className="bg-white p-8 rounded shadow-md w-full max-w-sm relative">
				<button
					onClick={onClose}
					className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-xl font-bold"
				>
					×
				</button>
				<form onSubmit={handleSubmit}>
					<h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>
					<label className="block mb-2 text-gray-700">Email</label>
					<input
						type="email"
						className="w-full p-2 mb-4 border rounded"
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<label className="block mb-2 text-gray-700">Contraseña</label>
					<input
						type="password"
						className="w-full p-2 mb-4 border rounded"
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
					{error && <p className="text-red-500 mb-4 text-center">{error}</p>}
					<button
						type="submit"
						className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
						disabled={loading}
					>
						{loading ? 'Cargando...' : 'Ingresar'}
					</button>
				</form>
			</div>
		</div>
	);
}