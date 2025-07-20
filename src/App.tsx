import React from 'react';
import { Button } from './components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Badge } from './components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from './components/ui/table';
import { Separator } from './components/ui/separator';
import { Input } from './components/ui/input';
import { Textarea } from './components/ui/textarea';
import { Label } from './components/ui/label';
import { Star, Check, Palette, Stamp, Sticker, Crown, Sparkles, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Stamp className="h-8 w-8 text-amber-600" />
              <span className="text-xl font-semibold text-gray-900">LogoCraft Studio</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#packages" className="text-gray-600 hover:text-amber-600 transition-colors">Packages</a>
              <a href="#suppliers" className="text-gray-600 hover:text-amber-600 transition-colors">Suppliers</a>
              <a href="#portfolio" className="text-gray-600 hover:text-amber-600 transition-colors">Portfolio</a>
              <a href="#contact" className="text-gray-600 hover:text-amber-600 transition-colors">Contact</a>
            </nav>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Custom Logo Design with 
              <span className="text-amber-600"> Wax Stamp Magic</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Professional logo design packages with custom stickers and authentic wax stamps. 
              Perfect for small businesses and personal branding that makes a lasting impression.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-white">
                <Palette className="mr-2 h-5 w-5" />
                View Packages
              </Button>
              <Button size="lg" variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                <Star className="mr-2 h-5 w-5" />
                See Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose LogoCraft Studio?</h2>
            <p className="text-lg text-gray-600">Professional design meets authentic craftsmanship</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Logo Design</h3>
              <p className="text-gray-600">Unique logos tailored to your brand identity with unlimited revisions until perfect</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sticker className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Stickers</h3>
              <p className="text-gray-600">High-quality sticker versions of your logo for packaging and branding materials</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stamp className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Authentic Wax Stamps</h3>
              <p className="text-gray-600">Custom wax stamps from premium Australian suppliers for that luxury touch</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Perfect Package</h2>
            <p className="text-lg text-gray-600">From simple logos to complete brand kits</p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
            {/* Basic Package */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Basic — Just the Logo</CardTitle>
                  <Badge variant="secondary">🟢</Badge>
                </div>
                <CardDescription className="text-2xl font-bold text-amber-600">$15–$25 AUD</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Custom logo design</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />1 revision</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />PNG + JPG (with/without background)</li>
                </ul>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Choose Basic</Button>
              </CardContent>
            </Card>

            {/* Standard Package */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Standard — Logo + Sticker</CardTitle>
                  <Badge variant="secondary">🟡</Badge>
                </div>
                <CardDescription className="text-2xl font-bold text-amber-600">$30–$50 AUD</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Everything in Basic</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Sticker version of logo</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Print-ready file</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />1 extra revision</li>
                </ul>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Choose Standard</Button>
              </CardContent>
            </Card>

            {/* Wax Stamp Package */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Wax Stamp — Logo + Wax Stamp</CardTitle>
                  <Badge variant="secondary">🟠</Badge>
                </div>
                <CardDescription className="text-2xl font-bold text-amber-600">$50–$70 AUD</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Everything in Basic</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Wax stamp style logo (gold, silver, red)</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Mockup image</li>
                </ul>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Choose Wax Stamp</Button>
              </CardContent>
            </Card>

            {/* Premium Package */}
            <Card className="relative border-amber-200">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-amber-600">Popular</Badge>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Premium — Logo + Sticker + Wax Stamp</CardTitle>
                  <Badge variant="secondary">🔴</Badge>
                </div>
                <CardDescription className="text-2xl font-bold text-amber-600">$60–$80 AUD</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Logo, sticker, and wax stamp styles</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />2–3 revisions</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />All file formats</li>
                </ul>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Choose Premium</Button>
              </CardContent>
            </Card>

            {/* Elite Package */}
            <Card className="relative">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Elite — All Logo Versions + Mockups</CardTitle>
                  <Badge variant="secondary">🟤</Badge>
                </div>
                <CardDescription className="text-2xl font-bold text-amber-600">$80–$120 AUD</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />All logo styles included</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Professional mockups</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Foil/emboss-ready files</li>
                </ul>
                <Button className="w-full mt-4 bg-amber-600 hover:bg-amber-700">Choose Elite</Button>
              </CardContent>
            </Card>

            {/* Ultimate Brand Kit */}
            <Card className="relative border-2 border-amber-300 bg-gradient-to-br from-amber-50 to-orange-50">
              <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-amber-600 to-orange-600">
                <Crown className="h-3 w-3 mr-1" />
                Ultimate
              </Badge>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Ultimate Brand Kit — Full Branding Suite</CardTitle>
                  <Badge variant="secondary">⚜️</Badge>
                </div>
                <CardDescription className="text-2xl font-bold text-amber-600">$150–$200 AUD</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Everything in Elite plus icon-only and text-only logo versions</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Brand color palette and font choices</li>
                  <li className="flex items-center"><Check className="h-4 w-4 text-green-500 mr-2" />Social media icons and branded mockups</li>
                </ul>
                <Button className="w-full mt-4 bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Choose Ultimate
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Build Your Own Pack */}
          <Card className="border-dashed border-2 border-amber-300">
            <CardHeader className="text-center">
              <CardTitle className="text-xl">Build Your Own Pack — Custom Selection</CardTitle>
              <CardDescription className="text-lg text-amber-600 font-semibold">Starts at $15 AUD</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-4">
                Customize your package by selecting any combination of logos, stickers, stamps, mockups, and revisions. 
                Tailored to your needs with custom pricing.
              </p>
              <Button variant="outline" className="border-amber-600 text-amber-600 hover:bg-amber-50">
                Build Custom Package
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Supplier Comparison */}
      <section id="suppliers" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Wax Stamp Supplier Comparison</h2>
            <p className="text-lg text-gray-600">We work with Australia's best wax stamp suppliers</p>
          </div>
          
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Supplier</TableHead>
                  <TableHead className="font-semibold">Starting Price</TableHead>
                  <TableHead className="font-semibold">Quality Level</TableHead>
                  <TableHead className="font-semibold">Turnaround Time</TableHead>
                  <TableHead className="font-semibold">Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow className="bg-green-50">
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-600">🥇 Best Value</Badge>
                      <span>Kustom Haus</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold text-green-600">$39.95 AUD</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-blue-500 text-blue-600">Normal</Badge>
                  </TableCell>
                  <TableCell>Same/next business day</TableCell>
                  <TableCell>Most affordable & fastest shipping</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Paper Alchemy</TableCell>
                  <TableCell className="font-semibold">$49.95 AUD</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-blue-500 text-blue-600">Normal</Badge>
                  </TableCell>
                  <TableCell>Not specified</TableCell>
                  <TableCell>Good mid-range option</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Sign & Seal</TableCell>
                  <TableCell className="font-semibold">$59.00 AUD</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-purple-500 text-purple-600">Premium</Badge>
                  </TableCell>
                  <TableCell>1–2 business days</TableCell>
                  <TableCell>Fast shipping, high-quality engraving</TableCell>
                </TableRow>
                <TableRow className="bg-amber-50">
                  <TableCell className="font-medium">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-amber-600">🥉 Premium</Badge>
                      <span>Woodruff & Co</span>
                    </div>
                  </TableCell>
                  <TableCell className="font-semibold text-amber-600">$60–$70 AUD</TableCell>
                  <TableCell>
                    <Badge variant="outline" className="border-purple-500 text-purple-600">Premium</Badge>
                  </TableCell>
                  <TableCell>Approximately 2 weeks</TableCell>
                  <TableCell>Premium, artisanal craftsmanship</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          
          <div className="mt-8 p-6 bg-amber-50 rounded-lg">
            <h3 className="text-lg font-semibold text-amber-800 mb-2">Our Recommendation</h3>
            <p className="text-amber-700">
              For most clients, we recommend <strong>Kustom Haus</strong> for the best value and fastest delivery. 
              For luxury branding projects, <strong>Woodruff & Co</strong> offers premium artisanal quality.
            </p>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work</h2>
            <p className="text-lg text-gray-600">See what we've created for other businesses</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Card key={item} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center">
                  <div className="text-center">
                    <Palette className="h-12 w-12 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Logo Design #{item}</p>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900">Brand Project {item}</h3>
                  <p className="text-sm text-gray-600">Complete branding package with wax stamp</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get Your Custom Logo Today</h2>
            <p className="text-lg text-gray-600">Ready to create something amazing? Let's talk!</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-600">hello@logocraftstudio.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-600">+61 400 123 456</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-amber-600" />
                  <span className="text-gray-600">Melbourne, Australia</span>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-semibold text-gray-900 mb-4">How It Works</h4>
                <ol className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start space-x-2">
                    <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">1</span>
                    <span>Send us your business name + logo idea</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">2</span>
                    <span>Pick your package</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">3</span>
                    <span>Approve your design</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="bg-amber-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold">4</span>
                    <span>Get your files, sticker, or wax stamp!</span>
                  </li>
                </ol>
              </div>
            </div>
            
            <Card>
              <CardHeader>
                <CardTitle>Start Your Project</CardTitle>
                <CardDescription>Tell us about your vision</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label htmlFor="name">Business Name</Label>
                  <Input id="name" placeholder="Your business name" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <Label htmlFor="package">Interested Package</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Basic — Just the Logo</option>
                    <option>Standard — Logo + Sticker</option>
                    <option>Wax Stamp — Logo + Wax Stamp</option>
                    <option>Premium — Logo + Sticker + Wax Stamp</option>
                    <option>Elite — All Logo Versions + Mockups</option>
                    <option>Ultimate Brand Kit — Full Branding Suite</option>
                    <option>Build Your Own Pack</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="message">Tell us about your vision</Label>
                  <Textarea id="message" placeholder="Describe your business, style preferences, colors you like..." rows={4} />
                </div>
                <Button className="w-full bg-amber-600 hover:bg-amber-700">
                  Send Project Details
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Stamp className="h-6 w-6 text-amber-400" />
                <span className="text-lg font-semibold">LogoCraft Studio</span>
              </div>
              <p className="text-gray-400 text-sm">
                Professional logo design with authentic wax stamps for businesses that want to make a lasting impression.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>Logo Design</li>
                <li>Custom Stickers</li>
                <li>Wax Stamps</li>
                <li>Brand Packages</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>About Us</li>
                <li>Portfolio</li>
                <li>Contact</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">IG</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-xs">TW</span>
                </div>
              </div>
            </div>
          </div>
          <Separator className="my-8 bg-gray-800" />
          <div className="text-center text-sm text-gray-400">
            <p>&copy; 2024 LogoCraft Studio. All rights reserved. Made with ❤️ in Australia.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;