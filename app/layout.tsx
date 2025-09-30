/*                                                                                
                                     ,----,                          ,-.----.    
           .---.   ,---,           .'   .`|                          \    /  \   
          /. ./|  '  .' \       .'   .'   ;       ,--,          ,--, |   :    \  
      .--'.  ' ; /  ;    '.   ,---, '    .'     ,'_ /|        ,'_ /| |   |  .\ : 
     /__./ \ : |:  :       \  |   :     ./ .--. |  | :   .--. |  | : .   :  |: | 
 .--'.  '   \' .:  |   /\   \ ;   | .'  /,'_ /| :  . | ,'_ /| :  . | |   |   \ : 
/___/ \ |    ' '|  :  ' ;.   :`---' /  ; |  ' | |  . . |  ' | |  . . |   : .   / 
;   \  \;      :|  |  ;/  \   \ /  ;  /  |  | ' |  | | |  | ' |  | | ;   | |`-'  
 \   ;  `      |'  :  | \  \ ,';  /  /--,:  | | :  ' ; :  | | :  ' ; |   | ;     
  .   \    .\  ;|  |  '  '--' /  /  / .`||  ; ' |  | ' |  ; ' |  | ' :   ' |     
   \   \   ' \ ||  :  :     ./__;       ::  | : ;  ; | :  | : ;  ; | :   : :     
    :   '  |--" |  | ,'     |   :     .' '  :  `--'   \'  :  `--'   \|   | :     
     \   \ ;    `--''       ;   |  .'    :  ,      .-./:  ,      .-./`---'.|     
      '---"                 `---'         `--`----'     `--`----'      `---`     
*/

import type { Metadata } from "next";
import { Pixelify_Sans } from "next/font/google";
import "./globals.css";

const PixelifySans = Pixelify_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wazuup Discord Bot",
  description: "Another Discord bot used for Quoting, image editing and some fun user interactive games!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black">
      <body
        className={PixelifySans.className}>
        {children}
      </body>
    </html>
  );
}
