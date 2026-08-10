source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!

# The following it to use UTF-8 as encoding
Encoding.default_external = Encoding::UTF_8
Encoding.default_internal = Encoding::UTF_8

# This is the default theme for new Jekyll sites. You may change this to anything you like.
gem "minima", "2.5.2"
gem "bigdecimal", "~> 3.3.1"
gem "faraday-retry"
# csv, base64 will no longer be part of the default gems starting from Ruby 3.4.0.
gem "csv", "~> 3.3.6"
gem "base64", "~> 0.3.0"
# For Pagination in jekyll
#gem "jekyll-paginate", "~> 0.0.1"
gem "jekyll", "~> 4.4.1"
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.11"
  gem "jekyll-relative-links"
end
# Sets the Content-Type header of HTML files to text/html; charset=utf-8.
gem "jekyll-utf8", "~> 0.0.1"
# Bumping up outdated gems
# For testing the static pages
gem "html-proofer", "~> 5.2.2"
gem "liquid", "~> 4.0.4"
gem "parallel", "~> 2.1.0"
gem "rackup", "~> 2.3.1"
gem "rouge", "~> 4.7.0"
gem "terminal-table", "~> 3.0.2"
gem "ttfunk", "~> 1.8.0"
gem "unicode-display_width", "~> 2.6.0"

gem "jekyll-sass-converter", "~> 2.0"
gem "jekyll-theme-nix", "~> 1.1.5"
gem "jekyll-theme-nixer", "~> 1.1.5"
gem "jekyll-theme-nixest", "~> 1.1.5"
gem "jekyll-theme-nota", "~> 0.1.0"
gem "jekyll-theme-nouveau", "~> 0.2.0"
gem "jekyll-theme-penumbra", "~> 0.1.1"
gem "jekyll-theme-plain", "~> 0.8.0"
gem "jekyll-theme-polar", "~> 1.0.0"
gem "jekyll-theme-with-hack-css", "~> 0.1.1"
#gem "jekyll-vite", "~> 3.0.3"

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 2.0"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform?