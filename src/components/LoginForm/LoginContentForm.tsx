export function LoginContentForm() {
	return (
		<div className="bg-white rounded-full w-96 h-96 absolute top-40 right-10 items-end justify-end">
			
			<div className="ml-32 mt-20 text-zinc-800">
				<p className="text-zinc-800 font-semibold text-lg leading-9">Login</p>

				<form action="">
					<input 
						type="text" 
						placeholder="Email"
						className="form-input h-11 w-60 rounded-full border border-[#ececec] text-sm placeholder-zinc-500 focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none focus:outline-none"/>
				</form>
			</div>
		</div>
	)
}