FROM ruby:3.2

# Install system dependencies
RUN apt-get update -qq && apt-get install -y \
  build-essential \
  nodejs \
  && rm -rf /var/lib/apt/lists/*

WORKDIR /usr/src/app

# Install bundler
RUN gem install bundler -v 2.3.26

# Copy only Gemfile and Gemfile.lock first for caching
COPY Gemfile Gemfile.lock ./
COPY minima.gemspec ./

# Install gems (cached if Gemfile.lock doesn't change)
RUN bundle install

# Copy the rest of the site
COPY . .

# Expose Jekyll port
EXPOSE 4000

# Serve Jekyll
CMD ["bundle", "exec", "jekyll", "serve", "--host", "0.0.0.0", "--watch", "--force_polling"]
