import { Chip } from '@material-tailwind/react';
import { HiDocumentMinus } from 'react-icons/hi2';

function ChipCustom({ valueChip }) {
	return <Chip className="px-2 bg-gray-400 normal-case" value={valueChip} />;
}

function EmpytList() {
	return (
		<>
			<div className="flex flex-col items-center border-t-2 w-full border-gray-400 rounded-lg text-gray-300 py-16 px-6">
				<HiDocumentMinus className="text-5xl mb-4" />
				<p>
					<span className="font-semibold">Você ainda não tem tarefas cadastradas</span>
					<br />
					Crie tarefas e organize seus itens a fazer
				</p>
			</div>
		</>
	);
}

export function SectionTasks() {
	return (
		<main className="flex flex-col items-center mx-4 gap-6">
			<header className="flex justify-between w-full max-w-[736px]">
				<div className="flex items-center gap-2">
					<p className="font-semibold text-blue">Tarefas criadas</p>
					<ChipCustom valueChip="5" />
				</div>
				<div className="flex items-center gap-2">
					<p className="font-semibold text-purple">Concluídas</p>
					<ChipCustom valueChip="2 de 5" />
				</div>
			</header>
			<section className="flex justify-center w-full max-w-[736px]">
				<EmpytList />
			</section>
		</main>
	);
}
