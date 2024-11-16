import { Checkbox } from '@material-tailwind/react';
import { LuTrash2 } from 'react-icons/lu';

export function TaskItem() {
	return (
		<>
			<div className="flex p-4 rounded-lg gap-3  bg-gray-400">
				<Checkbox className="rounded-full" ripple={false} />

				<p className="text-gray-100 text-sm">
					Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames
					integer.
				</p>

				<LuTrash2 />
			</div>
		</>
	);
}
