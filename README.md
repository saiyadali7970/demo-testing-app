feat: integrate Redux for batch item removal with confirmation dialog

- Added Redux state management for item removal in edit mode
- Updated `itemsSlice` to handle batch removal of items by indices
- Implemented `toggleDialog` and `setDontAskAgain` actions for dialog visibility and user preferences
- Updated component logic to dispatch actions for item removal and dialog control
- Improved UI with Tailwind CSS for responsive item display and dialog styling
- Ensured items are removed directly if "don't ask again" is checked
- Added actions to manage edit mode and item selection state
