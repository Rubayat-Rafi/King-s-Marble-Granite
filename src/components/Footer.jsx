import React from 'react';
import { Link } from 'react-router';
import { MEDIA_ASSETS } from '../data/content';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171717] text-[#F5F1E8] border-t border-[#33312D] pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-[#33312D]">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <img
                src={MEDIA_ASSETS.logo}
                alt="King's Marble & Granite"
                className="h-14 w-auto object-contain brightness-110"
              />
            </Link>
            <p className="text-sm text-[#DED5C5] max-w-sm leading-relaxed">
              Direct importers and master fabricators of rare Italian marble, Brazilian quartzite,
              and granite. Specializing in vein-matched waterfall islands, monolithic backsplashes, and custom stone installations.
            </p>
            <div className="pt-2 text-xs text-[#C9A44C] font-semibold tracking-wider">
              ✦ 15-Year Craftsmanship &amp; Stain Warranty
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold tracking-wider text-[#C9A44C]">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs uppercase tracking-wider text-[#DED5C5]">
              <li>
                <Link to="/" className="hover:text-[#C9A44C] transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#C9A44C] transition-colors">About Our Craft</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#C9A44C] transition-colors">Services &amp; Edges</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#C9A44C] transition-colors">Project Gallery</Link>
              </li>
              <li>
                <Link to="/materials" className="hover:text-[#C9A44C] transition-colors">Stone Catalog</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#C9A44C] transition-colors">Get An Estimate</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold tracking-wider text-[#C9A44C]">
              Specialties
            </h4>
            <ul className="space-y-2.5 text-xs tracking-wider text-[#DED5C5]">
              <li>Waterfall Kitchen Islands</li>
              <li>Full-Height Slab Backsplashes</li>
              <li>Bookmatched Marble Walls</li>
              <li>Floating Master Vanities</li>
              <li>Outdoor Chef Kitchens</li>
              <li>Floor-to-Ceiling Fireplaces</li>
            </ul>
          </div>

          {/* Showroom & Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-bold tracking-wider text-[#C9A44C]">
              Showroom &amp; Shop
            </h4>
            <address className="not-italic text-xs text-[#DED5C5] space-y-2 leading-relaxed">
              <p className="font-semibold text-[#F5F1E8]">
                1848 Industrial Blvd<br />
                Harvey, LA 70058, United States
              </p>
              <div className="pt-1 space-y-0.5 text-[11px] text-[#A6A49E]">
                <p>Monday – Saturday: 8:00 AM – 5:00 PM</p>
                <p className="text-[#C9A44C]">Sunday: Closed</p>
              </div>
              <p className="pt-2 text-[#C9A44C] font-semibold">
                <a href="tel:+15047237898" className="hover:underline">
                  +1 (504) 723-7898
                </a>
              </p>
              <p className="text-[#DED5C5]">
                info@kingsmarbleandgranite.com
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-[#777168]">
          <p>© {currentYear} King&apos;s Marble &amp; Granite. All rights reserved.</p>
          <div className="flex gap-6 uppercase tracking-wider text-[11px]">
            <span>1848 Industrial Blvd, Harvey, LA</span>
            <span>Sub-Millimeter Laser Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
