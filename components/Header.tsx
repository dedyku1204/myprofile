import React from 'react'
import Image from 'next/image'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { ToggleMode } from '@/components/ToggleMode'



const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between w-full px-6 py-4 border-b">
        <div className="flex items-center gap-6">
          <Image
            src="/next.svg"
            alt="Logo"
            width={120}
            height={30}
            className="dark:invert"
          />
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Beranda</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <NavigationMenuLink>Dashboard</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>Overview</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Produk</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[200px]">
                      <li>
                        <NavigationMenuLink>Semua Produk</NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink>Kategori</NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink>Kontak</NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <div className="ml-auto relative w-64">
          <Input
            type="search"
            placeholder="Cari..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        </div>
        <div className="ml-[10px] relative ">
          <ToggleMode />
        </div>
      </div>
    </div>
  )
}

export default Header