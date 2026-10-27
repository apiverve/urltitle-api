Pod::Spec.new do |s|
  s.name             = 'APIVerveURLTitle'
  s.version          = '1.2.3'
  s.summary          = 'URL Title fetches the HTML title tag of any web page in real time from a target URL.'
  s.description      = <<-'DESC'
URL Title fetches the HTML title tag of any web page in real time from a target URL. Paid plans also retrieve an array of every H1 heading tag found on the page.

This iOS/macOS SDK provides a convenient way to access the URL Title from APIVerve.
Supports both callback-based and async/await patterns.
                       DESC

  s.homepage         = 'https://apiverve.com/marketplace/urltitle?utm_source=cocoapods&utm_medium=referral&utm_content=homepage'
  s.license          = { :type => 'MIT', :file => 'LICENSE' }
  s.author           = { 'APIVerve' => 'hello@apiverve.com' }
  # The SDK repo holds every language; the pod lives under cocoapods/ with its own tag.
  s.source           = { :git => 'https://github.com/apiverve/urltitle-api.git', :tag => "cocoapods/v#{s.version}" }

  s.ios.deployment_target = '15.0'
  s.osx.deployment_target = '12.0'

  s.swift_version = '5.0'

  s.source_files = 'cocoapods/Sources/APIVerveURLTitle/**/*.swift'

  s.frameworks = 'Foundation'

  # APIResponse, APIVerveError and the request plumbing, shared by every APIVerve pod.
  s.dependency 'APIVerveCore', '~> 1.2'
end
