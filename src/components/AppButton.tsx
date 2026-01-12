// src/components/AppButton.tsx
// AppButton.tsx
import { buttonRecipe } from "@/theme/recipes/button";

import { chakra, useRecipe } from "@chakra-ui/react";
import * as React from "react";

type ButtonVariants = NonNullable<(typeof buttonRecipe)["variants"]>;
type AppButtonVariant = keyof ButtonVariants["variant"];

type AppButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "color"
> & {
  variant?: AppButtonVariant;
};

export function AppButton({ variant = "solid", ...props }: AppButtonProps) {
  const recipe = useRecipe({ recipe: buttonRecipe });
  const styles = recipe({ variant });

  return <chakra.button {...props} />;
}
