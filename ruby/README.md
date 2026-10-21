# URL Title API - Ruby Gem

URL Title fetches the HTML title tag of any web page in real time from a target URL. Paid plans also retrieve an array of every H1 heading tag found on the page.

## Installation

Add this line to your application's Gemfile:

```ruby
gem 'apiverve_urltitle'
```

And then execute:

```bash
$ bundle install
```

Or install it yourself as:

```bash
$ gem install apiverve_urltitle
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```ruby
require 'apiverve_urltitle'

# Initialize the client
client = APIVerve::Urltitle::Client.new(api_key: "YOUR_API_KEY")

# Make a request
response = client.execute({ url: "https://en.wikipedia.org/wiki/HTML_element" })

# Print the response
puts response
```


### Error Handling

```ruby
begin
  response = client.execute({ url: "https://en.wikipedia.org/wiki/HTML_element" })
  puts response["data"]
rescue APIVerve::Urltitle::ValidationError => e
  puts "Validation error: #{e.errors.join(', ')}"
rescue APIVerve::Urltitle::APIError => e
  puts "API error: #{e.message}"
  puts "Status code: #{e.status_code}"
end
```

### Debug Mode

```ruby
# Enable debug logging
client = APIVerve::Urltitle::Client.new(
  api_key: "YOUR_API_KEY",
  debug: true
)
```

## Example Response

```json
{
  "status": "ok",
  "error": null,
  "data": {
    "title": "HTML element - Wikipedia",
    "h1": [
      "HTML element"
    ]
  }
}
```

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urltitle?utm_source=rubygems&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urltitle?utm_source=ruby&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urltitle?utm_source=ruby&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This gem is available under the [MIT License](LICENSE).
