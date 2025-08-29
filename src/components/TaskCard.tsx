import { motion } from "framer-motion";
import { Badge, Button, Card, Flex, Heading, Text } from "@radix-ui/themes"
import type { Task, TaskPriority, TaskStatus } from "../entities/Task"
import { useTasks } from "../hooks/useTasks"

interface TaskCardProps {
    task: Task
}

export const TaskCard: React.FC<TaskCardProps> = ({ task }) => {
    const { updateTask, deleteTask } = useTasks()
    const getActionText = (status: TaskStatus) => {
        const actionTexts = {
            "todo": "Iniciar",
            "doing": "Concluir",
            "done": "Arquivar"
        }
        return actionTexts[status]
    }

    const getActionColor = (status: TaskStatus) => {
        const actionColors: { [key: string]: "sky" | "green" | "bronze"} = {
            "todo": "sky",
            "doing": "green",
            "done": "bronze"
        }
        return actionColors[status]
    }

    const getPriotityText = (priority: TaskPriority) => {
        const priorityTexts = {
            "low": "Baixa",
            "medium": "Média",
            "high": "Alta"
        }
        return priorityTexts[priority]
    }

    const getPriorityColor = (priority: TaskPriority) => {
        const priorityColors: { [key: string]: "sky" | "amber" | "tomato"} = {
            "low": "sky",
            "medium": "amber",
            "high": "tomato"
        }
        return priorityColors[priority]
    }

    const handleUpdate = (id: string, status: string) => {
        if (status === "todo") {
            updateTask(id, { status: "doing" })
        }
        else if (status === "doing") {
            updateTask(id, { status: "done" })
        }
    }

    const handleDelete = (id: string) => {
        const confirmation = confirm("Tem certeza que deseja excluir esta tarefa?")
        if (confirmation) {
            deleteTask(id)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 1, y: 0, scale: 0.0 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <Card>
                <Flex align="center" gap="4">
                    <Heading as="h3" size="3" weight="bold">{task.title}</Heading>
                    <Badge color={getPriorityColor(task.priority)}>Prioridade: {getPriotityText(task.priority)}</Badge>
                </Flex>

                <Text as="p" my="4">{task.description}</Text>

                <Flex gap="2">
                    {task.status !== "done" && (
                        <Button color={getActionColor(task.status)} size="2" variant="soft" onClick={() => handleUpdate(task.id, task.status)}>
                            {getActionText(task.status)}
                        </Button>
                    )}
                    <Button color="red" variant="surface" onClick={() => handleDelete(task.id)}>Excluir</Button>
                </Flex>
            </Card>
        </motion.div>
    )
}