import { useState } from 'react';
import { Button, Chip } from '@material-tailwind/react';
import { MdAddCircleOutline } from 'react-icons/md';
import { HiDocumentMinus } from 'react-icons/hi2';
import { TaskItem } from './TaskItem';
import { comment } from 'postcss';

function CustomChip({ value }) {
	return <Chip className="px-2 bg-gray-400 normal-case" value={value} />;
}

function EmptyTaskList() {
	return (
		<div className="flex flex-col items-center border-t-2 w-full border-gray-400 rounded-lg text-gray-300 py-16 px-6">
			<HiDocumentMinus className="text-5xl mb-4" />
			<p className="text-center">
				<span className="font-semibold">Você ainda não tem tarefas cadastradas</span>
				<br />
				Crie tarefas e organize seus itens a fazer
			</p>
		</div>
	);
}

export function TaskSection() {
	const [tasks, setTasks] = useState([]);

	const [newTaskText, setNewTaskText] = useState('');

	function handleCreateNewTask(event) {
		event.preventDefault(); // Previne o comportamento padrão do formulário

		if (newTaskText.trim() === '') return; // Não adiciona tarefas vazias

		const newTask = {
			id: tasks.length + 1, // Gera um ID único (pode ser melhorado)
			checked: false,
			description: newTaskText,
		};

		setTasks([...tasks, newTask]); // Adiciona a nova tarefa à lista existente
		setNewTaskText(''); // Reseta o campo de texto
	}

	function newTaskChange(event) {
		setNewTaskText(event.target.value);
	}

	function deleteTask(taskToDelete) {
		const updatedTasks = tasks.filter((task) => task.id !== taskToDelete.id);
		setTasks(updatedTasks); // Atualiza a lista de tarefas
	}

	return (
		<section className="task-section">
			<form onSubmit={handleCreateNewTask} className="flex justify-center -mt-7 gap-2 m-4">
				<input
					name="taskInput"
					type="text"
					value={newTaskText}
					className="bg-gray-500 rounded-lg p-4 border-2 border-gray-700 placeholder:text-gray-300 focus:outline-none text-gray-100 focus:border-purple-dark w-full max-w-[638px]"
					placeholder="Adicione uma tarefa"
					onChange={newTaskChange} // Atualiza o estado do input
				/>
				<Button
					type="submit"
					className="bg-blue-dark capitalize flex items-center justify-center gap-2 text-sm font-normal p-4 rounded-lg outline-none hover:bg-blue focus:bg-blue"
				>
					<span>Criar</span>
					<MdAddCircleOutline className="text-lg" />
				</Button>
			</form>

			<div className="flex flex-col items-center mx-4 gap-6 mt-16">
				<header className="flex justify-between w-full max-w-[736px]">
					<div className="flex items-center gap-2">
						<p className="font-semibold text-blue">Tarefas criadas</p>
						<CustomChip value={tasks.length} />
					</div>
					<div className="flex items-center gap-2">
						<p className="font-semibold text-purple">Concluídas</p>
						<CustomChip
							value={`${tasks.filter((task) => task.checked).length} de ${tasks.length}`}
						/>
					</div>
				</header>

				<section className="flex flex-col gap-2 w-full max-w-[736px]">
					{tasks.length === 0 ? (
						<EmptyTaskList />
					) : (
						tasks.map((task) => (
							<TaskItem
								key={task.id}
								checked={task.checked}
								description={task.description}
								onDeleteTask={() => deleteTask(task)}
							/>
						))
					)}
				</section>
			</div>
		</section>
	);
}