import { UseValidationState } from '@stackoverfloweth/vue-compositions'

export type State = Pick<UseValidationState, 'pending' | 'valid' | 'validated'>