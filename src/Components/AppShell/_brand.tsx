import { Box, Group } from '@mantine/core';
import { Logo } from './_logo';
export const Brand = () => {
    return(
        <Box sx={ (theme) => ({
            paddingLeft: theme.spacing.xs,
            paddingRight: theme.spacing.xs,
            paddingBottom: theme.spacing.lg,
            borderBottom: `1px solid ${theme.colors.dark[4]}`
        }) }>
            <Group position="apart">
                <Logo />
            </Group>
        </Box>
    )
}