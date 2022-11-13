import * as NextLink from "next/link";
import { joinClassNames } from "utils/helpers";
import { DEFAULT, SIZE, STYLE } from "styles/constants/link";
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
      <>
        {icon && <FontAwesomeIcon icon={icon} />}
        {children}
      </>
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
