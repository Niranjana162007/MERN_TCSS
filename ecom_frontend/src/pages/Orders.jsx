import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/AppContext";

export default function Orders() {
  const { orders, user } = useContext(StoreContext);
  const navigate = useNavigate();

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Please Login</h2>
          <p className="text-gray-600 mb-6">You need to be logged in to view your orders.</p>
          <Link
            to="/login"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Login Now
          </Link>
        </div>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 mx-auto mb-6 bg-orange-100 rounded-full flex items-center justify-center">
            <svg className="w-12 h-12 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">No orders yet</h2>
          <p className="text-gray-600 mb-6">You haven't placed any orders yet. Start shopping to see your orders here.</p>
          <Link
            to="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">My Orders</h1>
          <p className="text-gray-600">Track and manage your orders</p>
        </div>

        {/* Orders List */}
        <div className="space-y-6">
          {orders.map((order) => (
            <div key={order.orderId} className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              {/* Order Header */}
              <div className="bg-orange-50 px-6 py-4 border-b border-orange-200">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center space-x-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        Order #{order.orderId}
                      </h3>
                      <p className="text-sm text-gray-600">
                        Placed on {order.orderDate}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-4 sm:mt-0 flex items-center space-x-4">
                    <span className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {order.status}
                    </span>
                    <span className="text-lg font-bold text-gray-900">
                      ₹{(order.price * (order.quantity || 1)).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Order Content */}
              <div className="p-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={order.image}
                    alt={order.name}
                    className="w-20 h-20 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900">{order.name}</h4>
                    <p className="text-gray-600">{order.category}</p>
                    <div className="flex items-center mt-2 space-x-4">
                      <span className="text-sm text-gray-600">
                        Quantity: {order.quantity || 1}
                      </span>
                      <span className="text-sm text-gray-600">
                        Price: ₹{order.price.toLocaleString()}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <button
                      onClick={() => navigate(`/product/${order.id}`)}
                      className="text-orange-600 hover:text-orange-800 text-sm font-medium"
                    >
                      View Product
                    </button>
                  </div>
                </div>

                {/* Order Progress */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <span className="ml-2 text-sm text-gray-600">Order Confirmed</span>
                      </div>
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        <span className="ml-2 text-sm text-gray-600">Processing</span>
                      </div>
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <span className="ml-2 text-sm text-gray-600">Shipped</span>
                      </div>
                      <div className="w-8 h-0.5 bg-gray-300"></div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                        <span className="ml-2 text-sm text-gray-600">Delivered</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-medium text-gray-900">Delivery Address:</span>
                      <p className="text-gray-600 mt-1">
                        {user.name}<br />
                        123 Main Street<br />
                        City, State 12345
                      </p>
                    </div>
                    <div>
                      <span className="font-medium text-gray-900">Expected Delivery:</span>
                      <p className="text-gray-600 mt-1">
                        {new Date(Date.now() + 5 * 24 * 60 * 60 * 1000).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Continue Shopping */}
        <div className="text-center mt-12">
          <Link
            to="/products"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}