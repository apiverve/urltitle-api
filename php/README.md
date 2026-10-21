# URL Title API - PHP Package

URL Title fetches the HTML title tag of any web page in real time from a target URL. Paid plans also retrieve an array of every H1 heading tag found on the page.

## Installation

Install via Composer:

```bash
composer require apiverve/urltitle
```

## Getting Started

Get your API key at [APIVerve](https://apiverve.com)

### Basic Usage

```php
<?php

require_once 'vendor/autoload.php';

use APIVerve\Urltitle\Client;

// Initialize the client
$client = new Client('YOUR_API_KEY');

// Make a request
$response = $client->execute(['url' => 'https://en.wikipedia.org/wiki/HTML_element']);

// Print the response
print_r($response);
```


### Error Handling

```php
use APIVerve\Urltitle\Client;
use APIVerve\Urltitle\Exceptions\APIException;
use APIVerve\Urltitle\Exceptions\ValidationException;

try {
    $response = $client->execute(['url' => 'https://en.wikipedia.org/wiki/HTML_element']);
    print_r($response['data']);
} catch (ValidationException $e) {
    echo "Validation error: " . implode(', ', $e->getErrors());
} catch (APIException $e) {
    echo "API error: " . $e->getMessage();
    echo "Status code: " . $e->getStatusCode();
}
```

### Debug Mode

```php
// Enable debug logging
$client = new Client(
    apiKey: 'YOUR_API_KEY',
    debug: true
);
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

## Requirements

- PHP 7.4 or higher
- Guzzle HTTP client

## Documentation

For more information, visit the [API Documentation](https://docs.apiverve.com/ref/urltitle?utm_source=packagist&utm_medium=referral&utm_content=readme).

## Support

- Website: [https://apiverve.com/marketplace/urltitle?utm_source=php&utm_medium=referral&utm_content=readme](https://apiverve.com/marketplace/urltitle?utm_source=php&utm_medium=referral&utm_content=readme)
- Email: hello@apiverve.com

## License

This package is available under the [MIT License](LICENSE).
