# 3.9 Building Simple Workflows

## Navigation Hiererarchy

- 3 styles of navigation: Hierarchical, Flat, Content/Experience-Driven

### Hierarchical Navigation

- User makes one choice per screen until reaching a destination
- To navigate to another desitnation: Retrace steps or start over from the beginning
- Apps that use this navigation style: Settings, Mail
- Typically use navigation controllers to enable navigation through a series of hierarchical screens
- Back buttons displayed to allow easy return

### Flat Navigation

- Users switch between content categories
- Apps using this style: Music, App Store
- Typically use tab bar controllers to organize information at the app level
- Some apps combine multiple nav styles like the App store

### Content Driven

- User moves freely through content or the content itself defines navigation

## Navigation Design Guidelines

- Make sure users always know where they are in your app and how to get to their next destination
- Path through content should be logical, predictable, and easy to follow
- General guideline: Give peoplle only one path or navigation style in each screen
- If they need to see a screen in multiple contexts, consider using a modal view

- General Guidelines:
  - Info should be organized so that it requires a minimum # of taps, swipes, and screens
  - Use standard navigation components
  - Use a nav bar to traverse hierarchies
  - Use a tab bar to present peer categories of content/functionality
  - Use proper transition styles
