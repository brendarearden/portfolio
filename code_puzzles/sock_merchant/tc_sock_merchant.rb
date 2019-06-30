require_relative "sock_merchant"
require "test/unit"

class TestSockMerchant < Test::Unit::TestCase

  def test_sock_count
      n = 7
      ar = [1,2,1,2,1,3,2]
      assert_equal(2, SockMerchant.new().sock_merchant(n,ar))
  end

end
