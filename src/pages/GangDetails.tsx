import { useParams, useNavigate } from 'react-router-dom';
import { useGangStore } from '../store/gangStore';
import { FighterForm } from '../components/FighterForm';
import { addCreditsToGang } from '../actions/addCreditsToGang';
import { Button, ButtonLine, Page, TabsFrame } from '@pawel-kuznik/react-faceplate';
import { useHouse } from '../utils/useHouse';
import { DescriptiveTitle } from '../components/DescriptiveTitle/DescriptiveTitle';
import { Counter } from '../components/Counter';
import { calculateGangValue } from '../actions/calculateGangValue';
import { useTranslation } from 'react-i18next';
import { Members } from './GangDetails/Members';
import { TradingPost } from './GangDetails/TradingPost';
import { Stash } from './GangDetails/Stash';
import { Rosters } from './GangDetails/Rosters';
import { Overview } from './GangDetails/Overview';

/**
 *  A page that displays the details of a gang.
 */
export function GangDetails() {
    const { t } = useTranslation();
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const { gangs, removeGang } = useGangStore();
    const gang = gangs.find(g => g.id === id);

    if (!gang) {
        return <div>Gang not found</div>;
    }

    const house = useHouse(gang.house);

    const handleAddCredits = (credits: number) => {
        addCreditsToGang(gang.id, credits);
    };

    const handleRemoveGang = () => {

        // TODO: Add a confirmation dialog

        removeGang(gang.id);
        navigate('/hideout/gangs');
    };

    return (
        <Page>
            <DescriptiveTitle title={gang.name} description={house.name}>
                <ButtonLine>
                    <Counter value={gang.reputation} label={t("gangDetails.reputation")} />
                    <Counter value={gang.credits} label={t("gangDetails.credits")} />
                    <Counter value={calculateGangValue(gang)} label={t("gangDetails.value")} />
                    <Button label={t("gangDetails.remove")} color="red" onClick={handleRemoveGang} />
                </ButtonLine>
            </DescriptiveTitle>

            <TabsFrame>
                <TabsFrame.Tab label={t("gangDetails.overview")}>
                    <Overview gang={gang} />
                </TabsFrame.Tab>
                <TabsFrame.Tab label={t("gangDetails.members")}>
                    <Members gang={gang} />
                </TabsFrame.Tab>
                <TabsFrame.Tab label={t("gangDetails.stash")}>
                    <Stash gang={gang} />
                </TabsFrame.Tab>
                <TabsFrame.Tab label={t("gangDetails.rosters")}>
                    <Rosters gang={gang} />
                </TabsFrame.Tab>
                <TabsFrame.Tab label={t("gangDetails.tradingPost")}>
                    <TradingPost gang={gang} />
                </TabsFrame.Tab>
            </TabsFrame>

            <div className="gang-info">
                <div className="gang-stats">
                    <button onClick={() => handleAddCredits(100)}>Add Credits</button>
                </div>

                <FighterForm gangId={gang.id} />
            </div>
        </Page>
    );
};