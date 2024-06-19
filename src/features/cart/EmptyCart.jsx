import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3">
      <LinkButton
        to="/menu"
        className="text-sm text-blue-400 hover:text-blue-700 hover:underline"
      >
        &larr; Back to menu
      </LinkButton>

      <p className="font-semibold mt-7">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
