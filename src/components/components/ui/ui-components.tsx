// Central UI component re-exports to avoid duplicate keys
export { ButtonComponent } from './button'
export { BadgeComponent } from './badge'
export { buttonVariants } from './button'
export { badgeVariants } from './badge'

// Legacy exports for backward compatibility
export { Button } from './ui/components' // Falls back to ButtonComponent
export { Badge } from './ui/components' // Falls back to BadgeComponent
