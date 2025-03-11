import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { insertAssessmentSchema } from "@shared/schema";
import { Check, ArrowRight, Info, User, Mail, Phone, Calendar, GraduationCap, Briefcase } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
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
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";

const formSchema = insertAssessmentSchema.extend({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
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
      fullName: "",
      email: "",
      phone: "",
      age: "",
      workExperience: "",
      education: "",
      languageProficiency: "",
    },
  });

  const assessmentMutation = useMutation({
    mutationFn: async (values: z.infer<typeof formSchema>) => {
      // Split the full name into first and last name
      const nameParts = values.fullName.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
      
      const dataToSubmit = {
        ...values,
        firstName,
        lastName
      };

      const response = await apiRequest("POST", "/api/assessments", dataToSubmit);
      return await response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Assessment request submitted",
        description: "Thank you for your interest in our services.",
      });
      setSubmittedAssessmentId(data.assessmentId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
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

  // Validate basic form fields
  const validateBasicInfo = () => {
    return !!(
      form.getValues('fullName') &&
      form.getValues('email') &&
      form.getValues('phone')
    );
  };

  return (
    <section id="assessment" className="py-24 bg-gradient-to-b from-gray-50 to-white relative">
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-64 bg-[#2563EB] rotate-12 transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute top-0 left-0 w-full h-64 bg-[#E31937] -rotate-12 transform -translate-x-1/4 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block text-[#E31937] font-semibold text-sm tracking-wider uppercase mb-2">FREE ASSESSMENT</span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
            Check Your Eligibility
          </h2>
          <div className="w-20 h-1 bg-[#E31937] mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Complete this form to receive a comprehensive assessment of your Canadian immigration eligibility options. Our experts will analyze your profile and provide a detailed report.
          </p>
        </div>
        
        {submittedAssessmentId ? (
          <Card className="max-w-2xl mx-auto bg-white shadow-lg border-0">
            <CardHeader className="bg-[#E31937] text-white text-center py-8">
              <div className="mx-auto bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Check className="h-8 w-8 text-[#E31937]" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Assessment Request Submitted!</h3>
              <p className="opacity-90">Your application has been received successfully.</p>
            </CardHeader>
            <CardContent className="p-8">
              <div className="mb-8 bg-[#E31937]/5 p-6 rounded-lg border border-[#E31937]/20">
                <h4 className="text-lg font-bold text-gray-800 mb-3 flex items-center">
                  <Info className="h-5 w-5 mr-2 text-[#E31937]" />
                  Next Steps
                </h4>
                <ol className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-[#E31937] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">1</span>
                    <span>
                      <strong>Complete the payment</strong> - Proceed with secure payment to initiate your detailed assessment.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#E31937] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">2</span>
                    <span>
                      <strong>Receive detailed questionnaire</strong> - We'll email you a comprehensive form to gather more information about your profile.
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-[#E31937] text-white rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">3</span>
                    <span>
                      <strong>Get your assessment report</strong> - Our experts will analyze your information and provide a detailed eligibility assessment within 3 working days.
                    </span>
                  </li>
                </ol>
              </div>
              
              <div className="text-center">
                <p className="text-gray-600 mb-6">
                  Thank you for your interest in Canadian immigration. To proceed with your comprehensive assessment, please complete the payment process.
                </p>
                <Button 
                  onClick={handlePayment}
                  className="bg-[#E31937] hover:bg-red-700 text-white font-bold py-3 px-8 shadow-lg"
                  size="lg"
                >
                  Proceed to Payment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </CardContent>
            <CardFooter className="bg-gray-50 p-6 text-center text-sm text-gray-500 border-t">
              <p>Your assessment report will be completed within 3 working days after payment and questionnaire completion.</p>
            </CardFooter>
          </Card>
        ) : (
          <div className="max-w-2xl mx-auto">
            <Card className="bg-white shadow-lg border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-[#2563EB]/10 to-[#E31937]/10 p-6 border-b">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">Eligibility Assessment Form</h3>
                  <Badge className="bg-[#E31937]">₹1,000 + GST</Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <Alert className="mb-8 bg-blue-50 border-blue-200">
                  <AlertTitle className="text-[#2563EB] flex items-center">
                    <Info className="h-4 w-4 mr-2" />
                    Important Information
                  </AlertTitle>
                  <AlertDescription className="text-sm text-gray-700 mt-1">
                    The detailed assessment form will be sent to you via email after payment. Our experts will provide a comprehensive report on your PR eligibility within 3 working days.
                  </AlertDescription>
                </Alert>
                
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    {/* Personal Information */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-[#2563EB]/10 p-2 rounded-full mr-3">
                          <User className="h-5 w-5 text-[#2563EB]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Personal Information</h3>
                      </div>
                      
                      <div className="space-y-4">
                        <FormField
                          control={form.control}
                          name="fullName"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Full Name</FormLabel>
                              <FormControl>
                                <Input placeholder="John Doe" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                  <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input type="email" placeholder="you@example.com" className="pl-10" {...field} />
                                  </div>
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
                                  <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                    <Input type="tel" placeholder="+91 98765 43210" className="pl-10" {...field} />
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                    </div>
                    
                    {/* Basic Eligibility */}
                    <div>
                      <div className="flex items-center mb-4">
                        <div className="bg-[#E31937]/10 p-2 rounded-full mr-3">
                          <Calendar className="h-5 w-5 text-[#E31937]" />
                        </div>
                        <h3 className="text-lg font-bold text-gray-800">Basic Eligibility</h3>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
                                    <SelectValue placeholder="Select age" />
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
                              <FormLabel>Education</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select level" />
                                  </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                  <SelectItem value="high-school">High School</SelectItem>
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
                              <FormLabel>Work Experience</FormLabel>
                              <Select 
                                onValueChange={field.onChange} 
                                defaultValue={field.value}
                              >
                                <FormControl>
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select years" />
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
                      </div>
                    </div>
                    
                    <div className="border-t border-gray-200 pt-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-start">
                          <Info className="h-5 w-5 text-[#E31937] mt-0.5 mr-2 flex-shrink-0" />
                          <p className="text-sm text-gray-600">
                            Our comprehensive assessment service is available for <span className="font-semibold">₹1,000 + GST</span>. 
                            A detailed questionnaire will be sent to your email after payment, and your assessment report will be delivered within 3 working days.
                          </p>
                        </div>
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-[#E31937] hover:bg-red-700 text-white font-bold py-3 group"
                        disabled={assessmentMutation.isPending}
                      >
                        {assessmentMutation.isPending ? "Submitting..." : "Check Your Eligibility (₹1,000 + GST)"}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
}
