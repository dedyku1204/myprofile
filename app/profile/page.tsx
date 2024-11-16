import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

const SkillData = [
  {
    Skillname: "React"
  },
  {
    Skillname: "Next.js"
  },
  {
    Skillname: "TypeScript"
  },
  {
    Skillname: "TailwindCSS"
  }
]

export default function page() {
  return (
    <div className="container mx-auto py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Bagian Kiri - Foto dan Nama */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-48 h-48 rounded-full overflow-hidden">
            <Image
              src="/fotoku.jpg" 
              alt="Profile Photo"
              fill
              className="object-cover"
            />
          </div>
          <h1 className="text-3xl font-bold">DEDY KURNIAWAN</h1>
          <p className="text-xl text-muted-foreground">Dodolan Ecobrick</p>
        </div>

        {/* Bagian Kanan - Tabs */}
        <div>
          <p className="text-lg mb-6">
            Saya adalah seorang web developer yang bersemangat dalam menciptakan solusi digital yang inovatif. 
            Dengan pengalaman bertahun-tahun dalam pengembangan web, saya selalu berusaha mengikuti 
            perkembangan teknologi terbaru.
          </p>

          <Tabs defaultValue="skills" className="w-full">
            <TabsList>
              <TabsTrigger value="skills">Keahlian</TabsTrigger>
              <TabsTrigger value="education">Pendidikan</TabsTrigger>
              <TabsTrigger value="experience">Pengalaman</TabsTrigger>
            </TabsList>
            
            <TabsContent value="skills">
              <Card>
                <CardContent className="space-y-4 pt-4">
                  <div>
                    <h3 className="font-bold mb-2">Technical Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {SkillData.map((item, index) => (
                        <span key={index} className="px-3 py-1 bg-primary/10 rounded-full">{item.Skillname}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education">
              <Card>
                <CardContent className="space-y-4 pt-4">
                  <div>
                    <h3 className="font-bold">Institut Isuk Turu Awan Turu</h3>
                    <p className="text-sm text-muted-foreground">Sarjana Teknik Informatika</p>
                    <p className="text-sm">2015 - 2020</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience">
              <Card>
                <CardContent className="space-y-4 pt-4">
                  <div>
                    <h3 className="font-bold">Web Developer - PT Example</h3>
                    <p className="text-sm text-muted-foreground">2022 - Sekarang</p>
                    <p className="text-sm">Mengembangkan dan memelihara aplikasi web menggunakan React dan Next.js</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}


