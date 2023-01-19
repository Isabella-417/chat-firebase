const devices = {
  SmallMobile: '320px',
  MediumMobile: '375px',
  LargeMobile: '425px',
  Tablet: '768px',
  DesktopSmall: '1024px',
  DesktopMedium: '1440px',
  DesktopLarge: '2560px'
}

export const sizes = {
  mobile: `(max-width: ${devices.LargeMobile}) and (min-width: ${devices.SmallMobile})`,
  tablet: `(max-width: ${devices.DesktopSmall}) and (min-width: ${devices.Tablet})`,
  desktop: `(min-width: ${devices.DesktopSmall})`
}
