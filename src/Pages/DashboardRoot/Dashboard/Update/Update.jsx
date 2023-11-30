import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GiCycle } from "react-icons/gi";
import { Helmet } from "react-helmet-async";
import axios from "axios";

const Update = () => {
    const Product = useLoaderData();
    const { _id } = Product || {};
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const ProductName = e.target.name.value;
            const ProductImageFile = e.target.img.files[0];
            const ProductQuantity = e.target.quantity.value;
            const ProductLocation = e.target.location.value;
            const ProductCost = parseFloat(e.target.cost.value).toFixed(2);
            const ProductProfit = parseFloat(e.target.profit.value).toFixed(2);
            const ProductDiscount = parseFloat(e.target.discount.value).toFixed(2);
            const ProductDescription = e.target.des.value;
    
            const formData = new FormData();
            formData.append('image', ProductImageFile);
    
            // hosting img to imgbb
            const responseImg = await axios.post('https://api.imgbb.com/1/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                params: {
                    key: 'b21321b69dce0a6efd75bdd3a28ee2ee',
                },
            });
    
            const imageUrl = responseImg.data.data.url;
    
            const updateProduct = {
                productName: ProductName,
                productImage: imageUrl,
                productQuantity: parseFloat(ProductQuantity),
                productLocation: ProductLocation,
                productCost: parseFloat(ProductCost),
                productProfit: parseFloat(ProductProfit),
                productDiscount: parseFloat(ProductDiscount),
                productDescription: ProductDescription,
            };
    
            // Fetch update
            const response = await fetch(`http://localhost:5000/products/${_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(updateProduct),
            });
    
            const data = await response.json();
    
            if (data.modifiedCount > 0) {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Product Successfully Updated',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(`/dashboard/product-management`);
            }
        } catch (error) {
            console.error('Error updating product:', error);
            Swal.fire({
                position: 'top-center',
                icon: 'error',
                title: 'Error Updating Product',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };
    

    return (
        <div>
            <Helmet>
                <title>Dashboard | Update Product</title>
            </Helmet>
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-3xl font-extrabold">
                UPDATE PRODUCT
            </h1>
            <div className="card w-[80%] mx-auto">
                <form onSubmit={handleSubmit} className="card-body w-full">
                <div className="mb-2 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <input name='name' type="text" placeholder="Product Name" className="input input-bordered  text-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <input name='img' type="file" className="file-input bg-transparent file-input-bordered w-full " />
                        </div>
                    </div>
                    <div className="mb-2 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <input defaultValue={Product?.productQuantity} name='quantity' type="number" placeholder="Product Quantity" className="input input-bordered w-full text-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <input defaultValue={Product?.productProfit} name='profit' type="text" placeholder="Profit Margin" className="input input-bordered w-full text-sm" required />
                        </div>
                    </div>
                    <div className="mb-2 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <input defaultValue={Product?.productCost} name='cost' type="text" placeholder="Production Cost" className="input input-bordered w-full text-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <input defaultValue={Product?.productDiscount} name='discount' type="text" placeholder="Discount" className="input input-bordered w-full text-sm" required />
                        </div>
                    </div>

                    <div className="form-control w-full">
                        <input defaultValue={Product?.productLocation} name='location' type="text" placeholder="Product Location" className="input input-bordered w-full text-sm" required />
                    </div>
                    <div className="form-control w-full">
                        <textarea defaultValue={Product?.productDescription} name='des' type="text" placeholder="Product Description" className="textarea input input-bordered w-full h-20 text-sm" required />
                    </div>

                    <div className="form-control w-full">
                        <button type='submit' className="Achronicle-buttons rounded-xl w-full">
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Update Product <GiCycle />
                                </em>
                            </span>
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Update Product <GiCycle />
                                </em>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
