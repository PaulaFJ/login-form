import { LoginContentForm } from './LoginContentForm'

export function LoginForm() {
	return (		
		<div className="relative h-screen w-80 m-auto p-4 flex flex-col bg-gradient-to-tl to-pink-800 from-pink-500  rounded-lg overflow-hidden">
			<header className="pt-8 pr-6 text-2xl leading-9 font-semibold">
				<h1>Welcome to,</h1>
				<span className="text-yellow-500">Login Form</span>
			</header>	

			<LoginContentForm / >

			<footer>Footer</footer>			
		</div>		
	)
} 