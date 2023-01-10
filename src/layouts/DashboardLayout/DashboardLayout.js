import React, { useContext } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import Navbar from '../../Pages/Shared/Navbar/Navbar';


const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div className='bg-black'>
            <Navbar></Navbar>
            <div className="drawer">
  <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" /> 
  <Scrollbars style={{ width: '100vw', height: '100vh'}}>
  <div className="drawer-content w-3/4 mx-auto flex flex-col">
    <div className="w-full lg:flex justify-center border-y border-primary navbar bg-transparent">
      <div className="flex-none lg:hidden">
        <label htmlFor="dashboard-drawer" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      {/* <div className="flex-1 px-2 mx-2">Navbar Title</div> */}
      <div className="flex-none text-center hidden lg:block">
      <ul className="menu p-4 w-80 text-white flex justify-center items-center">
                        {isBuyer &&
                            <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            </>
                        }
                        {
                            isAdmin && <div className='flex'>
                                <li><Link to='/dashboard/allsellers'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </div>
                        }
                        {
                            isSeller && <div className='flex '>
                                <li><Link to='/dashboard/addProducts'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                {/* <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li> */}
                             </div>
                        }
                    </ul>
      </div>
    </div>
    <Outlet></Outlet>

  </div> 
      </Scrollbars>
  
  <div className="drawer-side">
    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 text-base-content">
                        {isBuyer &&
                            <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allsellers'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addProducts'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                {/* <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li> */}
                             </>
                        }
                    </ul>
    
  </div>
</div>
            {/* <div className='bg-black'><Navbar></Navbar></div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {isBuyer &&
                            <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allsellers'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addProducts'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                {/* <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li> */}
                            {/* </>
                        }
                    </ul>
                </div>
            </div> */} 
        </div>
    );
};

export default DashboardLayout;