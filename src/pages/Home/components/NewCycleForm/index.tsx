import { useFormContext } from 'react-hook-form'
import { FormContainer, TaskInput, MinutesAmountInput } from './styles'
import { useContext } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContext'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

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
