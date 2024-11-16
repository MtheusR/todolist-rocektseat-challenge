import { Button } from '@material-tailwind/react';
import { MdAddCircleOutline } from 'react-icons/md';

export function SectionInput() {
	return (
		<form className="flex justify-center -mt-7 gap-2 m-4">
			<input
				type="text"
				className="bg-gray-500 rounded-lg p-4 border-2 border-gray-700 placeholder:text-gray-300 focus:outline-none text-gray-100 focus:border-purple-dark w-full max-w-[638px]"
				placeholder="Adicione uma tarefa"
			/>
			<Button className="bg-blue-dark capitalize flex items-center justify-center gap-2 text-sm font-normal p-4 rounded-lg outline-none hover:bg-blue focus:bg-blue ">
				<p>Criar</p>
				<span className="text-lg">
					<MdAddCircleOutline />{' '}
				</span>
			</Button>
		</form>
	);
}
