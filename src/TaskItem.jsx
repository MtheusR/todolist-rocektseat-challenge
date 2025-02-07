import { Checkbox, IconButton } from '@material-tailwind/react';
import { LuTrash2 } from 'react-icons/lu';

export function TaskItem({ id, checked, description, onDeleteTask, onToggleChecked }) {
	function handleDeleteTask() {
		onDeleteTask({ id });
	}

	return (
		<>
			<div className="flex p-4 rounded-lg justify-between bg-gray-500">
				<div className="flex items-center gap-4">
					<Checkbox
						className="h-5 w-5 rounded-full border-2 checked:border-none border-purple-dark checked:bg-purple-dark hover:before:opacity-0 checked:hover:bg-purple hover:bg-opacity-20 hover:bg-blue-dark
					"
						containerProps={{
							className: 'py-1 px-0',
						}}
						ripple={false}
						defaultChecked={false}
						onChange={onToggleChecked}
					/>
					<p className={checked ? 'text-sm text-gray-300 line-through' : 'text-sm text-gray-100'}>
						{description} {id}
					</p>
				</div>

				<button
					onClick={handleDeleteTask}
					type="button"
					className="m-0 hover:bg-gray-400 p-2 rounded-md text-gray-300 hover:text-danger transition-all duration-300 bg-transparent"
				>
					<LuTrash2 />
				</button>
			</div>
		</>
	);
}
