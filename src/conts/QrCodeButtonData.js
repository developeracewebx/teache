import androidQrCode from '../assets/android_qr_code.png'
import iosQrCode from '../assets/ios_qr_code.png'
import { AppleIcon, GoogleIcon } from "../ui/icons";
export const qrCodeButtonsData = [
    {
      qrcode: iosQrCode,
      href: "https://apps.apple.com/us/app/teache/id1588906674",
      icon: <AppleIcon />,
      bg: "blue",
      text: "Apple Store"
    },
    {
      qrcode: androidQrCode,
      href: "https://play.google.com/store/apps/details?id=com.teacheapp",
      icon: <GoogleIcon />,
      bg: "blue",
      text: "Google Play"
    }
  ];
  