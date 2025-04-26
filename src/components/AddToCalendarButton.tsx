import React, { useMemo } from 'react'

export interface CalendarEvent {
  title: string
  description?: string
  location?: string
  start: Date
  end: Date
  // optional unique identifier, if you have one
  uid?: string
}

function formatDateAsICS(d: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${d.getUTCFullYear()}${pad(d.getUTCMonth()+1)}${pad(d.getUTCDate())}T${pad(d.getUTCHours())}${pad(d.getUTCMinutes())}${pad(d.getUTCSeconds())}Z`
}

export const AddToCalendarButton: React.FC<{ event: CalendarEvent }> = ({ event }) => {
  // memoize the blob URL so it doesn't regenerate on every render
  const icsUrl = useMemo(() => {
    const {
      title,
      description = '',
      location = '',
      start,
      end,
      uid = `${Date.now()}@yourapp`
    } = event

    const lines = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//YourApp//EN',
      'BEGIN:VEVENT',
      `UID:${uid}`,
      `DTSTAMP:${formatDateAsICS(new Date())}`,
      `DTSTART:${formatDateAsICS(start)}`,
      `DTEND:${formatDateAsICS(end)}`,
      `SUMMARY:${title.replace(/,/g, '\\,')}`,
      `DESCRIPTION:${description.replace(/,/g, '\\,')}`,
      `LOCATION:${location.replace(/,/g, '\\,')}`,
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\r\n')

    const blob = new Blob([lines], { type: 'text/calendar;charset=utf-8' })
    return URL.createObjectURL(blob)
  }, [event])

  // revoke the object URL when component unmounts
  React.useEffect(() => {
    return () => { URL.revokeObjectURL(icsUrl) }
  }, [icsUrl])

  return (
    <a
      href={icsUrl}
      download={`${event.title.replace(/\s+/g, '_')}.ics`}
      style={{
        display: 'inline-block',
        padding: '0.5em 1em',
        marginTop: '0.5em',
        background: '#007bff',
        color: 'white',
        borderRadius: 4,
        textDecoration: 'none',
        fontSize: '0.9rem'
      }}
    >
      + Add to Calendar
    </a>
  )
}
