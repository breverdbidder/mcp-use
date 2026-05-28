import { useWidget, type WidgetMetadata } from "mcp-use/react";
import { z } from "zod";

const propSchema = z.object({
  parcel_id: z.string(),
  county: z.string(),
  zoning_code: z.string(),
  allowed_uses: z.array(z.string()),
  setback_front_ft: z.number().nullable(),
  setback_side_ft: z.number().nullable(),
  setback_rear_ft: z.number().nullable(),
});

export const widgetMetadata: WidgetMetadata = {
  description: "ZoneWise Parcel - FL 67-county zoning lookup",
  props: propSchema,
};

const ZoneWiseParcel: React.FC = () => {
  const { props } = useWidget<z.infer<typeof propSchema>>();
  return (
    <div style={{ background: "#020617", color: "#fff", padding: 16, fontFamily: "Inter, sans-serif", borderLeft: "4px solid #F59E0B" }}>
      <div style={{ color: "#1E3A5F", fontWeight: 700, marginBottom: 8 }}>ZoneWise Parcel</div>
      <div>Parcel {props.parcel_id} - {props.county} County, FL</div>
      <div>Zoning: {props.zoning_code}</div>
      <div>Allowed Uses: {props.allowed_uses.join(", ")}</div>
      <div>Setbacks F/S/R: {props.setback_front_ft ?? "-"} / {props.setback_side_ft ?? "-"} / {props.setback_rear_ft ?? "-"} ft</div>
      {/* TODO: live ZoneWise Supabase fetch; SEP-1865 conformance */}
    </div>
  );
};

export default ZoneWiseParcel;
