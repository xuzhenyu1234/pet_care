import { NextResponse } from "next/server";

import { getPool } from "../../lib/db";

export const runtime = "nodejs";

type AppointmentPayload = {
  customerName?: unknown;
  customerPhone?: unknown;
  petType?: unknown;
  serviceItem?: unknown;
  arrivalTime?: unknown;
  notes?: unknown;
};

const allowedPetTypes = new Set(["dog", "cat"]);
const allowedServiceItems = new Set(["basic_bath", "deep_care", "bath_and_styling"]);

function textValue(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function getClientIp(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0]?.trim() || null;
}

export async function POST(request: Request) {
  let payload: AppointmentPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ error: "预约信息格式不正确。" }, { status: 400 });
  }

  const customerName = textValue(payload.customerName);
  const customerPhone = textValue(payload.customerPhone);
  const petType = textValue(payload.petType);
  const serviceItem = textValue(payload.serviceItem);
  const arrivalTime = textValue(payload.arrivalTime);
  const notes = textValue(payload.notes);

  if (!customerName || !customerPhone || !petType || !serviceItem || !arrivalTime) {
    return NextResponse.json({ error: "请完整填写预约信息。" }, { status: 400 });
  }

  if (!allowedPetTypes.has(petType) || !allowedServiceItems.has(serviceItem)) {
    return NextResponse.json({ error: "请选择有效的宠物类型和服务项目。" }, { status: 400 });
  }

  const arrivalDate = new Date(arrivalTime);

  if (Number.isNaN(arrivalDate.getTime())) {
    return NextResponse.json({ error: "期望到店时间不正确。" }, { status: 400 });
  }

  if (customerName.length > 80 || customerPhone.length > 32 || notes.length > 1000) {
    return NextResponse.json({ error: "填写内容过长，请精简后再提交。" }, { status: 400 });
  }

  try {
    const result = await getPool().query<{ id: string }>(
      `insert into public.appointments (
        customer_name,
        customer_phone,
        pet_type,
        service_item,
        arrival_time,
        notes,
        source,
        user_agent,
        ip_address
      ) values ($1, $2, $3, $4, $5, nullif($6, ''), 'website', $7, $8)
      returning id`,
      [
        customerName,
        customerPhone,
        petType,
        serviceItem,
        arrivalDate.toISOString(),
        notes,
        request.headers.get("user-agent"),
        getClientIp(request),
      ],
    );

    return NextResponse.json({ id: result.rows[0].id }, { status: 201 });
  } catch (error) {
    console.error("Failed to create appointment", error);
    return NextResponse.json({ error: "预约提交失败，请稍后再试。" }, { status: 500 });
  }
}
