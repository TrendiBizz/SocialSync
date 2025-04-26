import React from 'react';
import InstagramProductTagsCombobox from '../components/composer/InstagramProductTagsCombobox';

interface Event {
  id: string;
  title: string;
  date: string;
  description?: string;
}

const events: Event[] = [
  { id: '1', title: 'Sample Event 1', date: '2025-04-30', description: 'Details about event 1.' },
  { id: '2', title: 'Sample Event 2', date: '2025-05-05', description: 'Details about event 2.' },
];

const AgendaPage: React.FC = () => {
  return (
    <div className="agenda-page p-6">
      <h1 className="text-3xl font-bold mb-6">Agenda</h1>
      {events.map(event => (
        <div key={event.id} className="event-item border rounded p-4 mb-4">
          <h2 className="text-2xl font-semibold mb-2">{event.title}</h2>
          <p className="text-gray-700 mb-3">{event.date}</p>
          {event.description && <p className="text-gray-600 mb-3">{event.description}</p>}
          <InstagramProductTagsCombobox
            onSelectTag={tag => console.log(`Selected tag "${tag}" for event ${event.id}`)}
          />
        </div>
      ))}
    </div>
  );
};

export default AgendaPage;
