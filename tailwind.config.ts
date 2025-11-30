import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
 // Assurez-vous d'importer toutes les couleurs nécessaires

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./App.jsx",
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			Globale: [
  				'Globale',
  				'sans-serif'
  			],
  			MuktaMedium: [
  				'Mukta-Medium',
  				'sans-serif'
  			],
  			MuktaRegular: [
  				'Mukta-Regular',
  				'sans-serif'
  			],
  			MuktaLight: [
  				'Mukta-Light',
  				'sans-serif'
  			],
  			MuktaSemiBold: [
  				'Mukta-SemiBold',
  				'sans-serif'
  			]
  		},
  		keyframes: {
  			enterFromRight: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(200px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			enterFromLeft: {
  				from: {
  					opacity: '0',
  					transform: 'translateX(-200px)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				}
  			},
  			exitToRight: {
  				from: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				},
  				to: {
  					opacity: '0',
  					transform: 'translateX(200px)'
  				}
  			},
  			exitToLeft: {
  				from: {
  					opacity: '1',
  					transform: 'translateX(0)'
  				},
  				to: {
  					opacity: '0',
  					transform: 'translateX(-200px)'
  				}
  			},
  			scaleIn: {
  				from: {
  					opacity: '0',
  					transform: 'rotateX(-10deg) scale(0.9)'
  				},
  				to: {
  					opacity: '1',
  					transform: 'rotateX(0deg) scale(1)'
  				}
  			},
  			scaleOut: {
  				from: {
  					opacity: '1',
  					transform: 'rotateX(0deg) scale(1)'
  				},
  				to: {
  					opacity: '0',
  					transform: 'rotateX(-10deg) scale(0.95)'
  				}
  			},
  			fadeIn: {
  				from: {
  					opacity: '0'
  				},
  				to: {
  					opacity: '1'
  				}
  			},
  			fadeOut: {
  				from: {
  					opacity: '1'
  				},
  				to: {
  					opacity: '0'
  				}
  			},
  			shakeTop: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(-10%)'
  				}
  			},
  			shakeBottom: {
  				'0%, 100%': {
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					transform: 'translateY(10%)'
  				}
  			},
  			marquee: {
  				'0%': {
  					transform: 'translateX(100%)'
  				},
  				'100%': {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'marquee-left': {
  				'0%': {
  					transform: 'translateX(0)'
  				},
  				'100%': {
  					transform: 'translateX(-50%)'
  				}
  			},
  			'marquee-right': {
  				'0%': {
  					transform: 'translateX(-50%)'
  				},
  				'100%': {
  					transform: 'translateX(0)'
  				}
  			}
  		},
  		animation: {
  			scaleIn: 'scaleIn 200ms ease',
  			scaleOut: 'scaleOut 200ms ease',
  			fadeIn: 'fadeIn 200ms ease',
  			fadeOut: 'fadeOut 200ms ease',
  			enterFromLeft: 'enterFromLeft 250ms ease',
  			enterFromRight: 'enterFromRight 250ms ease',
  			exitToLeft: 'exitToLeft 250ms ease',
  			exitToRight: 'exitToRight 250ms ease',
  			shakeTop: 'shakeTop 0.3s ease-in-out infinite',
  			shakeBottom: 'shakeBottom 0.3s ease-in-out infinite',
  			marquee: 'marquee 15s linear infinite',
  			'marquee-left': 'marquee-left 30s linear infinite',
  			'marquee-right': 'marquee-right 30s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [
    plugin(({ matchUtilities }) => {
      matchUtilities({
        perspective: (value) => ({
          perspective: value,
        }),
      });
    }),
      require("tailwindcss-animate")
],
};

export default config;
