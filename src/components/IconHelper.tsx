import React from 'react';
import {
  Sparkles,
  Camera,
  Activity,
  ShieldCheck,
  Headphones,
  Clock,
  Download,
  Star,
  Globe,
  Award,
  Layers,
  Smartphone,
  Cpu,
  Shield,
  Languages,
  CheckCircle,
  ExternalLink,
  ChevronRight,
  ArrowUpRight,
  Apple,
  Menu,
  X,
  Check,
  Send,
  Zap,
  Lock,
  Search,
  Code2,
  TrendingUp,
  Sliders,
  QrCode,
  Share2,
} from 'lucide-react';

interface IconHelperProps {
  name: string;
  className?: string;
  size?: number;
}

export const IconHelper: React.FC<IconHelperProps> = ({ name, className = 'w-5 h-5', size }) => {
  const props = { className, ...(size ? { size } : {}) };

  switch (name.toLowerCase()) {
    case 'sparkles':
      return <Sparkles {...props} />;
    case 'camera':
      return <Camera {...props} />;
    case 'activity':
      return <Activity {...props} />;
    case 'shieldcheck':
    case 'shield-check':
      return <ShieldCheck {...props} />;
    case 'headphones':
      return <Headphones {...props} />;
    case 'clock':
      return <Clock {...props} />;
    case 'download':
      return <Download {...props} />;
    case 'star':
      return <Star {...props} />;
    case 'globe':
      return <Globe {...props} />;
    case 'award':
      return <Award {...props} />;
    case 'layers':
      return <Layers {...props} />;
    case 'smartphone':
      return <Smartphone {...props} />;
    case 'cpu':
      return <Cpu {...props} />;
    case 'shield':
      return <Shield {...props} />;
    case 'languages':
      return <Languages {...props} />;
    case 'checkcircle':
    case 'check-circle':
      return <CheckCircle {...props} />;
    case 'zap':
      return <Zap {...props} />;
    case 'lock':
      return <Lock {...props} />;
    case 'code':
    case 'code2':
      return <Code2 {...props} />;
    case 'trendingup':
    case 'trending-up':
      return <TrendingUp {...props} />;
    case 'sliders':
      return <Sliders {...props} />;
    case 'qrcode':
      return <QrCode {...props} />;
    case 'share2':
      return <Share2 {...props} />;
    default:
      return <Sparkles {...props} />;
  }
};
