import {
  Pre,
  YStack,
} from '@my/ui'
import React from 'react'

export function HomeScreen() {
  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <Pre>Here is some text that is green in dev but grey in prod</Pre>
    </YStack>
  )
}
