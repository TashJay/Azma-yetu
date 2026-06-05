export function Footer() {
  return (
    <footer id="contact" className="bg-forest-900 border-t border-forest-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-2">
            <a href="#" className="font-display font-bold text-3xl text-white mb-6 block">
              Azma Yetu<span className="text-ochre-500">.</span>
            </a>
            <p className="text-emerald-50/80 max-w-md leading-relaxed mb-8">
              A community-based organization striving for sustainable development, empowering the youth and marginalized groups in Kenya. Join us to make a lasting difference.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-emerald-50/70 hover:text-ochre-400 transition-colors">About Us</a></li>
              <li><a href="#initiatives" className="text-emerald-50/70 hover:text-ochre-400 transition-colors">Our Initiatives</a></li>
              <li><a href="#impact" className="text-emerald-50/70 hover:text-ochre-400 transition-colors">Impact Stories</a></li>
              <li><a href="#volunteer" className="text-emerald-50/70 hover:text-ochre-400 transition-colors">Volunteer</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex flex-col">
                <span className="text-emerald-50/50 text-sm mb-1">Email us at</span>
                <a href="mailto:Azmayetucbo@gmail.com" className="text-ochre-400 hover:text-ochre-300 font-medium transition-colors">
                  Azmayetucbo@gmail.com
                </a>
              </li>
              <li className="flex flex-col mt-4">
                <span className="text-emerald-50/50 text-sm mb-1">Location</span>
                <span className="text-emerald-50/80">Nairobi, Kenya</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-forest-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-emerald-50/50 text-sm">
            &copy; {new Date().getFullYear()} Azma Yetu CBO. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-emerald-50/50 hover:text-ochre-400 transition-colors text-sm">Privacy Policy</a>
            <a href="#" className="text-emerald-50/50 hover:text-ochre-400 transition-colors text-sm">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
