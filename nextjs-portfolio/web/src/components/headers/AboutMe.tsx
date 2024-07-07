import { Globe, Mail, File } from 'lucide-react';
import React from 'react'
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

type Props = {
  name: string;
  role: string;
  availability: "available" | "open" | "unavailable";
  location: string;
  email: string;
  image: string;
  resume: string;
  currentCompany: { title: string; role: string; duration: string };
}

export default function AboutMe({ name, role, availability, location, email, image, resume, currentCompany }: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-start gap-4 p-2 px-4 space-y-4 mb-4">
      <div className="w-full flex justify-between items-center">
        {/* role, avail */}
        <div className="inline-flex gap-1 justify-center items-center text-sm">
          <Globe size={18} />
          {role}
        </div>
        <div className="inline-flex gap-1 justify-center items-center text-sm">
          <Badge className={cn(availability === "available" ? "bg-green-500 text-green-200" : availability === "open" ? "bg-yellow-500 text-yellow-200" : "bg-red-500 text-red-200")}>
            {availability === "available" ? "Available" : availability === "open" ? "Open to opportunities" : "Unavailable"}
          </Badge>
        </div>
      </div>
      <div className="w-full flex justify-between items-center">
        {/* name, location, currentCompany, image */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-3xl font-bold">Hello, I&apos;m, {name}</h1>
          <p>{role} based in {location}</p>
          <p>Currently {currentCompany.role} @ {currentCompany.title} for {currentCompany.duration} years</p>
        </div>
        <img src={image} alt={name} className="h-24 w-24 object-cover rounded-lg" />
      </div>
      <div className="flex justify-center items-center gap-2">
        {/* Resume, email */}
        <Link href={`mailto:${email}`}>
          <Button variant="outline" className="flex justify-center items-center gap-2">
            <Mail size="18" />
            Email Me
          </Button>
        </Link>
        <Link href={resume}>
          <Button variant="outline" className="flex justify-center items-center gap-2">
              <File size="18" />
              Resume
          </Button>
        </Link>
      </div>
    </div>
  )
}