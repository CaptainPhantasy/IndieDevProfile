// Central UI component re-exports to avoid duplicate keys
import { Button as ButtonComponent, buttonVariants } from '../../ui/button'
import { Badge as BadgeComponent, badgeVariants } from '../../ui/badge'

export { ButtonComponent, buttonVariants, BadgeComponent, badgeVariants }

// Legacy exports for backward compatibility
export const Button = ButtonComponent
export const Badge = BadgeComponent
