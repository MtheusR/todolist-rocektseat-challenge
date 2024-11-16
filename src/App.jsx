import { SectionInput } from './SectionInput';
export function App() {
	return (
		<>
			<main className="bg-gray-600 h-screen w-s">
				<header className="flex justify-center bg-gray-700 p-20">
					<img src="/logotipo.svg" alt="logo todo" />
				</header>

				<SectionInput />
			</main>
		</>
	);
}
