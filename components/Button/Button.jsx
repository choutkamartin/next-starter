import Link from "next/link";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DEFAULT, ICON, SIZE, STYLE } from "components/Button";
import { joinClassNames } from "utils/helpers";

export default function Button({
  size,
  children,
  icon,
  style,
  pattern,
  className,
  as,
  spin,
  ...props
}) {
  const Inner = () => {
    return (
      <>
        <span
          className={joinClassNames("absolute inset-0", STYLE[style][0])}
        ></span>
        <span className="absolute inset-0 flex items-center justify-center font-bold">
          {spin && <FontAwesomeIcon icon={faSpinner} spin />}
          {icon && <FontAwesomeIcon icon={icon} />}
          {children}
        </span>
        {children}
      </>
    );
  };

  switch (as) {
    case "link":
      return (
        <Link
          {...props}
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style][1],
            pattern && PATTERN,
            className
          )}
        >
          <Inner />
        </Link>
      );
    case "a":
      return (
        <a
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style][1],
            pattern && PATTERN,
            className
          )}
          {...props}
        >
          <Inner />
        </a>
      );
    default:
      return (
        <button
          className={joinClassNames(
            DEFAULT,
            SIZE[size],
            STYLE[style][1],
            pattern && PATTERN,
            className
          )}
          {...props}
        >
          <Inner />
        </button>
      );
      break;
  }
}
