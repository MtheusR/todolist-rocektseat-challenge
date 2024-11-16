import { Checkbox, IconButton } from '@material-tailwind/react';
import { LuTrash2 } from 'react-icons/lu';

export function TaskItem() {
	return (
		<>
			<div className="flex p-4 rounded-lg gap-4 items-center bg-gray-500">
				<Checkbox
					className="h-5 w-5 rounded-full border-2 checked:border-none border-purple-dark checked:bg-purple-dark hover:before:opacity-0 checked:hover:bg-purple hover:bg-opacity-20 hover:bg-blue-dark
					"
					containerProps={{
						className: 'py-1 px-0',
					}}
					ripple={false}
				/>

				<p className="text-gray-100 text-sm line-through text-gray-300">
					Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
					integer.
				</p>

				<button
					type="button"
					className="m-0 hover:bg-gray-400 p-2 rounded-md text-gray-300 hover:text-danger transition-all duration-300 bg-transparent"
				>
					<LuTrash2 />
				</button>
			</div>
		</>
	);
}
