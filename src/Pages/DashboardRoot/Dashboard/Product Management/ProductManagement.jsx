import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { MdOutlineAddToPhotos } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";
import { AuthContext } from "../../../../Components/AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
const ProductManagement = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    console.log('User Email:', user.email);
                    const response = await axios.get(`http://localhost:5000/products?email=${encodeURIComponent(user.email || '')}`);
                    const userProducts = response.data;
                    console.log(userProducts);

                    setProducts(userProducts);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user]);

    const productExists = products.length > 0;

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/products/${_id}`, {
                    method: 'DELETE'
                }

                )
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remainingProducts = products.filter(userProduct => userProduct._id !== _id);
                            setProducts(remainingProducts);
                        }
                    })
            }
        })
    }




    return (
        <div>
            <div className="">
            <Helmet>
                <title>Dashboard | Manage Products</title>
            </Helmet>
                <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
                    Manage Products
                </h1>

                {!productExists ? (
                    <div className="mt-10">
                        <h1 className="text-black text-center text-xl lg:text-3xl font-bold">
                            You have not added any product yet. <br />
                            Would you like to add one?
                        </h1>
                        <Link to={'/dashboard/add-product'}>
                            <button className="Achronicle-button mx-auto mt-4">
                                <span>
                                    <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                        ADD PRODUCT<MdOutlineAddToPhotos />
                                    </em>
                                </span>
                                <span>
                                    <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                        ADD PRODUCT<MdOutlineAddToPhotos />
                                    </em>
                                </span>
                            </button>
                        </Link>
                    </div>
                ) : (
                    <div className="mt-10">
                        <div>
                            <div className="w-full flex flex-col lg:flex-row gap-2 lg:gap-0 justify-center items-center">
                                <div className="w-full custom-border-gradient bg-transparent p-2">
                                    <h1 className="text-[1.25rem] font-semibold">Total Products: {products.length}</h1>
                                </div>
                                <Link to={'/dashboard/add-product'} className="w-full">
                                    <button className="Achronicle-button w-full mx-auto ">
                                        <span>
                                            <em className="flex  text-white justify-center items-center gap-1 lg:gap-3">
                                                ADD PRODUCT<MdOutlineAddToPhotos />
                                            </em>
                                        </span>
                                        <span>
                                            <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                                ADD PRODUCT<MdOutlineAddToPhotos />
                                            </em>
                                        </span>
                                    </button>
                                </Link>
                            </div>
                            {/* Table */}
                            <div className="mt-4">
                                <div className="overflow-x-auto">
                                    <table className="table">
                                        {/* head */}
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th className="font-bold text-sm">Product Name</th>
                                                <th className="font-bold text-sm">Product Quantity</th>
                                                <th className="font-bold text-sm">Sale Count</th>
                                                <th className="font-bold text-sm">Update</th>
                                                <th className="font-bold text-sm">Delete</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {products.map(product => (
                                                <tr key={product._id}>
                                                    <td>
                                                        <div className="h-10 w-10">
                                                            <img
                                                                className="h-full rounded-lg w-full object-cover"
                                                                src={product?.productImage}
                                                                alt={product?.productName}
                                                            />
                                                        </div>
                                                    </td>
                                                    <td className="font-bold">{product?.productName}</td>
                                                    <td className="font-bold pl-14">{product?.productQuantity}</td>
                                                    <td className="font-bold pl-10">{product?.saleCount}</td>
                                                    <td className="">
                                                        <Link to={`/dashboard/update/${product?._id}`}>
                                                            <button className="btn font-bold text-2xl hover:bg-green-500 hover:text-white text-green-500 bg-white btn-circle btn-ghost">
                                                                <FaEdit />
                                                            </button>
                                                        </Link>
                                                    </td>
                                                    <td className="">
                                                        <button onClick={() => handleDelete(product?._id)} className="btn btn-circle font-bold text-2xl hover:bg-red-500 bg-white hover:text-white text-red-500 btn-ghost">
                                                            <MdDeleteForever />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProductManagement;
