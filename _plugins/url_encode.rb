# Source - https://stackoverflow.com/a/17769287
# Posted by opello, modified by community. See post 'Timeline' for change history
# Retrieved 2026-11-20, License - CC BY-SA 3.0

# _plugins/url_encode.rb
require 'liquid'
require 'uri'

# Percent encoding for URI conforming to RFC 3986.
# Ref: http://tools.ietf.org/html/rfc3986#page-12
module URLEncoding
  def url_encode(url)
    # return URI.escape(url, Regexp.new("[^#{URI::PATTERN::UNRESERVED}]"))
    return URI.encode(url)
  end
end

Liquid::Template.register_filter(URLEncoding)
