import { useTasks } from './TaskContext'

export default function FilterButtons() {
  const { state, dispatch } = useTasks()

  const filters = ['ALL', 'ACTIVE', 'COMPLETED']

  return (
    <div className="btn-group mb-4">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => dispatch({ type: 'FILTER_TASKS', payload: filter })}
          className={`btn btn-${state.filter === filter ? 'primary' : 'outline-primary'}`}
        >
          {filter === 'ALL' ? 'All' : filter === 'ACTIVE' ? 'Active' : 'Completed'}
        </button>
      ))}
    </div>
  )
}
