import { z } from "zod";
import { createRouter, publicQuery, adminQuery } from "./middleware";
import { getDb } from "./queries/connection";
import { inquiries } from "@db/schema";
import { eq, desc } from "drizzle-orm";

export const inquiryRouter = createRouter({
  // Public mutation - anyone can submit an inquiry
  create: publicQuery
    .input(
      z.object({
        name: z.string().min(1, "Name is required"),
        email: z.string().email("Valid email is required"),
        phone: z.string().min(1, "Phone number is required"),
        message: z.string().optional(),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      const result = await db.insert(inquiries).values({
        name: input.name,
        email: input.email,
        phone: input.phone,
        message: input.message || null,
      });
      return { success: true, id: Number(result[0].insertId) };
    }),

  // Admin query - only admins can list all inquiries
  list: adminQuery.query(async () => {
    const db = getDb();
    const result = await db
      .select()
      .from(inquiries)
      .orderBy(desc(inquiries.createdAt));
    return result;
  }),

  // Admin mutation - update inquiry status
  updateStatus: adminQuery
    .input(
      z.object({
        id: z.number(),
        status: z.enum(["new", "read", "resolved"]),
      })
    )
    .mutation(async ({ input }) => {
      const db = getDb();
      await db
        .update(inquiries)
        .set({ status: input.status })
        .where(eq(inquiries.id, input.id));
      return { success: true };
    }),

  // Admin mutation - delete inquiry
  delete: adminQuery
    .input(z.object({ id: z.number() }))
    .mutation(async ({ input }) => {
      const db = getDb();
      await db.delete(inquiries).where(eq(inquiries.id, input.id));
      return { success: true };
    }),
});
