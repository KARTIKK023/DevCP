import { Card, CardContent } from "@/components/ui/card";

export default function StatCard({ icon, meta, value, label }) {
  return (
    <Card className="bg-neutral-900 border-white/10 border-0 border-solid p-4 gap-2">
      <CardContent className="flex p-0 flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="size-8 rounded-lg bg-neutral-800 flex justify-center items-center">
            {icon}
          </div>
          {meta}
        </div>
        <span className="font-semibold text-2xl leading-8 tracking-tight">
          {value}
        </span>
        <span className="text-[#a1a1a1] text-xs leading-4">{label}</span>
      </CardContent>
    </Card>
  );
}
