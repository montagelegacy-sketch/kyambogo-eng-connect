import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navigationItems = [
    { name: "Home", href: "/" },
    { 
      name: "About Us", 
      href: "/about",
      dropdown: [
        { name: "Our History", href: "/about#history" },
        { name: "Mission & Vision", href: "/about#mission" },
        { name: "Leadership Team", href: "/about#team" },
        { name: "Awards", href: "/about#awards" }
      ]
    },
    { 
      name: "Departments", 
      href: "/departments",
      dropdown: [
        { name: "Civil Engineering", href: "/departments/civil" },
        { name: "Electrical Engineering", href: "/departments/electrical" },
        { name: "Mechanical Engineering", href: "/departments/mechanical" },
        { name: "Bio-Medical & Mechatronics", href: "/departments/biomedical-mechatronics" },
        { name: "Mining, Chemical & Petroleum", href: "/departments/mining-chemical-petroleum" }
      ]
    },
    { 
      name: "Projects", 
      href: "/projects",
      dropdown: [
        { name: "Current Projects", href: "/projects#current" },
        { name: "Completed Projects", href: "/projects#completed" },
        { name: "Research Initiatives", href: "/projects#research" }
      ]
    },
    { 
      name: "Events", 
      href: "/events",
      dropdown: [
        { name: "Upcoming Events", href: "/events#upcoming" },
        { name: "Past Events", href: "/events#past" },
        { name: "Workshops", href: "/events#workshops" },
        { name: "Seminars", href: "/events#seminars" }
      ]
    },
    { 
      name: "Membership", 
      href: "/membership",
      dropdown: [
        { name: "Join Us", href: "/join" },
        { name: "Benefits", href: "/benefits" },
        { name: "Member Portal", href: "/membership#portal" }
      ]
    },
    { name: "Blog", href: "/blog" },
    { name: "Alumni", href: "/alumni" },
    { name: "Contact", href: "/contact" }
  ];

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary">
              <span className="text-lg font-bold text-primary-foreground">K</span>
            </div>
            <div className="hidden md:block">
              <span className="text-xl font-bold text-kyues-red">KYUES</span>
              <p className="text-sm text-muted-foreground">Engineering Society</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <div
                  className="flex items-center space-x-1 cursor-pointer"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                  onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
                >
                  <Link
                    to={item.href}
                    className={cn(
                      "px-3 py-2 text-sm font-medium transition-colors hover:text-primary",
                      isActive(item.href)
                        ? "text-primary"
                        : "text-foreground"
                    )}
                  >
                    {item.name}
                  </Link>
                  {item.dropdown && (
                    <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform group-hover:rotate-180" />
                  )}
                </div>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <div 
                    className="absolute left-0 top-full w-64 bg-popover border border-border rounded-lg shadow-medium py-2 z-50"
                    onMouseEnter={() => setActiveDropdown(item.name)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.name}
                        to={dropdownItem.href}
                        className="block px-4 py-2 text-sm text-popover-foreground hover:bg-muted hover:text-primary transition-colors"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="kyues" size="sm" className="hidden md:inline-flex">
              Join KYUES
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <div className="flex items-center justify-between">
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 text-base font-medium transition-colors",
                        isActive(item.href)
                          ? "text-primary bg-muted"
                          : "text-foreground hover:text-primary hover:bg-muted"
                      )}
                      onClick={() => !item.dropdown && setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        <ChevronDown 
                          className={cn(
                            "h-4 w-4 transition-transform",
                            activeDropdown === item.name ? "rotate-180" : ""
                          )} 
                        />
                      </Button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === item.name && (
                    <div className="pl-6 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          to={dropdownItem.href}
                          className="block px-3 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 border-t border-border">
                <Button variant="kyues" className="w-full">
                  Join KYUES
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;