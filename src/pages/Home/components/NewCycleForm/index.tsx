import { useForm } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Insert a task'),
    minutesAmount: zod.number().min(5).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function NewCycleForm() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })
    return (
        <FormContainer>
            <label htmlFor="task">I`ll be working on</label>
            <TaskInput
                disabled={!!activeCycle}
                type="text"
                id="task"
                list="task-suggestions"
                placeholder="Name your project"
                {...register('task')}
            />
            <datalist id="task-suggestions">
                <option value="Project 1" />
                <option value="Project 2" />
                <option value="Project 3" />
                <option value="Project 4" />
            </datalist>

            <label htmlFor="minutesAmount">during</label>
            <MinutesAmountInput
                disabled={!!activeCycle}
                type="number"
                id="minutesAmount"
                placeholder="05"
                step={5}
                min={5}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
            />
            <span>minutes.</span>
        </FormContainer>
    )
}
