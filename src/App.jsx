import { TaskSection } from './TaskSection';
export function App() {
	return (
		<>
			<main className="bg-gray-600 h-screen w-s pb-4">
				<header className="flex justify-center bg-gray-700 p-20">
					<img src="/logotipo.svg" alt="logo todo" />
				</header>

				<TaskSection />
			</main>
		</>
	);
}
