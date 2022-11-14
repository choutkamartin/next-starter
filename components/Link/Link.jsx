import * as NextLink from "next/link";
import { joinClassNames } from "utils/helpers";
import { DEFAULT, SIZE, STYLE } from "components/Link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Link({
  size,
  children,
  icon,
  style,
  pattern,
  className,
  as,
  ...props
}) {
  const Inner = () => {
    return (
      <span className="link link-underline link-underline-yellow">
        {icon && <FontAwesomeIcon icon={icon} />}
        {children}
      </span>
    );
  };

  switch (as) {
    case "link":
      return (
        <NextLink
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style || "primary"]
          )}
          {...props}
        >
          <Inner />
        </NextLink>
      );
    default:
      return (
        <a
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style || "primary"]
          )}
          {...props}
        >
          <Inner />
        </a>
      );
  }
}
