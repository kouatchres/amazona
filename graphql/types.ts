import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

export interface Context {
  prisma: PrismaClient;
  req: Request;
  res: Response;
  userId: string;
}

export interface Token {
  userId: string;
  type: string;
  timestamp: number;
}
