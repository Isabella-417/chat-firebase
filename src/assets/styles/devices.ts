const devices = {
  ExtraSmallMobile: '319px',
  SmallMobile: '320px',
  MediumMobile: '425px',
  LargeMobile: '435px',
  Tablet: '768px',
  DesktopSmall: '1024px',
  DesktopMedium: '1440px',
  DesktopLarge: '2560px'
}

export const sizes = {
  extraSmallMobile: `(max-width: ${devices.ExtraSmallMobile})`,
  mobile: `(max-width: ${devices.LargeMobile}) and (min-width: ${devices.SmallMobile})`,
  tablet: `(max-width: ${devices.DesktopSmall}) and (min-width: ${devices.Tablet})`,
  desktop: `(min-width: ${devices.DesktopSmall})`
}
