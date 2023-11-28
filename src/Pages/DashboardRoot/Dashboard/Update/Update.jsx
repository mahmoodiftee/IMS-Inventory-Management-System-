import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { GiCycle  } from "react-icons/gi";

const Update = () => {
    const Product = useLoaderData();
    const { _id } = Product || {};
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const ProductName = e.target.name.value;
        const ProductImage = e.target.img.value;
        const ProductQuantity = e.target.quantity.value;
        const ProductLocation = e.target.location.value;
        const ProductCost = parseFloat(e.target.cost.value).toFixed(2);
        const ProductProfit = parseFloat(e.target.profit.value).toFixed(2);
        const ProductDiscount = parseFloat(e.target.discount.value).toFixed(2);
        const ProductDescription = e.target.des.value;

        const updateProduct = {
            productName: ProductName,
            productImage: ProductImage,
            productQuantity: parseFloat(ProductQuantity),
            productLocation: ProductLocation,
            productCost: parseFloat(ProductCost),
            productProfit: parseFloat(ProductProfit),
            productDiscount: parseFloat(ProductDiscount),
            productDescription: ProductDescription,
        };

        fetch(`http://localhost:5000/products/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Product Successfully Updated',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(`/dashboard/product-management`);
                }
            });
    };

    return (
        <div>
            <h1 className="text-black lg:w-[60%] mx-auto text-center text-xl lg:text-3xl font-extrabold">
                UPDATE PRODUCT
            </h1>
            <div className="card w-[80%] mx-auto">
                <form onSubmit={handleSubmit} className="card-body w-full">
                    <div className="mb-2 flex flex-col lg:flex-row justify-between gap-4">
                        <div className="form-control w-full">
                            <input defaultValue={Product?.productName} name='name' type="text" placeholder="Product Name" className="input input-bordered w-full text-sm" required />
                        </div>
                        <div className="form-control w-full">
                            <input defaultValue={Product?.productImage} name='img' type="text" placeholder="Image" className="input input-bordered w-full text-sm" required />
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
                                    Update Product <GiCycle  />
                                </em>
                            </span>
                            <span>
                                <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                    Update Product <GiCycle  />
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
