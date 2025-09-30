"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Award } from "lucide-react";

const Contact = () => {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Resume
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
          Download my resume or view my qualifications below.
        </p>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <FileText className="w-4 h-4 mr-2" />
          Download PDF Resume
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">Bachelor of Computer Science</h3>
                <p className="text-blue-600 dark:text-blue-400">
                  University of Technology
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  2015 - 2019
                </p>
              </div>
              <div>
                <h3 className="font-semibold">Full Stack Web Development</h3>
                <p className="text-blue-600 dark:text-blue-400">
                  Coding Bootcamp
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2019</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="w-5 h-5" />
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">AWS Certified Developer</h3>
                <p className="text-blue-600 dark:text-blue-400">
                  Amazon Web Services
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2023</p>
              </div>
              <div>
                <h3 className="font-semibold">React Developer Certification</h3>
                <p className="text-blue-600 dark:text-blue-400">Meta</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">2022</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contact;
