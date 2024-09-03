import * as dotenv from 'dotenv'

dotenv.config()

module.exports = {
  expo: {
    name: 'ignitefleet',
    slug: 'ignitefleet',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'dark',
    splash: {
      image: './assets/splash.png',
      resizeMode: 'cover',
      backgroundColor: '#202024'
    },
    ios: {
      bundleIdentifier: 'com.gabrieldanuz.ignitefleet',
      config: {
        googleMapsApiKey: process.env.googleMapsApiKey
      },
      infoPlist: {
        UIBackgroundModes: ['location']
      },
      supportsTablet: true
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#202024'
      },
      package: 'com.gabrieldanuz.ignitefleet',
      permissions: [
        'ACCESS_FINE_LOCATION',
        'ACCESS_COARSE_LOCATION',
        'ACCESS_BACKGROUND_LOCATION'
      ],
      config: {
        googleMaps: {
          apiKey: process.env.googleMapsApiKey
        }
      }
    },
    web: {
      favicon: './assets/favicon.png'
    },
    plugins: [
      [
        'expo-location',
        {
          locationAlwaysAndWhenInUsePermission:
            'Allow $(PRODUCT_NAME) to use your location.'
        }
      ]
    ]
  }
}
