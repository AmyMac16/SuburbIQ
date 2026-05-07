interface Props {
  suburb: any;
}

export default function SuburbCard({ suburb }: Props) {
  return (
    <div className="bg-zinc-950 border border-zinc-800 rounded-2xl p-6">
      
      <div className="flex items-start justify-between mb-6">
        <div>
          <h3 className="text-2xl font-bold">
            {suburb.suburb_name}
          </h3>

          <p className="text-zinc-500">
            {suburb.city}, {suburb.region}
          </p>
        </div>

        <div className="bg-lime-400/10 text-lime-400 border border-lime-400/20 px-3 py-1 rounded-lg text-sm font-semibold">
          74
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        
        <Metric
          label="Sold 12m"
          value="182"
        />

        <Metric
          label="Listings"
          value="16"
        />

        <Metric
          label="Yield"
          value="4.8%"
        />

        <Metric
          label="Growth"
          value="7.2%"
        />

      </div>
    </div>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="bg-black border border-zinc-800 rounded-xl p-4">
      <div className="text-xs uppercase tracking-wider text-zinc-500 mb-2">
        {label}
      </div>

      <div className="text-xl font-bold">
        {value}
      </div>
    </div>
  );
}