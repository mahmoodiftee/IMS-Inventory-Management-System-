import React from 'react';
import { Document, Page, View, Text, StyleSheet } from '@react-pdf/renderer';

const MyDocument = ({ products, totalSellingPrice }) => {
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

    return (
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
    );
};

export default MyDocument;
