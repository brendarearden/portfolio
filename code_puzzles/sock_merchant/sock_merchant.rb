class SockMerchant
  def sock_merchant(n, ar)
    count = 0
    ar.uniq.each do |sock|
        count += ar.count(sock) / 2
    end
    count
  end
end
