import { useWidget, type WidgetMetadata } from "mcp-use/react";
import { z } from "zod";

const propSchema = z.object({
  parcel_id: z.string(),
  county: z.string(),
  sale_date: z.string().nullable(),
  lien_stack_usd: z.number().nullable(),
  redemption_days_left: z.number().nullable(),
  shapira_score: z.number().nullable(),
});

export const widgetMetadata: WidgetMetadata = {
  description: "BidDeed Dossier - FL distressed parcel diligence card",
  props: propSchema,
};

const BidDeedDossier: React.FC = () => {
  const { props } = useWidget<z.infer<typeof propSchema>>();
  return (
    <div style={{ background: "#020617", color: "#fff", padding: 16, fontFamily: "Inter, sans-serif", borderLeft: "4px solid #1E3A5F" }}>
      <div style={{ color: "#F59E0B", fontWeight: 700, marginBottom: 8 }}>BidDeed Dossier</div>
      <div>Parcel {props.parcel_id} - {props.county} County, FL</div>
      <div>Sale: {props.sale_date ?? "TBD"}</div>
      <div>Lien Stack: {props.lien_stack_usd != null ? `$${props.lien_stack_usd.toLocaleString()}` : "-"}</div>
      <div>Redemption: {props.redemption_days_left != null ? `${props.redemption_days_left}d left` : "-"}</div>
      <div>Shapira Score: {props.shapira_score ?? "-"}</div>
      {/* TODO: SEP-1865 conformance check; live Supabase fetch via tool round-trip */}
    </div>
  );
};

export default BidDeedDossier;
