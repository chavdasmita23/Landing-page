import { users, type User, type InsertUser, assessments, type Assessment, type InsertAssessment } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createAssessment(assessment: InsertAssessment): Promise<Assessment>;
  getAssessment(id: number): Promise<Assessment | undefined>;
  getAssessmentByEmail(email: string): Promise<Assessment | undefined>;
  getAllAssessments(): Promise<Assessment[]>;
  updateAssessmentPayment(id: number, paymentCompleted: boolean): Promise<Assessment | undefined>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private assessments: Map<number, Assessment>;
  currentUserId: number;
  currentAssessmentId: number;

  constructor() {
    this.users = new Map();
    this.assessments = new Map();
    this.currentUserId = 1;
    this.currentAssessmentId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createAssessment(insertAssessment: InsertAssessment): Promise<Assessment> {
    const id = this.currentAssessmentId++;
    const assessment: Assessment = { 
      ...insertAssessment, 
      id, 
      paymentCompleted: false,
      createdAt: new Date().toISOString()
    };
    this.assessments.set(id, assessment);
    return assessment;
  }

  async getAssessment(id: number): Promise<Assessment | undefined> {
    return this.assessments.get(id);
  }

  async getAssessmentByEmail(email: string): Promise<Assessment | undefined> {
    return Array.from(this.assessments.values()).find(
      (assessment) => assessment.email === email,
    );
  }

  async getAllAssessments(): Promise<Assessment[]> {
    return Array.from(this.assessments.values());
  }

  async updateAssessmentPayment(id: number, paymentCompleted: boolean): Promise<Assessment | undefined> {
    const assessment = await this.getAssessment(id);
    if (!assessment) return undefined;
    
    const updatedAssessment = { ...assessment, paymentCompleted };
    this.assessments.set(id, updatedAssessment);
    return updatedAssessment;
  }
}

export const storage = new MemStorage();
