import React, { useState } from 'react';
import { Download, Smartphone, Shield, CheckCircle, AlertTriangle, Info } from 'lucide-react';

function App() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = () => {
    setIsDownloading(true);
    // Simulate download process
    setTimeout(() => {
      setIsDownloading(false);
      // Create a download link for the APK file in the public directory
      const link = document.createElement('a');
      link.href = '/TrackMyExpiry.apk';
      link.download = 'TrackMyExpiry.apk';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
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
            <Smartphone className="w-12 h-12 text-white" />
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Install TrackMyExpiry
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Download and install the TrackMyExpiry Android app directly to your device. 
            Keep track of expiration dates for all your important items.
          </p>
        </div>

        {/* Installation Steps */}
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
              Click the button below to download the TrackMyExpiry APK file to your Android device.
            </p>

            <button
              onClick={handleDownload}
              disabled={isDownloading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 shadow-lg"
            >
              {isDownloading ? (
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  <span>Preparing Download...</span>
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  <Download className="w-5 h-5" />
                  <span>Download TrackMyExpiry.apk</span>
                </div>
              )}
            </button>

            <div className="mt-4 text-sm text-gray-500 text-center">
              Version 2.0.0 • Ready for download
            </div>
          </div>

          {/* Installation Instructions */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Installation Steps</h3>
            </div>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">1</span>
                </div>
                <p className="text-gray-700">Enable "Unknown Sources" in your Android settings</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">2</span>
                </div>
                <p className="text-gray-700">Download the APK file using the button above</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-semibold text-blue-600">3</span>
                </div>
                <p className="text-gray-700">Open the downloaded APK file and tap "Install"</p>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">Launch TrackMyExpiry and start tracking your items!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Security Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-8">
          <div className="flex items-start space-x-3">
            <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold text-amber-900 mb-2">Security Notice</h4>
              <p className="text-amber-800 text-sm leading-relaxed">
                This APK is provided directly by the TrackMyExpiry team. Installing apps from unknown sources 
                can be risky. Only download from trusted sources and ensure you have enabled installation 
                from unknown sources in your device settings.
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