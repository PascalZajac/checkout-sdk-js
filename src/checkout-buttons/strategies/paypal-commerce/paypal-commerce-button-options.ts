import { PaypalButtonStyleOptions } from '../../../payment/strategies/paypal-commerce';

export interface PaypalCommerceButtonInitializeOptions {
    /**
     * @internal
     * A set of styling options for the checkout button.
     */
    style?: PaypalButtonStyleOptions;
}
