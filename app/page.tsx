import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Scale, FileSearch, Brain, Shield, Zap, Users, BookOpen, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-slate-900">
      {/* Navigation */}
      <nav className="border-b bg-white/50 backdrop-blur-sm dark:bg-slate-950/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-slate-900 dark:text-white">Legal AI</span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Features</a>
              <a href="#about" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">About</a>
              <a href="#use-cases" className="text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white transition">Use Cases</a>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <Badge className="mb-4" variant="secondary">
            <Zap className="h-3 w-3 mr-1" />
            Powered by Advanced AI
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            Revolutionizing Legal Work with
            <span className="text-blue-600 block mt-2">Artificial Intelligence</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl">
            Empower your legal practice with AI-driven insights, automated document analysis,
            and intelligent research tools that save time and enhance accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="text-lg px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Watch Demo
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">98%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">10K+</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Legal Professionals</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600">70%</div>
              <div className="text-sm text-slate-600 dark:text-slate-400">Time Saved</div>
            </div>
          </div>
        </div>
      </section>

      <Separator className="container mx-auto" />

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">Features</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Comprehensive AI-Powered Legal Tools
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Our platform provides everything you need to streamline your legal workflow
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <FileSearch className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Document Analysis</CardTitle>
              <CardDescription>
                Automatically extract key information from contracts, agreements, and legal documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Contract clause identification</li>
                <li>• Risk assessment</li>
                <li>• Compliance checking</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <Brain className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Legal Research AI</CardTitle>
              <CardDescription>
                Intelligent case law search and precedent analysis powered by machine learning
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Natural language queries</li>
                <li>• Relevant case discovery</li>
                <li>• Citation analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <Shield className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Compliance Monitoring</CardTitle>
              <CardDescription>
                Stay updated with regulatory changes and ensure compliance across jurisdictions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Real-time regulation updates</li>
                <li>• Compliance alerts</li>
                <li>• Risk mitigation</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <BookOpen className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Contract Drafting</CardTitle>
              <CardDescription>
                Generate accurate legal documents using AI-powered templates and suggestions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Smart clause recommendations</li>
                <li>• Custom templates</li>
                <li>• Version control</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <TrendingUp className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Predictive Analytics</CardTitle>
              <CardDescription>
                Forecast case outcomes and make data-driven legal decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Case outcome prediction</li>
                <li>• Settlement recommendations</li>
                <li>• Cost analysis</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition">
            <CardHeader>
              <Users className="h-10 w-10 text-blue-600 mb-2" />
              <CardTitle>Team Collaboration</CardTitle>
              <CardDescription>
                Seamlessly collaborate with your team on cases and documents
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-400">
                <li>• Real-time collaboration</li>
                <li>• Task management</li>
                <li>• Secure sharing</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-slate-100 dark:bg-slate-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4">About Legal AI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Transforming the Future of Legal Practice
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
              Legal AI is built by legal professionals and AI experts who understand the unique
              challenges of the legal industry. Our mission is to make advanced AI technology
              accessible to law firms of all sizes, enabling them to deliver better outcomes
              for their clients while reducing costs and improving efficiency.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
              We combine cutting-edge natural language processing, machine learning, and
              deep learning technologies to create tools that truly understand legal context
              and provide actionable insights.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">2020</h3>
                <p className="text-slate-600 dark:text-slate-400">Founded</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">500+</h3>
                <p className="text-slate-600 dark:text-slate-400">Law Firms</p>
              </div>
              <div className="bg-white dark:bg-slate-800 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">24/7</h3>
                <p className="text-slate-600 dark:text-slate-400">Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="use-cases" className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <Badge className="mb-4">Use Cases</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Trusted by Legal Professionals Worldwide
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            From solo practitioners to large law firms, Legal AI adapts to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Corporate Law Firms</CardTitle>
              <CardDescription>
                Streamline M&A due diligence, contract review, and compliance management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Reduce document review time by 70% and identify critical issues faster with AI-powered analysis.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Litigation Practices</CardTitle>
              <CardDescription>
                Enhance case research, e-discovery, and outcome prediction capabilities
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Find relevant precedents faster and make data-driven strategic decisions with predictive analytics.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>In-House Legal Teams</CardTitle>
              <CardDescription>
                Manage contracts, track compliance, and reduce external legal costs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Automate routine tasks and focus on strategic initiatives that drive business value.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Solo Practitioners</CardTitle>
              <CardDescription>
                Access enterprise-grade tools at an affordable price point
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 dark:text-slate-400">
                Compete with larger firms by leveraging AI to deliver exceptional service to your clients.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 dark:bg-blue-700 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Legal Practice?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of legal professionals who are already using Legal AI to work smarter and faster.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Start Free 14-Day Trial
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
          <p className="text-blue-100 mt-6 text-sm">
            No credit card required • Full access to all features
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-300 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Scale className="h-6 w-6 text-blue-500" />
                <span className="text-xl font-bold text-white">Legal AI</span>
              </div>
              <p className="text-sm">
                Empowering legal professionals with advanced AI technology.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Features</a></li>
                <li><a href="#" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition">Security</a></li>
                <li><a href="#" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">About Us</a></li>
                <li><a href="#" className="hover:text-white transition">Careers</a></li>
                <li><a href="#" className="hover:text-white transition">Blog</a></li>
                <li><a href="#" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Legal</h3>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition">Compliance</a></li>
              </ul>
            </div>
          </div>
          <Separator className="bg-slate-700 mb-8" />
          <div className="text-center text-sm">
            <p>&copy; 2026 Legal AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
