
# 🎨 Design Tokens Documentation

This folder contains the centralized design tokens for the application. All visual design decisions should reference these tokens to ensure consistency across the platform.

## 📁 File Structure

```
src/styles/theme/
├── index.ts          # Main theme export (use this for imports)
├── colors.ts         # Color palette and semantic colors
├── typography.ts     # Font families, sizes, weights, and text styles
├── spacing.ts        # Spacing scale and layout dimensions
├── borders.ts        # Border radius, widths, and styles
├── shadows.ts        # Box shadow definitions
├── zIndex.ts         # Z-index layering scale
└── README.md         # This documentation file
```

## 🚀 How to Use

### Import the complete theme:
```typescript
import { theme } from '@/styles/theme';
const primaryColor = theme.colors.primary.DEFAULT;
```

### Import specific token categories:
```typescript
import { colors, typography, spacing } from '@/styles/theme';
const textColor = colors.neutral[700];
const fontSize = typography.fontSize.lg;
const padding = spacing[4];
```

### Use in Tailwind classes:
The tokens are automatically available in Tailwind CSS:
```tsx
<div className="bg-primary text-white rounded-button p-4 shadow-md">
  Button
</div>
```

### Use in styled components or CSS-in-JS:
```typescript
import { colors, spacing } from '@/styles/theme';

const StyledCard = styled.div`
  background-color: ${colors.background.DEFAULT};
  padding: ${spacing[6]};
  border-radius: ${radii.lg};
`;
```

## 🎨 Design Token Categories

### Colors (`colors.ts`)
- **Primary**: Brand colors and variations
- **Neutral**: Grayscale palette for text and UI elements
- **Feedback**: Status colors (success, warning, error, info)
- **Background**: Page and component backgrounds
- **Semantic**: Border, outline, and shadow colors

### Typography (`typography.ts`)
- **Font Families**: Sans, serif, and monospace stacks
- **Font Sizes**: Modular scale from xs (12px) to 7xl (72px)
- **Font Weights**: From thin (100) to black (900)
- **Line Heights**: Optimized for different text types
- **Text Styles**: Pre-defined combinations for headings and body text

### Spacing (`spacing.ts`)
- **Spacing Scale**: Consistent spacing units from 0 to 96 (384px)
- **Layout Dimensions**: Container, sidebar, and component sizes

### Borders (`borders.ts`)
- **Border Radius**: From sharp corners to full circles
- **Border Widths**: Consistent border thickness options
- **Border Styles**: Solid, dashed, dotted, etc.

### Shadows (`shadows.ts`)
- **Elevation Scale**: From subtle (sm) to dramatic (2xl)
- **Special Shadows**: Inner shadows and custom effects

### Z-Index (`zIndex.ts`)
- **Layering Scale**: Consistent stacking order for components
- **Semantic Layers**: Modal, dropdown, tooltip, etc.

## 🔧 Customization Guidelines

### Adding New Colors
1. Add the color to the appropriate section in `colors.ts`
2. Update the Tailwind config in `tailwind.config.ts`
3. Document the color's purpose and usage

### Modifying Typography
1. Update the relevant scale in `typography.ts`
2. Consider responsive implications
3. Test across different content types

### Extending Spacing
1. Follow the existing modular scale pattern
2. Ensure consistency with existing components
3. Update layout components if needed

## 🎯 Best Practices

### ✅ Do:
- Always use design tokens instead of hardcoded values
- Reference semantic colors (primary, success, error) over specific shades
- Use consistent spacing patterns from the scale
- Document any new tokens you add

### ❌ Don't:
- Hardcode colors, sizes, or spacing in components
- Create one-off design values outside the token system
- Modify tokens without considering global impact
- Break the modular scale patterns

## 🔄 Future Enhancements

### Planned Features:
- [ ] Dark mode color variants
- [ ] Component-specific token sets
- [ ] Responsive typography scales
- [ ] Motion and transition tokens
- [ ] Accessibility contrast validation

### Contributing:
When adding new design tokens:
1. Follow the existing naming conventions
2. Add comprehensive TypeScript types
3. Update this documentation
4. Test across multiple components
5. Consider accessibility implications

## 📱 Responsive Design

The design tokens include responsive considerations:
- Breakpoints are defined in the main theme object
- Typography includes responsive scales
- Spacing works consistently across screen sizes
- Components should reference these tokens for responsive behavior

For questions or contributions to the design system, please refer to the team's design guidelines or reach out to the design team.
