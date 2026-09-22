import { Condition } from "@/data/guidelines";

export default function RegimenTable({ condition }: { condition: Condition }) {
  return (
    <div className="border-t border-rule py-5 first:border-t-0 first:pt-0">
      <h4 className="font-serif text-lg text-teal-900 mb-3">{condition.name}</h4>
      <div className="space-y-3">
        {condition.regimens.map((r) => (
          <div
            key={[r.organism, r.preferred, r.alternative, r.duration].filter(Boolean).join("|")}
            className="grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-x-6 gap-y-1 text-[15px] leading-snug"
          >
            {r.organism && (
              <div className="sm:col-span-2 text-xs uppercase tracking-wide text-teal-600 font-medium">
                {r.organism}
              </div>
            )}
            <div>
              <span className="text-ink/50 text-xs block mb-0.5">Preferred</span>
              <span>{r.preferred}</span>
            </div>
            {r.alternative && (
              <div>
                <span className="text-ink/50 text-xs block mb-0.5">Alternative</span>
                <span>{r.alternative}</span>
              </div>
            )}
            {r.duration && (
              <div className="sm:col-span-2">
                <span className="text-ink/50 text-xs mr-1">Duration:</span>
                <span>{r.duration}</span>
              </div>
            )}
            {r.comments && (
              <div className="sm:col-span-2 text-ink/70 italic text-sm">
                {r.comments}
              </div>
            )}
          </div>
        ))}
        {condition.notes && condition.notes.length > 0 && (
          <ul className="mt-2 space-y-1 text-sm text-ink/70 list-disc list-outside pl-4">
            {condition.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
