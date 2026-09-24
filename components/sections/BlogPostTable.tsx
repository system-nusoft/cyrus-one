interface BlogPostTableProps {
  headers: [string, string];
  rows: [string, string][];
  /** Column width percentages, left then right. Defaults to an even-ish 40/60 split. */
  columnWidths?: [string, string];
}

export default function BlogPostTable({
  headers,
  rows,
  columnWidths = ["40%", "60%"],
}: BlogPostTableProps) {
  // Column widths are dynamic, so they're set via inline style rather than a
  // Tailwind arbitrary-value class — Tailwind can't generate a class from an
  // interpolated string, it only picks up literal class names it can statically scan.
  const gridStyle = { gridTemplateColumns: `${columnWidths[0]} ${columnWidths[1]}` };

  return (
    <div className="border border-neutral-300">
      <div className="grid gap-6 px-6 py-4" style={gridStyle}>
        <span className="font-bold text-neutral-900">{headers[0]}</span>
        <span className="font-bold text-neutral-900">{headers[1]}</span>
      </div>
      {rows.map(([left, right]) => (
        <div
          key={left}
          className="grid gap-6 px-6 py-4 bg-neutral-200/60 border-t border-neutral-300"
          style={gridStyle}
        >
          <span className="font-bold text-neutral-900">{left}</span>
          <span className="text-neutral-600">{right}</span>
        </div>
      ))}
    </div>
  );
}
