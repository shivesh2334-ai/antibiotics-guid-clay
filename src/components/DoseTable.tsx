import { DoseEntry } from "@/data/guidelines";

export default function DoseTable({ doses }: { doses: DoseEntry[] }) {
  return (
    <div className="mt-6">
      <h4 className="font-serif text-base text-teal-900 mb-3">
        Standard adult doses
      </h4>
      <div className="border border-rule rounded-sm overflow-hidden">
        {doses.map((d, i) => (
          <div
            key={`${d.drug}::${d.dose}`}
            className={`flex justify-between gap-4 px-4 py-2 text-sm ${
              i % 2 === 0 ? "bg-white/60" : "bg-transparent"
            }`}
          >
            <span className="font-medium">{d.drug}</span>
            <span className="text-ink/70 text-right">{d.dose}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
