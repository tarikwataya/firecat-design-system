import { styled } from '../../styles'
import { rgba } from 'polished'

export const TextInputContainer = styled('div', {
  backgroundColor: '$white',
  borderRadius: '$md',
  boxSizing: 'border-box',
  border: '2px solid $gray100',
  display: 'flex',
  alignItems: 'center',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:focus)': {
    borderColor: '$firecat300',
    boxShadow: `0 0 0 4px ${rgba('#2196f3', 0.12)}`,
  },

  '&:has(input:disabled)': {
    backgroundColor: '$gray100',
    cursor: 'not-allowed',
  },

  defaultVariants: {
    size: 'md',
  },
})

export const Prefix = styled('span', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$gray200',
  fontWeight: 'regular',
})

export const Input = styled('input', {
  fontFamily: '$default',
  fontSize: '$sm',
  color: '$black',
  fontWeight: 'regular',
  background: 'transparent',
  border: 0,
  width: '100%',

  '&:focus': {
    outline: 0,
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&::placeholder': {
    color: '$gray200',
  },
})
