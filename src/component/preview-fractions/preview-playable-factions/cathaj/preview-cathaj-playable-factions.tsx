import {
    Box,
    Flex,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
    useStyles,
    useTab,
    Image,
    Link,
    Button,
    Spacer
} from "@chakra-ui/react";
import "../../../../css/preview-playable-faction.content.css"
import MiaoYingIcon from "../../../../resources/lord-icon/miao-ying-icon.png"
import MiaoYingChoosingIcon from "../../../../resources/lord-icon/miao-ying-chosing-icon.png";
import ZhaoMingIcon from "../../../../resources/lord-icon/zhao-ming-icon.png"
import ZhaoMingChoosingIcon from "../../../../resources/lord-icon/zhao-ming-choosing-icon.png"
import PreviewMiaoYing from "./preview-miao-ying";
import PreviewZhaoMing from "./preview-zhao-ming";

const MiaoYing = [MiaoYingIcon, MiaoYingChoosingIcon];
const ZhaoMing = [ZhaoMingIcon, ZhaoMingChoosingIcon];

const PreviewCathajPlayableFactions = () => {
    const CustomIcon = (props: any) => {
        const styles = useStyles();
        const tabProps = useTab(props);
        const isSelected = tabProps["aria-selected"];

        return (
            <Box as="button" sx={styles.tab} {...tabProps}>
                <Box as="span" mr="2">
                    {isSelected ?
                        <>
                            <Image width={86} height={115} src={props.children[1]}/>
                        </>
                        :
                        <>
                            <Image width={86} height={115} src={props.children[0]}/>
                        </>
                    }
                </Box>
            </Box>
        );
    }

    return (
        <>
            <Flex>
                <Box marginLeft={5}>
                    <Link href={`/`}>
                        <Button width={175} colorScheme={"blackAlpha"}>
                            <Text className={"button-text"}>
                                Back to main page
                            </Text>
                        </Button>
                    </Link>
                </Box>

                <Spacer/>

                <Text className={"text"}>
                    Cathaj: Playable Factions
                </Text>

                <Spacer/>

                <Box marginRight={5}>
                    <Link href={`/comparison`}>
                        <Button width={175} colorScheme={"blackAlpha"}>
                            <Text className={"button-text"}>
                                Character Comparison
                            </Text>
                        </Button>
                    </Link>
                </Box>
            </Flex>

            <Flex>
                <Tabs variant='unstyled'>
                    <TabList marginLeft={100} marginTop={25}>
                        <CustomIcon>
                            {MiaoYing}
                        </CustomIcon>
                        <CustomIcon>
                            {ZhaoMing}
                        </CustomIcon>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <PreviewMiaoYing/>
                        </TabPanel>

                        <TabPanel>
                            <PreviewZhaoMing/>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </>
    )
}

export default PreviewCathajPlayableFactions