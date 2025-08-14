import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { assets } from '../../../frontend/src/assets/assets'
import { backendUrl, currency } from '../App'

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([])

  const fetchAllOrders = async () => {
    if (!token) return

    try {
      console.log("Admin token in frontend:", token)
      const response = await axios.post(
        backendUrl + '/api/order/list',
        {},
        { headers: { Authorization: token } }
      )

      if (response.data.success) {
        setOrders(response.data.orders || [])
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + '/api/order/status',
        { orderId, status: event.target.value },
        { headers: { Authorization: token } }
      )

      if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(() => {
    fetchAllOrders()
  }, [token])

  return (
    <div>
      <h3>Order Page</h3>
      <div>
        {Array.isArray(orders) && orders.length > 0 ? (
          orders.map((order, index) => (
            <div
              key={order._id || index}
              className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            >
              <img className="w-12" src={assets.parcel_icon} alt="parcel icon" />
              <div>
                <div>
                  {Array.isArray(order.items) &&
                    order.items.map((item, idx) => (
                      <p className="py-0.5" key={idx}>
                        {item.name} x {item.quantity} <span>{item.size}</span>
                        {idx !== order.items.length - 1 && ','}
                      </p>
                    ))}
                </div>
                <p className="mt-3 mb-2 font-medium">
                  {order.address?.firstName} {order.address?.lastName}
                </p>
                <div>
                  <p>{order.address?.street},</p>
                  <p>
                    {order.address?.city}, {order.address?.state},{' '}
                    {order.address?.country}, {order.address?.pincode}
                  </p>
                </div>
                <p>{order.address?.phone}</p>
              </div>

              <div>
                <p className="text-sm sm:text-[15px]">
                  Items: {Array.isArray(order.items) ? order.items.length : 0}
                </p>
                <p className="mt-3">Method: {order.paymentMethod}</p>
                <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
                <p>
                  Date:{' '}
                  {order.date ? new Date(order.date).toLocaleDateString() : ''}
                </p>
              </div>

              <p className="text-sm sm:text-[15px]">
                {currency}
                {order.amount}
              </p>

              <select
                onChange={(event) => statusHandler(event, order._id)}
                value={order.status}
                className="p-2 font-semibold"
              >
                <option value="Order Placed">Order Placed</option>
                <option value="Packing">Packing</option>
                <option value="Shipped">Shipped</option>
                <option value="Out for delivery">Out for delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          ))
        ) : (
          <p>No orders found</p>
        )}
      </div>
    </div>
  )
}

export default Orders
