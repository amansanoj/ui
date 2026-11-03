import React, { useState, useEffect } from 'react';
import {
  Button,
  Badge,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Input,
  Textarea,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuLabel,
  Separator,
  Container,
} from '@amansanoj/ui';

export function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [btnLoading, setBtnLoading] = useState<boolean>(false);

  // Sync theme
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = saved === 'dark' || (!saved && prefersDark);
    setIsDark(initialDark);
    document.documentElement.classList.toggle('dark', initialDark);
    document.documentElement.style.colorScheme = initialDark ? 'dark' : 'light';
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    const update = () => {
      setIsDark(nextDark);
      document.documentElement.classList.toggle('dark', nextDark);
      document.documentElement.style.colorScheme = nextDark ? 'dark' : 'light';
      localStorage.setItem('theme', nextDark ? 'dark' : 'light');
    };

    if ('startViewTransition' in document) {
      (document as any).startViewTransition(update);
    } else {
      update();
    }
  };

  const copyValue = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId((curr) => (curr === id ? null : curr));
    }, 1500);
  };

  const simulateLoading = () => {
    setBtnLoading(true);
    setTimeout(() => setBtnLoading(false), 2000);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col items-center pt-16 px-5 pb-20 font-body antialiased leading-normal">
      {/* =====================================================================
           Page wrapper — constrained to max-w-5xl
      ====================================================================== */}
      <div className="w-full max-w-5xl flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h1 className="text-5xl font-semibold font-display tracking-normal">
              UI System
            </h1>

            {/* Header actions: theme toggle, NPM, GitHub */}
            <nav className="flex items-center gap-5" aria-label="Header actions">
              {/* Theme toggle */}
              <button
                type="button"
                onClick={toggleTheme}
                className="text-muted-foreground hover:text-secondary transition-colors duration-200 flex items-center cursor-pointer"
                aria-label="Toggle dark mode"
              >
                {isDark ? (
                  <i className="ph-duotone ph-sun text-[2rem]"></i>
                ) : (
                  <i className="ph-duotone ph-moon text-[2rem]"></i>
                )}
              </button>

              {/* NPM link */}
              <a
                href="https://www.npmjs.com/package/@amansanoj/ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors duration-200 flex items-center"
                aria-label="View on NPM"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                >
                  <title>npm</title>
                  <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
                </svg>
              </a>

              {/* GitHub link */}
              <a
                href="https://github.com/amansanoj/ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-secondary transition-colors duration-200 flex items-center"
                aria-label="View on GitHub"
              >
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  width="2rem"
                  height="2rem"
                  fill="currentColor"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </nav>
          </div>

          <p className="text-xl text-muted-foreground">
            Pre-styled, high-performance React 19 component library.
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-3 mt-3">
            <button
              type="button"
              onClick={() => copyValue('install-cmd', 'bun add @amansanoj/ui @amansanoj/brand')}
              className="w-max px-4 py-2 text-sm font-semibold bg-muted border border-border text-foreground rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all flex items-center gap-2 cursor-pointer"
            >
              <i className="ph-duotone ph-terminal text-base"></i>
              {copiedId === 'install-cmd' ? 'Copied to Clipboard!' : 'bun add @amansanoj/ui'}
            </button>
            <a
              href="https://amansanoj.is-a.dev/brand/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-max px-4 py-2 text-sm font-semibold bg-muted border border-border text-foreground rounded-lg hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all flex items-center gap-2"
            >
              Brand Styleguide <i className="ph-duotone ph-arrow-up-right text-base"></i>
            </a>
          </div>
        </header>

        <hr className="border-border border-t-2" />
      </div>

      {/* =====================================================================
           Main content — constrained to max-w-4xl
      ====================================================================== */}
      <div className="w-full max-w-4xl flex flex-col gap-12 pt-12 pb-12">
        {/* Intro description */}
        <div className="flex flex-col gap-1 mb-2">
          <h2 className="text-3xl font-semibold font-display">
            Components
          </h2>
          <p className="text-base text-muted-foreground">
            Click any format badge to copy the exact JSX snippet or tree-shakeable subpath import.
          </p>
        </div>

        {/* ═══════════════════════════════════════════════════════════════════
            1. BUTTON
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold font-display border-b border-border pb-2 capitalize">
            Button
          </h3>
          <p className="text-sm text-muted-foreground -mt-2">
            cva variants with React 19 native ref, loading spinner, and composition via Base UI render prop and Radix Slot.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 palette-grid">
            {/* Swatch Card: Variants */}
            <div className="swatch-card flex flex-col rounded-xl border border-border bg-background overflow-hidden">
              <div className="w-full border-b border-border/50 p-6 bg-muted/20 min-h-[140px] flex flex-wrap items-center justify-center gap-2.5">
                <Button variant="default">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="accent">Accent</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="link">Link</Button>
              </div>
              <div className="p-3 flex items-center justify-between w-full">
                <span className="font-semibold text-foreground text-sm">Variants</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      copyValue(
                        'btn-var-jsx',
                        '<Button variant="default">Primary</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="accent">Accent</Button>\n<Button variant="outline">Outline</Button>'
                      )
                    }
                    className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                      copiedId === 'btn-var-jsx'
                        ? '!bg-accent !border-accent !text-accent-foreground'
                        : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    {copiedId === 'btn-var-jsx' ? 'Copied!' : 'JSX'}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      copyValue('btn-var-import', "import { Button } from '@amansanoj/ui/button';")
                    }
                    className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                      copiedId === 'btn-var-import'
                        ? '!bg-accent !border-accent !text-accent-foreground'
                        : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    {copiedId === 'btn-var-import' ? 'Copied!' : 'IMPORT'}
                  </button>
                </div>
              </div>
            </div>

            {/* Swatch Card: Sizes & States */}
            <div className="swatch-card flex flex-col rounded-xl border border-border bg-background overflow-hidden">
              <div className="w-full border-b border-border/50 p-6 bg-muted/20 min-h-[140px] flex flex-wrap items-center justify-center gap-2.5">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button
                  isLoading={btnLoading}
                  onClick={simulateLoading}
                  variant="outline"
                  size="sm"
                >
                  {btnLoading ? 'Loading' : 'Click to Load'}
                </Button>
                <Button disabled size="sm">Disabled</Button>
              </div>
              <div className="p-3 flex items-center justify-between w-full">
                <span className="font-semibold text-foreground text-sm">Sizes & States</span>
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() =>
                      copyValue(
                        'btn-size-jsx',
                        '<Button size="sm">Small</Button>\n<Button size="md">Medium</Button>\n<Button size="lg">Large</Button>\n<Button isLoading>Loading</Button>'
                      )
                    }
                    className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                      copiedId === 'btn-size-jsx'
                        ? '!bg-accent !border-accent !text-accent-foreground'
                        : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    {copiedId === 'btn-size-jsx' ? 'Copied!' : 'JSX'}
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      copyValue('btn-size-import', "import { Button } from '@amansanoj/ui/button';")
                    }
                    className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                      copiedId === 'btn-size-import'
                        ? '!bg-accent !border-accent !text-accent-foreground'
                        : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                    }`}
                  >
                    {copiedId === 'btn-size-import' ? 'Copied!' : 'IMPORT'}
                  </button>
                </div>
              </div>
            </div>

            {/* Swatch Card: Polymorphism */}
            <div className="swatch-card flex flex-col rounded-xl border border-border bg-background overflow-hidden md:col-span-2">
              <div className="w-full border-b border-border/50 p-6 bg-muted/20 min-h-[100px] flex flex-wrap items-center justify-center gap-4">
                <Button
                  render={<a href="https://github.com/amansanoj" target="_blank" rel="noreferrer" />}
                  variant="default"
                >
                  Render as &lt;a&gt; Link
                  <i className="ph-duotone ph-arrow-up-right text-base"></i>
                </Button>
                <Button
                  render={<a href="https://npmjs.com/package/@amansanoj/ui" target="_blank" rel="noreferrer" />}
                  variant="outline"
                >
                  NPM Registry Package
                  <i className="ph-duotone ph-arrow-up-right text-base"></i>
                </Button>
              </div>
              <div className="p-3 flex items-center justify-between w-full">
                <div className="flex flex-col gap-0.5">
                  <span className="font-semibold text-foreground text-sm">Base UI Polymorphic Render Prop</span>
                  <span className="text-xs text-muted-foreground">Renders true semantic anchor tag without TypeScript casting</span>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'btn-render-jsx',
                      '<Button render={<a href="https://github.com" />} variant="outline">\n  GitHub\n</Button>'
                    )
                  }
                  className={`copy-btn py-1.5 px-3 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'btn-render-jsx'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'btn-render-jsx' ? 'Copied!' : 'JSX'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border border-t-2" />

        {/* ═══════════════════════════════════════════════════════════════════
            2. BADGE
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold font-display border-b border-border pb-2 capitalize">
            Badge
          </h3>
          <p className="text-sm text-muted-foreground -mt-2">
            Pure Server Component indicators for status tags, metric highlights, and categorization.
          </p>

          <div className="swatch-card flex flex-col rounded-xl border border-border bg-background overflow-hidden">
            <div className="w-full border-b border-border/50 p-8 bg-muted/20 min-h-[120px] flex flex-wrap items-center justify-center gap-3">
              <Badge variant="default">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="accent">Accent Tag</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="muted">Muted</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </div>
            <div className="p-3 flex items-center justify-between w-full">
              <span className="font-semibold text-foreground text-sm capitalize">All Variants</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'badge-jsx',
                      '<Badge variant="default">Primary</Badge>\n<Badge variant="secondary">Secondary</Badge>\n<Badge variant="accent">Accent</Badge>\n<Badge variant="outline">Outline</Badge>'
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'badge-jsx'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'badge-jsx' ? 'Copied!' : 'JSX'}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    copyValue('badge-import', "import { Badge } from '@amansanoj/ui/badge';")
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'badge-import'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'badge-import' ? 'Copied!' : 'IMPORT'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border border-t-2" />

        {/* ═══════════════════════════════════════════════════════════════════
            3. CARD
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold font-display border-b border-border pb-2 capitalize">
            Card
          </h3>
          <p className="text-sm text-muted-foreground -mt-2">
            Server Component compound structure with Card, CardHeader, CardTitle, CardDescription, CardContent, and CardFooter.
          </p>

          <div className="swatch-card flex flex-col rounded-xl border border-border bg-background overflow-hidden">
            <div className="w-full border-b border-border/50 p-8 bg-muted/20 min-h-[180px] flex items-center justify-center">
              <div className="w-full max-w-md">
                <Card>
                  <CardHeader>
                    <div className="flex justify-between items-center">
                      <CardTitle>Architecture Audit</CardTitle>
                      <Badge variant="accent">Active</Badge>
                    </div>
                    <CardDescription>Strict RSC hygiene and zero-bloat runtime.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Exports compiled pure Server Components and granular client hooks without Radix copy-paste baggage.
                    </p>
                  </CardContent>
                  <CardFooter className="justify-between">
                    <span className="text-xs text-muted-foreground font-mono">v0.1.0</span>
                    <Button size="sm" variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="p-3 flex items-center justify-between w-full">
              <span className="font-semibold text-foreground text-sm capitalize">Compound Card</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'card-jsx',
                      '<Card>\n  <CardHeader>\n    <CardTitle>Title</CardTitle>\n    <CardDescription>Description</CardDescription>\n  </CardHeader>\n  <CardContent>Content</CardContent>\n  <CardFooter>Footer</CardFooter>\n</Card>'
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'card-jsx'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'card-jsx' ? 'Copied!' : 'JSX'}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'card-import',
                      "import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@amansanoj/ui/card';"
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'card-import'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'card-import' ? 'Copied!' : 'IMPORT'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border border-t-2" />

        {/* ═══════════════════════════════════════════════════════════════════
            4. INPUT & TEXTAREA
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold font-display border-b border-border pb-2 capitalize">
            Input & Textarea
          </h3>
          <p className="text-sm text-muted-foreground -mt-2">
            Universal controls with React 19 native ref forwarding, focus-visible ring styling, and disabled states.
          </p>

          <div className="swatch-card flex flex-col rounded-xl border border-border bg-background overflow-hidden">
            <div className="w-full border-b border-border/50 p-8 bg-muted/20 min-h-[160px] flex flex-col gap-4 max-w-lg mx-auto">
              <Input placeholder="Enter email address..." />
              <Input disabled value="readonly_api_token_preview" />
              <Textarea placeholder="Type project description or feedback here..." rows={2} />
            </div>
            <div className="p-3 flex items-center justify-between w-full">
              <span className="font-semibold text-foreground text-sm capitalize">Form Controls</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'input-jsx',
                      '<Input placeholder="Enter email..." />\n<Textarea rows={3} placeholder="Notes..." />'
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'input-jsx'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'input-jsx' ? 'Copied!' : 'JSX'}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'input-import',
                      "import { Input } from '@amansanoj/ui/input';\nimport { Textarea } from '@amansanoj/ui/textarea';"
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'input-import'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'input-import' ? 'Copied!' : 'IMPORT'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border border-t-2" />

        {/* ═══════════════════════════════════════════════════════════════════
            5. DIALOG & DROPDOWN MENU
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold font-display border-b border-border pb-2 capitalize">
            Dialog & Dropdown Menu
          </h3>
          <p className="text-sm text-muted-foreground -mt-2">
            Client Components ('use client') powered by @base-ui/react primitives with backdrop blur, spring scaling, keyboard navigation, and context-resilient labels.
          </p>

          <div className="swatch-card flex flex-col rounded-xl border border-border bg-background overflow-hidden">
            <div className="w-full border-b border-border/50 p-8 bg-muted/20 min-h-[140px] flex flex-wrap items-center justify-center gap-4">
              {/* Dialog Trigger */}
              <Dialog>
                <DialogTrigger
                  render={
                    <Button variant="default">
                      <i className="ph-duotone ph-shield-check text-base"></i>
                      Open Modal
                    </Button>
                  }
                />
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Deployment Settings</DialogTitle>
                    <DialogDescription>
                      Configure edge cluster and token caching parameters.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="flex flex-col gap-3 my-4">
                    <Input defaultValue="amansanoj-edge-prod" />
                    <Textarea defaultValue="Running on Bun runtime with React 19." rows={2} />
                  </div>
                  <DialogFooter>
                    <DialogClose render={<Button variant="outline">Cancel</Button>} />
                    <Button variant="default">Save</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              {/* Dropdown Menu Trigger */}
              <DropdownMenu>
                <DropdownMenuTrigger
                  render={
                    <Button variant="outline">
                      Action Menu
                      <i className="ph-duotone ph-dots-three-vertical text-base"></i>
                    </Button>
                  }
                />
                <DropdownMenuContent>
                  <DropdownMenuLabel>Account</DropdownMenuLabel>
                  <DropdownMenuItem>
                    <i className="ph-duotone ph-user mr-2 text-base"></i> Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <i className="ph-duotone ph-gear mr-2 text-base"></i> Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuLabel>Danger Zone</DropdownMenuLabel>
                  <DropdownMenuItem destructive>
                    <i className="ph-duotone ph-trash mr-2 text-base"></i> Delete Project
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <div className="p-3 flex items-center justify-between w-full">
              <span className="font-semibold text-foreground text-sm capitalize">Interactive Overlays</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'dialog-jsx',
                      '<Dialog>\n  <DialogTrigger render={<Button>Open</Button>} />\n  <DialogContent>\n    <DialogHeader>\n      <DialogTitle>Title</DialogTitle>\n    </DialogHeader>\n    Content\n  </DialogContent>\n</Dialog>'
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'dialog-jsx'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'dialog-jsx' ? 'Copied!' : 'JSX'}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'dialog-import',
                      "import { Dialog, DialogTrigger, DialogContent } from '@amansanoj/ui/dialog';\nimport { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent } from '@amansanoj/ui/dropdown-menu';"
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'dialog-import'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'dialog-import' ? 'Copied!' : 'IMPORT'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-border border-t-2" />

        {/* ═══════════════════════════════════════════════════════════════════
            6. SEPARATOR & CONTAINER
        ═══════════════════════════════════════════════════════════════════ */}
        <div className="flex flex-col gap-4">
          <h3 className="text-2xl font-semibold font-display border-b border-border pb-2 capitalize">
            Separator & Container
          </h3>
          <p className="text-sm text-muted-foreground -mt-2">
            Accessible semantic divider with orientation roles, and responsive layout wrapper with preset max-width breakpoints.
          </p>

          <div className="swatch-card flex flex-col rounded-xl border border-border bg-background overflow-hidden">
            <div className="w-full border-b border-border/50 p-8 bg-muted/20 min-h-[120px] flex flex-col items-center justify-center gap-4">
              <div className="flex items-center gap-4 text-sm font-medium">
                <span>Overview</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Components</span>
                <Separator orientation="vertical" className="h-4" />
                <span>Tokens</span>
              </div>
              <Separator orientation="horizontal" className="w-full max-w-sm" />
              <div className="w-full max-w-sm bg-muted/60 p-2 rounded text-center text-xs font-mono text-muted-foreground">
                &lt;Container size="sm" /&gt; (640px max-width)
              </div>
            </div>
            <div className="p-3 flex items-center justify-between w-full">
              <span className="font-semibold text-foreground text-sm capitalize">Layout Utilities</span>
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'sep-jsx',
                      '<Separator orientation="vertical" className="h-4" />\n<Container size="md">Content</Container>'
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'sep-jsx'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'sep-jsx' ? 'Copied!' : 'JSX'}
                </button>
                <button
                  type="button"
                  onClick={() =>
                    copyValue(
                      'sep-import',
                      "import { Separator } from '@amansanoj/ui/separator';\nimport { Container } from '@amansanoj/ui/container';"
                    )
                  }
                  className={`copy-btn py-1.5 px-2.5 text-[10px] font-bold tracking-wider rounded border border-border transition-colors cursor-pointer ${
                    copiedId === 'sep-import'
                      ? '!bg-accent !border-accent !text-accent-foreground'
                      : 'bg-muted text-muted-foreground hover:border-primary hover:bg-primary hover:text-primary-foreground'
                  }`}
                >
                  {copiedId === 'sep-import' ? 'Copied!' : 'IMPORT'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =====================================================================
           Footer (Matching amansanoj.is-a.dev/brand)
      ====================================================================== */}
      <div className="w-full max-w-5xl flex flex-col gap-12">
        <footer className="w-full max-w-5xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mt-8 pt-8 border-t-2 border-border pb-8">
          <div className="flex flex-col gap-2 text-left">
            <h4 className="text-2xl font-semibold font-display tracking-normal text-foreground">
              © 2026 Aman Sanoj
            </h4>
            <p className="text-base text-muted-foreground leading-relaxed">
              Built with{' '}
              <a
                href="https://www.npmjs.com/package/@amansanoj/ui"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-secondary transition-colors underline decoration-border hover:decoration-secondary underline-offset-4"
              >
                @amansanoj/ui
              </a>
              ,{' '}
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-secondary transition-colors underline decoration-border hover:decoration-secondary underline-offset-4"
              >
                Tailwind CSS
              </a>
              ,{' '}
              <a
                href="https://fonts.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-secondary transition-colors underline decoration-border hover:decoration-secondary underline-offset-4"
              >
                Google Fonts
              </a>
              ,{' '}
              <a
                href="https://phosphoricons.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-secondary transition-colors underline decoration-border hover:decoration-secondary underline-offset-4"
              >
                Phosphor Icons
              </a>{' '}
              and{' '}
              <a
                href="https://simpleicons.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium hover:text-secondary transition-colors underline decoration-border hover:decoration-secondary underline-offset-4"
              >
                Simple Icons
              </a>
              .
            </p>
          </div>

          <nav className="flex items-center gap-5" aria-label="Footer navigation">
            <a
              href="https://amansanoj.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-secondary transition-colors duration-200 flex items-center"
              aria-label="Visit amansanoj.com"
            >
              <i className="ph-duotone ph-globe text-[2.5rem]"></i>
            </a>
          </nav>
        </footer>
      </div>
    </div>
  );
}
