require "net/http"
require "uri"

class SocialsShareCount
  def initialize(current_article_slug)
    @current_page_url = 'https://yalantis.com/blog/' + current_article_slug + '/'
    @article_meta_title = Article.find_by(slug: current_article_slug).meta_title
  end

  def call
    fb_request + tw_request
  end

  private

  def parse_response(response, social_name, current_url)
    begin
      case social_name
      when 'facebook'
        response["#{current_url}"]['share']['share_count']
      when 'google plus'
        response['result']['metadata']['globalCounts']['count']
      end
    rescue Exception => e
      0
    end
  end

  def fb_request
    query = "&access_token=#{ENV["FB_CLIENT_ID"]}|#{ENV["FB_ACCESS_TOKEN"]}"
    http_current_url = @current_page_url.gsub('https', 'http')
    https_current_url = @current_page_url
    response = send_request(http_current_url, query) + send_request(https_current_url, query)
    return response
  end

  def send_request(current_page_url, query)
    url = 'https://graph.facebook.com/v2.2/?ids='
    uri = URI.parse(url + current_page_url + query)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true if uri.scheme == 'https'
    http.verify_mode = OpenSSL::SSL::VERIFY_NONE
    request = Net::HTTP::Get.new(uri)
    response = http.request(request)
    parse_response(JSON.parse(response.body), 'facebook', current_page_url)
  end

  def tw_request
    search_url = @current_page_url.gsub('https://', '')
    @client = Twitter::REST::Client.new do |config|
      config.consumer_key        = ENV["CONSUMER_KEY"]
      config.consumer_secret     = ENV["CONSUMER_SECRET"]
      config.access_token        = ENV["ACCESS_TOKEN"]
      config.access_token_secret = ENV["ACCESS_SECRET"]
    end

    begin
      @client.search("url:#{search_url}").count
    rescue Exception => e
      0
    end
  end
end
