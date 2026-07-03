interface TerminalMockProps {
  lines: string[]
  title: string
}

export function TerminalMock({ lines, title }: TerminalMockProps) {
  return (
    <div className="terminal" role="img" aria-label={title}>
      <div className="terminal-bar">
        <span className="dot red" />
        <span className="dot yellow" />
        <span className="dot green" />
        <span className="terminal-title">{title}</span>
      </div>
      <pre className="terminal-body">
        {lines.map((line, i) => (
          <span key={i} className={line.startsWith('$') ? 'cmd' : 'out'}>
            {line}
            {'\n'}
          </span>
        ))}
        <span className="cursor" aria-hidden="true" />
      </pre>
    </div>
  )
}
