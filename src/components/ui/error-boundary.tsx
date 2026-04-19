"use client";

import React from 'react';

interface State { hasError: boolean }

export class ErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback?: React.ReactNode },
  State
> {
  constructor(props: { children: React.ReactNode; fallback?: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? (
        <div className="w-full h-full flex items-center justify-center">
          <span className="font-mono text-xs text-muted-foreground tracking-widest">3D UNAVAILABLE</span>
        </div>
      );
    }
    return this.props.children;
  }
}
