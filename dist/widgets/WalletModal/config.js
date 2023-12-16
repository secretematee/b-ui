import Metamask from "./icons/Metamask";
import TrustWallet from "./icons/TrustWallet";
import WalletConnect from "./icons/WalletConnect";
import { ConnectorNames } from "./types";
var connectors = [
    {
        title: "Metamask",
        icon: Metamask,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: TrustWallet,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: WalletConnect,
        connectorId: ConnectorNames.WalletConnect,
    },
];
export default connectors;
export var connectorLocalStorageKey = "connectorId";
