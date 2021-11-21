import { DocumentDefinition, FilterQuery, QueryOptions, UpdateQuery } from "mongoose";
import ProductModel, { ProductDocument } from "../models/product.model";
import { databaseResponseTimeHistorgram } from "../utils/metrics";

export async function createProduct(input: DocumentDefinition<Omit<ProductDocument, "createdAt" | "updatedAt">>) {
    const metricsLabels = {
        operation: 'createProduct'
    }
    const timer = databaseResponseTimeHistorgram.startTimer();
    try {
        const result = await ProductModel.create(input);
        timer({ ...metricsLabels, success: 'true' });
        return result
    } catch (e: any) {
        timer({ ...metricsLabels, success: 'false' });
        throw e;
    }
}

export async function findProduct(query: FilterQuery<ProductDocument>, options: QueryOptions = { lean: true }) {
    const metricsLabels = {
        operation: 'findProduct'
    }
    const timer = databaseResponseTimeHistorgram.startTimer();
    try {
        const results = ProductModel.findOne(query, {}, options);
        timer({ ...metricsLabels, success: 'true' });
        return results

    } catch (e: any) {
        timer({ ...metricsLabels, success: 'false' });
        throw e;
    }
}

export async function findAndUpdateProduct(query: FilterQuery<ProductDocument>, update: UpdateQuery<ProductDocument>, options: QueryOptions) {
    return ProductModel.findOneAndUpdate(query, update, options)
}

export async function deleteProduct(query: FilterQuery<ProductDocument>) {
    return ProductModel.deleteOne(query)
}