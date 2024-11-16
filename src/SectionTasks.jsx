import { Chip } from '@material-tailwind/react';

function ChipCustom({ valueChip }) {
	return <Chip className="px-2 bg-gray-400 normal-case " value={valueChip} />;
}

export function SectionTasks() {
	return (
		<>
			<header className="flex justify-center mt-16 mx-4">
				<div className="flex justify-between w-full max-w-[736px]">
					<div className="flex items-center gap-2">
						<p className="font-semibold text-blue">Tarefas criadas</p>
						<ChipCustom valueChip={'5'} />
					</div>
					<div className="flex items-center gap-2">
						<p className="font-semibold text-purple">Concluídas</p>
						<ChipCustom valueChip={'2 de 5'} />
					</div>
				</div>
			</header>
		</>
	);
}
