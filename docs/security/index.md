# Security

Information about Yearn's security processes, team members, disclosures, PGP keys and more can be found in the [/yearn-security](https://github.com/yearn/yearn-security) repo on Github.

## Vulnerability disclosure process

Potential vulnerabilities are welcomed to be disclosed following the guidelines established in [/yearn-security/SECURITY.md](https://github.com/yearn/yearn-security/blob/master/SECURITY.md). Valid vulnerabilities may be eligble for bounty rewards.

## Audits

Reports from audits on Yearn's vaults, strategies, and other protocol components can be found under [yearn-security/audits](https://github.com/yearn/yearn-security/tree/master/audits).

## Security assumption

Yearn as a protocol hinges on the critical assumption that the `Governance` role is honest. This role is currently controlled by a [6 of 9 Gnosis Safe mu-sig](https://gov.yearn.finance/t/yip-62-change-two-multisig-signers/10758).

A compromised or malicious Governance can cause catastrophic damage across the entire protocol.

It is a conscious design decision that this role is not behind a time lock. Priority is given to the ability to rapidly update and iterate on live vaults, strategies, and other components. Both so as not to advertise new investment strategies in advance, but also in order to rapidly improve our existing components without interruption. It also avoids downtimes whenever there is a bug or security vulnerability that needs to be fixed.

Trusting `Governance` to be honest is a pre-requisite in order to be able to trust Yearn's vaults.

Modifications to these design decisions can be proposed in the forum through [Yearn's governance process](https://gov.yearn.finance/t/yip-61-governance-2-0/10460).
