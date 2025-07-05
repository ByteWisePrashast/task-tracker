import React from 'react';

function TaskFilter({ filter, onChange, counts }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={() => onChange('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal' }}
      >
        All ({counts.all})
      </button>
      <button
        onClick={() => onChange('completed')}
        style={{ fontWeight: filter === 'completed' ? 'bold' : 'normal', marginLeft: '10px' }}
      >
        Completed ({counts.completed})
      </button>
      <button
        onClick={() => onChange('pending')}
        style={{ fontWeight: filter === 'pending' ? 'bold' : 'normal', marginLeft: '10px' }}
      >
        Pending ({counts.pending})
      </button>
    </div>
  );
}

export default TaskFilter;
