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
gem "minima", "= 2.5.1"
gem "bigdecimal"
gem "faraday-retry"
# Sets the Content-Type header of HTML files to text/html; charset=utf-8.
gem "jekyll-utf8", "~> 0.0.1"
# For testing the static pages
#gem "html-proofer", "~> 3.13.0"
# For Pagination in jekyll
#gem "jekyll-paginate", "~> 0.0.1"
# If you want to use GitHub Pages, remove the "gem "jekyll"" above and
# uncomment the line below. To upgrade, run `bundle update github-pages`.
# gem "github-pages", group: :jekyll_plugins
# If you have any plugins, put them here!
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.11"
  #gem "jekyll-coffeescript", "~> 1.1.1"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
install_if -> { RUBY_PLATFORM =~ %r!mingw|mswin|java! } do
  gem "tzinfo", "~> 1.2.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.2.0", :install_if => Gem.win_platform?
# GitHub pages
gem 'github-pages', "~> 232", group: :jekyll_plugins