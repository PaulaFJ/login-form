import { FormEvent } from 'react'

export function LoginContentForm() {

	function handleLoginSubmit(event: FormEvent) {
		event.preventDefault();
	}
	return (
		<div className="bg-white rounded-full w-96 h-96 absolute top-40 right-10 items-end justify-end">
			
			<div className="ml-32 mt-20 text-zinc-800">
				<p className="text-zinc-800 font-semibold text-lg leading-9 mb-4">Login</p>

				<form onSubmit={handleLoginSubmit}>
					<input 
						type="text" 
						placeholder="Email"
						className="form-input h-11 w-60 mb-4 rounded-full border border-[#ececec] shadow-md text-sm placeholder-zinc-500 focus:border-pink-500 focus:ring-pink-500 focus:ring-1 resize-none focus:outline-none"
					/>

					<input 
						type="password" 
						placeholder="Senha"
						className="form-input h-11 w-60 mb-4 rounded-full border border-[#ececec] shadow-md text-sm placeholder-zinc-500 focus:border-pink-500 focus:ring-pink-500 focus:ring-1 resize-none focus:outline-none"
					/>

					<button 
						className="bg-yellow-500 text-black w-28 h-11 rounded-full font-semibold text-sm leading-9"
						type="submit"
						>Login Now</button>
				</form>
			</div>
		</div>
	)
}