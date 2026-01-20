// Added React import to resolve React namespace in .ts file
import React from 'react';

export interface ProgramPillar {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}