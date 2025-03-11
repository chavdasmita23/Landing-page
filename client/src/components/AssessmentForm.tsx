import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { insertAssessmentSchema } from "@shared/schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";

const formSchema = insertAssessmentSchema.extend({
  firstName: z.string().min(2, {
    message: "First name must be at least 2 characters.",
  }),
  lastName: z.string().min(2, {
    message: "Last name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
});

export default function AssessmentForm() {
  const { toast } = useToast();
  const [submittedAssessmentId, setSubmittedAssessmentId] = useState<number | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      education: "",
      workExperience: "",
      languageProficiency: "",
    },
  });

  const assessmentMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      const response = await apiRequest("POST", "/api/assessments", values);
      return await response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Assessment submitted",
        description: "Your eligibility assessment has been submitted successfully.",
      });
      setSubmittedAssessmentId(data.assessmentId);
      // In a real application, this would redirect to payment gateway
    },
    onError: (error) => {
      toast({
        title: "Submission failed",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    assessmentMutation.mutate(values);
  };

  // Simulate payment processing
  const handlePayment = () => {
    if (!submittedAssessmentId) return;
    
    toast({
      title: "Redirecting to payment",
      description: "You will now be redirected to our secure payment gateway.",
    });
    
    // In a real application, this would redirect to Razorpay or any other payment gateway
    setTimeout(() => {
      toast({
        title: "Payment simulation",
        description: "In a production environment, this would connect to a real payment gateway.",
      });
    }, 1500);
  };

  return (
    <section id="assessment" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Canadian PR Eligibility Assessment
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Complete this form to receive a comprehensive assessment of your Canadian PR eligibility.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto bg-gray-50 shadow-lg">
          <CardContent className="p-8">
            {submittedAssessmentId ? (
              <div className="text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Assessment Submitted!</h3>
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in Canadian immigration. To proceed with your comprehensive 
                  assessment, please complete the payment process.
                </p>
                <Button 
                  onClick={handlePayment}
                  className="w-full bg-[#E31937] hover:bg-red-700 text-white font-bold py-3"
                >
                  Proceed to Payment via Razorpay (₹1,000 + GST)
                </Button>
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Personal Information</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>First Name</FormLabel>
                            <FormControl>
                              <Input placeholder="John" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Last Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                              <Input type="tel" placeholder="+1 (123) 456-7890" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  {/* Basic Eligibility */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Basic Eligibility</h3>
                    <div className="space-y-4">
                      <FormField
                        control={form.control}
                        name="age"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Age</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your age range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="18-24">18-24</SelectItem>
                                <SelectItem value="25-29">25-29</SelectItem>
                                <SelectItem value="30-34">30-34</SelectItem>
                                <SelectItem value="35-39">35-39</SelectItem>
                                <SelectItem value="40-44">40-44</SelectItem>
                                <SelectItem value="45+">45+</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="education"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Highest Level of Education</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your highest education" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="high-school">High School</SelectItem>
                                <SelectItem value="one-year-degree">One-year degree, diploma or certificate</SelectItem>
                                <SelectItem value="two-year-degree">Two-year program at a university, college, etc.</SelectItem>
                                <SelectItem value="bachelors">Bachelor's Degree</SelectItem>
                                <SelectItem value="masters">Master's Degree</SelectItem>
                                <SelectItem value="phd">Doctoral Level (PhD)</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="workExperience"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Work Experience (in years)</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your work experience" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="less-than-1">Less than 1 year</SelectItem>
                                <SelectItem value="1-3">1-3 years</SelectItem>
                                <SelectItem value="3-5">3-5 years</SelectItem>
                                <SelectItem value="5-10">5-10 years</SelectItem>
                                <SelectItem value="10+">10+ years</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="languageProficiency"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Language Proficiency (English/French)</FormLabel>
                            <Select 
                              onValueChange={field.onChange} 
                              defaultValue={field.value}
                            >
                              <FormControl>
                                <SelectTrigger>
                                  <SelectValue placeholder="Select your language proficiency" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="basic">Basic</SelectItem>
                                <SelectItem value="intermediate">Intermediate</SelectItem>
                                <SelectItem value="advanced">Advanced</SelectItem>
                                <SelectItem value="fluent">Fluent</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <p className="text-sm text-gray-600 mb-4">Important Note: Our comprehensive assessment service is available for ₹1,000 + GST.</p>
                    <Button 
                      type="submit" 
                      className="w-full bg-[#E31937] hover:bg-red-700 text-white font-bold py-3"
                      disabled={assessmentMutation.isPending}
                    >
                      {assessmentMutation.isPending ? "Submitting..." : "Proceed to Payment via Razorpay"}
                    </Button>
                  </div>
                </form>
              </Form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
