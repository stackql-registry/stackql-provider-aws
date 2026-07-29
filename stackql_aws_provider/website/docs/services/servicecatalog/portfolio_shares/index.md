--- 
title: portfolio_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - portfolio_shares
  - servicecatalog
  - aws
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage aws resources using SQL
custom_edit_url: null
image: /img/stackql-aws-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>portfolio_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portfolio_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.portfolio_shares" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_portfolio_shares"
    values={[
        { label: 'describe_portfolio_shares', value: 'describe_portfolio_shares' }
    ]}
>
<TabItem value="describe_portfolio_shares">

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="next_page_token" /></td>
    <td><code>string</code></td>
    <td>The page token to use to retrieve the next set of results. If there are no additional results, this value is null. (pattern: &lt;code&gt;&#91;\u0009\u000a\u000d\u0020-\uD7FF\uE000-\uFFFD&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="portfolio_share_details" /></td>
    <td><code>array</code></td>
    <td>Summaries about each of the portfolio shares.</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#describe_portfolio_shares"><CopyableCode code="describe_portfolio_shares" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns a summary of each of the portfolio shares that were created for the specified portfolio. You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share. The PortfolioId and Type parameters are both required.</td>
</tr>
<tr>
    <td><a href="#create_portfolio_share"><CopyableCode code="create_portfolio_share" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a></td>
    <td></td>
    <td>Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account. Note that if a delegated admin is de-registered, they can no longer create portfolio shares. AWSOrganizationsAccess must be enabled in order to create a portfolio share to an organization node. You can't share a shared resource, including portfolios that contain a shared product. If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the UpdatePortfolioShare API instead. When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is not an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using PrincipalType as IAM. With this configuration, the PrincipalARN must already exist in the recipient account before it can be associated.</td>
</tr>
<tr>
    <td><a href="#update_portfolio_share"><CopyableCode code="update_portfolio_share" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a></td>
    <td></td>
    <td>Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing or Principal sharing for an existing portfolio share. The portfolio share cannot be updated if the CreatePortfolioShare operation is IN_PROGRESS, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be completed. You must provide the accountId or organization node in the input, but not both. If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke UpdatePortfolioShare separately for each share type. This API cannot be used for removing the portfolio share. You must use DeletePortfolioShare API for that action. When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is not an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using PrincipalType as IAM. With this configuration, the PrincipalARN must already exist in the recipient account before it can be associated.</td>
</tr>
<tr>
    <td><a href="#delete_portfolio_share"><CopyableCode code="delete_portfolio_share" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator. Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="describe_portfolio_shares"
    values={[
        { label: 'describe_portfolio_shares', value: 'describe_portfolio_shares' }
    ]}
>
<TabItem value="describe_portfolio_shares">

Returns a summary of each of the portfolio shares that were created for the specified portfolio. You can use this API to determine which accounts or organizational nodes this portfolio have been shared, whether the recipient entity has imported the share, and whether TagOptions are included with the share. The PortfolioId and Type parameters are both required.

```sql
SELECT
next_page_token,
portfolio_share_details
FROM aws.servicecatalog.portfolio_shares
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_portfolio_share"
    values={[
        { label: 'create_portfolio_share', value: 'create_portfolio_share' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_portfolio_share">

Shares the specified portfolio with the specified account or organization node. Shares to an organization node can only be created by the management account of an organization or by a delegated administrator. You can share portfolios to an organization, an organizational unit, or a specific account. Note that if a delegated admin is de-registered, they can no longer create portfolio shares. AWSOrganizationsAccess must be enabled in order to create a portfolio share to an organization node. You can't share a shared resource, including portfolios that contain a shared product. If the portfolio share with the specified account or organization node already exists, this action will have no effect and will not return an error. To update an existing share, you must use the UpdatePortfolioShare API instead. When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is not an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using PrincipalType as IAM. With this configuration, the PrincipalARN must already exist in the recipient account before it can be associated.

```sql
INSERT INTO aws.servicecatalog.portfolio_shares (
AcceptLanguage,
PortfolioId,
AccountId,
OrganizationNode,
ShareTagOptions,
SharePrincipals,
region
)
SELECT 
'{{ AcceptLanguage }}',
'{{ PortfolioId }}' /* required */,
'{{ AccountId }}',
'{{ OrganizationNode }}',
{{ ShareTagOptions }},
{{ SharePrincipals }},
'{{ region }}'
RETURNING
portfolio_share_token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: portfolio_shares
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the portfolio_shares resource.
    - name: AcceptLanguage
      value: "{{ AcceptLanguage }}"
      description: |
        The language code. jp - Japanese zh - Chinese
    - name: PortfolioId
      value: "{{ PortfolioId }}"
      description: |
        The portfolio identifier.
    - name: AccountId
      value: "{{ AccountId }}"
      description: |
        The Amazon Web Services account ID. For example, 123456789012.
    - name: OrganizationNode
      description: |
        The organization node to whom you are going to share. When you pass OrganizationNode, it creates PortfolioShare for all of the Amazon Web Services accounts that are associated to the OrganizationNode. The output returns a PortfolioShareToken, which enables the administrator to monitor the status of the PortfolioShare creation process.
      value:
        Type: "{{ Type }}"
        Value: "{{ Value }}"
    - name: ShareTagOptions
      value: {{ ShareTagOptions }}
      description: |
        Enables or disables TagOptions sharing when creating the portfolio share. If this flag is not provided, TagOptions sharing is disabled.
    - name: SharePrincipals
      value: {{ SharePrincipals }}
      description: |
        This parameter is only supported for portfolios with an OrganizationalNode Type of ORGANIZATION or ORGANIZATIONAL_UNIT. Enables or disables Principal sharing when creating the portfolio share. If you do not provide this flag, principal sharing is disabled. When you enable Principal Name Sharing for a portfolio share, the share recipient account end users with a principal that matches any of the associated IAM patterns can provision products from the portfolio. Once shared, the share recipient can view associations of PrincipalType: IAM_PATTERN on their portfolio. You can create the principals in the recipient account before or after creating the share.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_portfolio_share"
    values={[
        { label: 'update_portfolio_share', value: 'update_portfolio_share' }
    ]}
>
<TabItem value="update_portfolio_share">

Updates the specified portfolio share. You can use this API to enable or disable TagOptions sharing or Principal sharing for an existing portfolio share. The portfolio share cannot be updated if the CreatePortfolioShare operation is IN_PROGRESS, as the share is not available to recipient entities. In this case, you must wait for the portfolio share to be completed. You must provide the accountId or organization node in the input, but not both. If the portfolio is shared to both an external account and an organization node, and both shares need to be updated, you must invoke UpdatePortfolioShare separately for each share type. This API cannot be used for removing the portfolio share. You must use DeletePortfolioShare API for that action. When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is not an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using PrincipalType as IAM. With this configuration, the PrincipalARN must already exist in the recipient account before it can be associated.

```sql
UPDATE aws.servicecatalog.portfolio_shares
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
PortfolioId = '{{ PortfolioId }}',
AccountId = '{{ AccountId }}',
OrganizationNode = '{{ OrganizationNode }}',
ShareTagOptions = {{ ShareTagOptions }},
SharePrincipals = {{ SharePrincipals }}
WHERE 
region = '{{ region }}' --required
AND PortfolioId = '{{ PortfolioId }}' --required
RETURNING
portfolio_share_token,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_portfolio_share"
    values={[
        { label: 'delete_portfolio_share', value: 'delete_portfolio_share' }
    ]}
>
<TabItem value="delete_portfolio_share">

Stops sharing the specified portfolio with the specified account or organization node. Shares to an organization node can only be deleted by the management account of an organization or by a delegated administrator. Note that if a delegated admin is de-registered, portfolio shares created from that account are removed.

```sql
DELETE FROM aws.servicecatalog.portfolio_shares
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
