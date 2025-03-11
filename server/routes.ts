import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertAssessmentSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/assessments", async (req, res) => {
    try {
      // Handle fullName field if it exists
      if (req.body.fullName) {
        // Split the full name into first and last name
        const nameParts = req.body.fullName.trim().split(' ');
        const firstName = nameParts[0];
        const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
        
        // Update the request body
        req.body.firstName = firstName;
        req.body.lastName = lastName;
        delete req.body.fullName;
      }
      
      const validatedData = insertAssessmentSchema.parse(req.body);
      
      // Check if this email already exists
      const existingAssessment = await storage.getAssessmentByEmail(validatedData.email);
      if (existingAssessment) {
        return res.status(409).json({
          message: "An assessment with this email already exists",
          assessmentId: existingAssessment.id
        });
      }
      
      const assessment = await storage.createAssessment(validatedData);
      return res.status(201).json({
        message: "Assessment created successfully",
        assessmentId: assessment.id
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Validation error",
          errors: validationError.message
        });
      }
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  // Endpoint to simulate payment completion (in real app this would be a webhook or callback)
  app.post("/api/assessments/:id/payment", async (req, res) => {
    const id = parseInt(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ message: "Invalid assessment ID" });
    }

    const assessment = await storage.getAssessment(id);
    if (!assessment) {
      return res.status(404).json({ message: "Assessment not found" });
    }

    const updatedAssessment = await storage.updateAssessmentPayment(id, true);
    return res.status(200).json({
      message: "Payment updated successfully",
      assessment: updatedAssessment
    });
  });

  // Get all assessments (for admin purposes)
  app.get("/api/assessments", async (req, res) => {
    const assessments = await storage.getAllAssessments();
    return res.status(200).json(assessments);
  });

  const httpServer = createServer(app);
  return httpServer;
}
