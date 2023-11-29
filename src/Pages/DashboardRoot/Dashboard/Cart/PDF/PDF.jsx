import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../../Components/AuthProvider/AuthProvider';
import axios from 'axios';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { FaFilePdf } from 'react-icons/fa6';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';
import MyDocument from './MyDocument';

const PDF = () => {
    const { user } = useContext(AuthContext);
    const [products, setProducts] = useState([]);
    const [totalSellingPrice, setTotalSellingPrice] = useState(0);
    const styles = StyleSheet.create({
        page: {
            flexDirection: 'row',
        },
        section: {
            flexGrow: 1,
        },
        table: {
            width: '100%',
            border: '2px solid #000',
            fontSize: 16,
            fontWeight: 500,
            display: 'table',
        },
        tableHeader: {
            backgroundColor: '#f2f2f2',
            display: 'table-row',
        },
        tableRow: {
            display: 'table-row',
        },
        tableCell: {
            display: 'table-cell',
            padding: 8,
            borderBottom: '2px solid #000',
        },
        tableCelll: {
            display: 'table-cell',
            padding: 1,
        },
        tableCellll: {
            display: 'table-cell',
            padding: 12,
            borderLeft: '2px solid #000',
        },
    });



    useEffect(() => {
        const fetchData = async () => {
            try {
                if (user) {
                    const response = await axios.get(`https://ims-server-kappa.vercel.app/pdf?email=${encodeURIComponent(user.email || '')}`);
                    const userProducts = response.data;
                    console.log(userProducts);
                    setProducts(userProducts);
                    const sumSellingPrice = userProducts.reduce((sum, product) => sum + product.sellingPrice, 0);
                    setTotalSellingPrice(sumSellingPrice);
                }
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [user]);

    const handleDownload = async () => {
        await axios.delete(`https://ims-server-kappa.vercel.app/pdf/clear?email=${encodeURIComponent(user?.email || "")}`);

        const cartResponse = await axios.get(`https://ims-server-kappa.vercel.app/cart?email=${encodeURIComponent(user?.email || "")}`);
        setProducts(cartResponse.data);
    };


    return (
        <div className=''>
            <h1 className="text-black mt-2 mb-6 lg:w-[60%] mx-auto text-center text-xl lg:text-5xl font-extrabold">
                PAY SLIP
            </h1>
            <div className='w-full flex mb-4 justify-center items-center'>
                <button onClick={handleDownload} className="Achronicle-buttonss rounder-xl">
                    <PDFDownloadLink document={<MyDocument products={products} totalSellingPrice={totalSellingPrice} />} filename="PAY-SLIP">
                        {({ url, loading }) =>
                            loading ? (
                                <span className=''>
                                    <em className="flex px-[70px] text-white font-bold justify-center items-center gap-1 lg:gap-3">
                                        <FaFilePdf /> Loading Document...
                                    </em>
                                </span>
                            ) : (
                                <a href={url} target="_blank" rel="noopener noreferrer">
                                    <span>
                                        <em className="flex text-white justify-center items-center gap-1 lg:gap-3">
                                            <FaCloudDownloadAlt /> Download PDF
                                        </em>
                                    </span>
                                </a>
                            )
                        }
                    </PDFDownloadLink>
                </button>
            </div>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.section}>
                        <View style={styles.table}>
                            <View style={styles.tableHeader}>
                                <View style={styles.tableCell}><Text>Product ID</Text></View>
                                <View style={styles.tableCell}><Text>Product Name</Text></View>
                                <View style={styles.tableCell}><Text>Discount</Text></View>
                                <View style={styles.tableCell}><Text>Price</Text></View>
                            </View>
                            {products?.map(product => (
                                <View key={product._id} style={styles.tableRow}>
                                    <View style={styles.tableCell}><Text>{product?._id}</Text></View>
                                    <View style={styles.tableCell}><Text>{product?.productName}</Text></View>
                                    <View style={styles.tableCell}><Text>{product?.productDiscount}%</Text></View>
                                    <View style={styles.tableCell}><Text>${product?.sellingPrice}</Text></View>
                                </View>
                            ))}
                            {/* Total Selling Price Row */}
                            <View style={styles.tableRow}>
                                <View style={styles.tableCelll}></View>
                                <View style={styles.tableCelll}></View>
                                <View style={styles.tableCelll}>Grand Total: </View>
                                <View style={styles.tableCellll}><Text>${totalSellingPrice}</Text></View>
                            </View>
                        </View>
                    </View>
                </Page>
            </Document>
        </div>
    );
};

export default PDF;
