import React, { useState, useEffect } from 'react';
import { Download, Smartphone, Shield, CheckCircle, AlertTriangle, Info, Apple } from 'lucide-react';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);
  const [deviceType, setDeviceType] = useState<'ios' | 'android' | 'other'>('other');

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      setDeviceType('ios');
    } else if (/android/.test(userAgent)) {
      setDeviceType('android');
    } else {
      setDeviceType('other');
    }
  }, []);

  const handleDownload = () => {
    setIsDownloading(true);
    
    // Create a temporary link element for download
    const link = document.createElement('a');
    // Use the direct Google Drive download URL format
    link.href = 'https://www.dropbox.com/scl/fi/mgulkkwrcbixtv0bfq9eh/TrackMyExpiry.apk?rlkey=l1qvqaov0nrdulq802f0g6zhj&st=let4vxae&dl=1';
    link.download = 'TrackMyExpiry.apk';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Reset downloading state after a short delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/logo.png.png" 
              alt="TrackMyExpiry Logo" 
              className="w-12 h-12 rounded-xl shadow-sm"
            />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TrackMyExpiry</h1>
              <p className="text-sm text-gray-600">Never let anything expire again</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-8 shadow-lg">
            {deviceType === 'ios' ? (
              <Apple className="w-12 h-12 text-white" />
            ) : (
              <Smartphone className="w-12 h-12 text-white" />
            )}
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {deviceType === 'ios' ? 'Download TrackMyExpiry APK' : 'Install TrackMyExpiry'}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            {deviceType === 'ios' 
              ? 'Download the TrackMyExpiry Android APK file. Note: This file is for Android devices only and cannot be installed on iOS.'
              : 'Download and install the TrackMyExpiry Android app directly to your device. Keep track of expiration dates for all your important items.'
            }
          </p>
        </div>

        {/* iOS Warning Notice */}
        {deviceType === 'ios' && (
          <div className="bg-red-50 border border-red-200 rounded-2xl p-8 mb-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-red-900 mb-3">Important: iOS Compatibility Notice</h3>
                <p className="text-red-800 mb-4 leading-relaxed">
                  <strong>APK files cannot be installed on iOS devices.</strong> This download is for Android devices only. 
                  If you're using an iPhone or iPad, this file will not work on your device.
                </p>
                <div className="space-y-2">
                  <p className="text-red-700 font-medium">You might want to download this APK if you:</p>
                  <ul className="list-disc list-inside text-red-700 space-y-1 ml-4">
                    <li>Plan to use it on an Android device later</li>
                    <li>Want to share it with someone who has an Android device</li>
                    <li>Are using an Android emulator on your computer</li>
                  </ul>
                </div>
                <div className="mt-4 p-3 bg-red-100 rounded-lg">
                  <p className="text-red-800 text-sm font-medium">
                    📱 Looking for an iOS version? We're working on bringing TrackMyExpiry to the App Store soon!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Download Section - Now available for all devices */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Download Section */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                <Download className="w-5 h-5 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Download APK</h3>
            </div>
            
            <p className="text-gray-600 mb-6">
              {deviceType === 'ios' 
                ? 'Download the TrackMyExpiry APK file. Remember, this is for Android devices only and cannot be installed on your iOS device.'
                : 'Click the button below to download the TrackMyExpiry APK file directly from our secure cloud storage.'
              }
            </p>

            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 shadow-lg"
            >
              {isDownloading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Starting Download...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download TrackMyExpiry.apk</span>
                </div>
              )}
            </button>

            <div className="mt-4 text-sm text-gray-500 text-center">
              Version 2.0.0 • {deviceType === 'ios' ? 'For Android devices only' : 'Ready for installation'}
            </div>

            {/* Alternative download link */}
            <div className="mt-4 pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-500 text-center mb-2">
                Having trouble? Try the direct link:
              </p>
              <a
                href="https://drive.google.com/uc?export=download&id=1gelLXxnf05MJYpjtcATjeboywr7iLfou"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 text-sm underline block text-center"
              >
                Direct Download Link
              </a>
            </div>
          </div>

          {/* Installation Instructions - Different for iOS vs Android */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                {deviceType === 'ios' ? (
                  <Info className="w-5 h-5 text-green-600" />
                ) : (
                  <Shield className="w-5 h-5 text-green-600" />
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                {deviceType === 'ios' ? 'What to do with the APK' : 'Installation Steps'}
              </h3>
            </div>

            {deviceType === 'ios' ? (
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">1</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Save for later use</p>
                    <p className="text-sm text-gray-500 mt-1">The APK will be saved to your Downloads folder</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">2</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Transfer to Android device</p>
                    <p className="text-sm text-gray-500 mt-1">Use AirDrop, email, or cloud storage to transfer</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">3</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Install on Android</p>
                    <p className="text-sm text-gray-500 mt-1">Follow Android installation steps on the target device</p>
                  </div>
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p className="text-blue-800 text-sm">
                    <strong>Alternative:</strong> Use an Android emulator like BlueStacks on your computer to run Android apps.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">1</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Enable "Unknown Sources"</p>
                    <p className="text-sm text-gray-500 mt-1">Go to Settings → Security → Install unknown apps</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">2</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Download the APK file</p>
                    <p className="text-sm text-gray-500 mt-1">Click the download button above</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-semibold text-blue-600">3</span>
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Install the app</p>
                    <p className="text-sm text-gray-500 mt-1">Open the downloaded APK and tap "Install"</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-700 font-medium">Start tracking!</p>
                    <p className="text-sm text-gray-500 mt-1">Launch TrackMyExpiry and begin organizing your items</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Device Compatibility Notice for non-iOS devices */}
        {deviceType === 'other' && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-900 mb-2">Device Compatibility</h4>
                <p className="text-amber-800 text-sm leading-relaxed">
                  TrackMyExpiry is currently available for Android devices only. The APK file will only work on Android phones and tablets. 
                  If you're using an iPhone, iPad, or other iOS device, the APK cannot be installed on your device.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Security Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Security Notice</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                This APK is provided directly by the TrackMyExpiry team and hosted on Google Drive for secure delivery. 
                {deviceType === 'android' && (
                  <span> Installing apps from unknown sources can be risky. Only download from trusted sources and ensure you have 
                  enabled installation from unknown sources in your device settings.</span>
                )}
                {deviceType === 'ios' && (
                  <span> While you can download this file on iOS, remember that it cannot be installed on your device.</span>
                )}
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
              <Info className="w-5 h-5 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900">App Features</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Track expiration dates for any item</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Smart notifications and reminders</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Barcode scanning support</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Categories and custom labels</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Dark mode support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Offline functionality</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-16">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png.png" 
                alt="TrackMyExpiry Logo" 
                className="w-8 h-8 rounded-lg"
              />
              <span className="text-gray-600">© 2025 TrackMyExpiry. All rights reserved.</span>
            </div>
            <div className="text-sm text-gray-500">
              Need help? Contact support
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;