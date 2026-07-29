--- 
title: portfolios
hide_title: false
hide_table_of_contents: false
keywords:
  - portfolios
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

Creates, updates, deletes, gets or lists a <code>portfolios</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="portfolios" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.servicecatalog.portfolios" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_portfolio"
    values={[
        { label: 'describe_portfolio', value: 'describe_portfolio' }
    ]}
>
<TabItem value="describe_portfolio">

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
    <td><CopyableCode code="budgets" /></td>
    <td><code>array</code></td>
    <td>Information about the associated budgets.</td>
</tr>
<tr>
    <td><CopyableCode code="portfolio_detail" /></td>
    <td><code>object</code></td>
    <td>Information about the portfolio.</td>
</tr>
<tr>
    <td><CopyableCode code="tag_options" /></td>
    <td><code>array</code></td>
    <td>Information about the TagOptions associated with the portfolio.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Information about the tags associated with the portfolio.</td>
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
    <td><a href="#describe_portfolio"><CopyableCode code="describe_portfolio" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about the specified portfolio. A delegated admin is authorized to invoke this command.</td>
</tr>
<tr>
    <td><a href="#create_portfolio"><CopyableCode code="create_portfolio" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-DisplayName"><code>DisplayName</code></a>, <a href="#parameter-ProviderName"><code>ProviderName</code></a>, <a href="#parameter-IdempotencyToken"><code>IdempotencyToken</code></a></td>
    <td></td>
    <td>Creates a portfolio. A delegated admin is authorized to invoke this command.</td>
</tr>
<tr>
    <td><a href="#associate_principal_with_portfolio"><CopyableCode code="associate_principal_with_portfolio" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a>, <a href="#parameter-PrincipalARN"><code>PrincipalARN</code></a>, <a href="#parameter-PrincipalType"><code>PrincipalType</code></a></td>
    <td></td>
    <td>Associates the specified principal ARN with the specified portfolio. If you share the portfolio with principal name sharing enabled, the PrincipalARN association is included in the share. The PortfolioID, PrincipalARN, and PrincipalType parameters are required. You can associate a maximum of 10 Principals with a portfolio using PrincipalType as IAM_PATTERN. When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is not an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using PrincipalType as IAM. With this configuration, the PrincipalARN must already exist in the recipient account before it can be associated.</td>
</tr>
<tr>
    <td><a href="#associate_product_with_portfolio"><CopyableCode code="associate_product_with_portfolio" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a></td>
    <td></td>
    <td>Associates the specified product with the specified portfolio. A delegated admin is authorized to invoke this command.</td>
</tr>
<tr>
    <td><a href="#disassociate_principal_from_portfolio"><CopyableCode code="disassociate_principal_from_portfolio" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a>, <a href="#parameter-PrincipalARN"><code>PrincipalARN</code></a></td>
    <td></td>
    <td>Disassociates a previously associated principal ARN from a specified portfolio. The PrincipalType and PrincipalARN must match the AssociatePrincipalWithPortfolio call request details. For example, to disassociate an association created with a PrincipalARN of PrincipalType IAM you must use the PrincipalType IAM when calling DisassociatePrincipalFromPortfolio. For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. For more information, review associate-principal-with-portfolio in the Amazon Web Services CLI Command Reference. If you disassociate a principal from a portfolio, with PrincipalType as IAM, the same principal will still have access to the portfolio if it matches one of the associated principals of type IAM_PATTERN. To fully remove access for a principal, verify all the associated Principals of type IAM_PATTERN, and then ensure you disassociate any IAM_PATTERN principals that match the principal whose access you are removing.</td>
</tr>
<tr>
    <td><a href="#update_portfolio"><CopyableCode code="update_portfolio" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the specified portfolio. You cannot update a product that was shared with you.</td>
</tr>
<tr>
    <td><a href="#delete_portfolio"><CopyableCode code="delete_portfolio" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes the specified portfolio. You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts. A delegated admin is authorized to invoke this command.</td>
</tr>
<tr>
    <td><a href="#accept_portfolio_share"><CopyableCode code="accept_portfolio_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a></td>
    <td></td>
    <td>Accepts an offer to share the specified portfolio.</td>
</tr>
<tr>
    <td><a href="#disassociate_product_from_portfolio"><CopyableCode code="disassociate_product_from_portfolio" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ProductId"><code>ProductId</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a></td>
    <td></td>
    <td>Disassociates the specified product from the specified portfolio. A delegated admin is authorized to invoke this command.</td>
</tr>
<tr>
    <td><a href="#list_portfolios"><CopyableCode code="list_portfolios" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all portfolios in the catalog.</td>
</tr>
<tr>
    <td><a href="#reject_portfolio_share"><CopyableCode code="reject_portfolio_share" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-PortfolioId"><code>PortfolioId</code></a></td>
    <td></td>
    <td>Rejects an offer to share the specified portfolio.</td>
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
    defaultValue="describe_portfolio"
    values={[
        { label: 'describe_portfolio', value: 'describe_portfolio' }
    ]}
>
<TabItem value="describe_portfolio">

Gets information about the specified portfolio. A delegated admin is authorized to invoke this command.

```sql
SELECT
budgets,
portfolio_detail,
tag_options,
tags
FROM aws.servicecatalog.portfolios
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_portfolio"
    values={[
        { label: 'create_portfolio', value: 'create_portfolio' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_portfolio">

Creates a portfolio. A delegated admin is authorized to invoke this command.

```sql
INSERT INTO aws.servicecatalog.portfolios (
AcceptLanguage,
DisplayName,
Description,
ProviderName,
Tags,
IdempotencyToken,
region
)
SELECT 
'{{ AcceptLanguage }}',
'{{ DisplayName }}' /* required */,
'{{ Description }}',
'{{ ProviderName }}' /* required */,
'{{ Tags }}',
'{{ IdempotencyToken }}' /* required */,
'{{ region }}'
RETURNING
portfolio_detail,
tags
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: portfolios
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the portfolios resource.
    - name: AcceptLanguage
      value: "{{ AcceptLanguage }}"
      description: |
        The language code. jp - Japanese zh - Chinese
    - name: DisplayName
      value: "{{ DisplayName }}"
      description: |
        The name to use for display purposes.
    - name: Description
      value: "{{ Description }}"
      description: |
        The description of the portfolio.
    - name: ProviderName
      value: "{{ ProviderName }}"
      description: |
        The name of the portfolio provider.
    - name: Tags
      description: |
        One or more tags.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: IdempotencyToken
      value: "{{ IdempotencyToken }}"
      description: |
        A unique identifier that you provide to ensure idempotency. If multiple requests differ only by the idempotency token, the same response is returned for each repeated request.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_principal_with_portfolio"
    values={[
        { label: 'associate_principal_with_portfolio', value: 'associate_principal_with_portfolio' },
        { label: 'associate_product_with_portfolio', value: 'associate_product_with_portfolio' },
        { label: 'disassociate_principal_from_portfolio', value: 'disassociate_principal_from_portfolio' },
        { label: 'update_portfolio', value: 'update_portfolio' }
    ]}
>
<TabItem value="associate_principal_with_portfolio">

Associates the specified principal ARN with the specified portfolio. If you share the portfolio with principal name sharing enabled, the PrincipalARN association is included in the share. The PortfolioID, PrincipalARN, and PrincipalType parameters are required. You can associate a maximum of 10 Principals with a portfolio using PrincipalType as IAM_PATTERN. When you associate a principal with portfolio, a potential privilege escalation path may occur when that portfolio is then shared with other accounts. For a user in a recipient account who is not an Service Catalog Admin, but still has the ability to create Principals (Users/Groups/Roles), that user could create a role that matches a principal name association for the portfolio. Although this user may not know which principal names are associated through Service Catalog, they may be able to guess the user. If this potential escalation path is a concern, then Service Catalog recommends using PrincipalType as IAM. With this configuration, the PrincipalARN must already exist in the recipient account before it can be associated.

```sql
UPDATE aws.servicecatalog.portfolios
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
PortfolioId = '{{ PortfolioId }}',
PrincipalARN = '{{ PrincipalARN }}',
PrincipalType = '{{ PrincipalType }}'
WHERE 
region = '{{ region }}' --required
AND PortfolioId = '{{ PortfolioId }}' --required
AND PrincipalARN = '{{ PrincipalARN }}' --required
AND PrincipalType = '{{ PrincipalType }}' --required;
```
</TabItem>
<TabItem value="associate_product_with_portfolio">

Associates the specified product with the specified portfolio. A delegated admin is authorized to invoke this command.

```sql
UPDATE aws.servicecatalog.portfolios
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
ProductId = '{{ ProductId }}',
PortfolioId = '{{ PortfolioId }}',
SourcePortfolioId = '{{ SourcePortfolioId }}'
WHERE 
region = '{{ region }}' --required
AND ProductId = '{{ ProductId }}' --required
AND PortfolioId = '{{ PortfolioId }}' --required;
```
</TabItem>
<TabItem value="disassociate_principal_from_portfolio">

Disassociates a previously associated principal ARN from a specified portfolio. The PrincipalType and PrincipalARN must match the AssociatePrincipalWithPortfolio call request details. For example, to disassociate an association created with a PrincipalARN of PrincipalType IAM you must use the PrincipalType IAM when calling DisassociatePrincipalFromPortfolio. For portfolios that have been shared with principal name sharing enabled: after disassociating a principal, share recipient accounts will no longer be able to provision products in this portfolio using a role matching the name of the associated principal. For more information, review associate-principal-with-portfolio in the Amazon Web Services CLI Command Reference. If you disassociate a principal from a portfolio, with PrincipalType as IAM, the same principal will still have access to the portfolio if it matches one of the associated principals of type IAM_PATTERN. To fully remove access for a principal, verify all the associated Principals of type IAM_PATTERN, and then ensure you disassociate any IAM_PATTERN principals that match the principal whose access you are removing.

```sql
UPDATE aws.servicecatalog.portfolios
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
PortfolioId = '{{ PortfolioId }}',
PrincipalARN = '{{ PrincipalARN }}',
PrincipalType = '{{ PrincipalType }}'
WHERE 
region = '{{ region }}' --required
AND PortfolioId = '{{ PortfolioId }}' --required
AND PrincipalARN = '{{ PrincipalARN }}' --required;
```
</TabItem>
<TabItem value="update_portfolio">

Updates the specified portfolio. You cannot update a product that was shared with you.

```sql
UPDATE aws.servicecatalog.portfolios
SET 
AcceptLanguage = '{{ AcceptLanguage }}',
Id = '{{ Id }}',
DisplayName = '{{ DisplayName }}',
Description = '{{ Description }}',
ProviderName = '{{ ProviderName }}',
AddTags = '{{ AddTags }}',
RemoveTags = '{{ RemoveTags }}'
WHERE 
region = '{{ region }}' --required
RETURNING
portfolio_detail,
tags;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_portfolio"
    values={[
        { label: 'delete_portfolio', value: 'delete_portfolio' }
    ]}
>
<TabItem value="delete_portfolio">

Deletes the specified portfolio. You cannot delete a portfolio if it was shared with you or if it has associated products, users, constraints, or shared accounts. A delegated admin is authorized to invoke this command.

```sql
DELETE FROM aws.servicecatalog.portfolios
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="accept_portfolio_share"
    values={[
        { label: 'accept_portfolio_share', value: 'accept_portfolio_share' },
        { label: 'disassociate_product_from_portfolio', value: 'disassociate_product_from_portfolio' },
        { label: 'list_portfolios', value: 'list_portfolios' },
        { label: 'reject_portfolio_share', value: 'reject_portfolio_share' }
    ]}
>
<TabItem value="accept_portfolio_share">

Accepts an offer to share the specified portfolio.

```sql
EXEC aws.servicecatalog.portfolios.accept_portfolio_share 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"PortfolioId": "{{ PortfolioId }}", 
"PortfolioShareType": "{{ PortfolioShareType }}"
}'
;
```
</TabItem>
<TabItem value="disassociate_product_from_portfolio">

Disassociates the specified product from the specified portfolio. A delegated admin is authorized to invoke this command.

```sql
EXEC aws.servicecatalog.portfolios.disassociate_product_from_portfolio 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"ProductId": "{{ ProductId }}", 
"PortfolioId": "{{ PortfolioId }}"
}'
;
```
</TabItem>
<TabItem value="list_portfolios">

Lists all portfolios in the catalog.

```sql
EXEC aws.servicecatalog.portfolios.list_portfolios 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"PageToken": "{{ PageToken }}", 
"PageSize": {{ PageSize }}
}'
;
```
</TabItem>
<TabItem value="reject_portfolio_share">

Rejects an offer to share the specified portfolio.

```sql
EXEC aws.servicecatalog.portfolios.reject_portfolio_share 
@region='{{ region }}' --required 
@@json=
'{
"AcceptLanguage": "{{ AcceptLanguage }}", 
"PortfolioId": "{{ PortfolioId }}", 
"PortfolioShareType": "{{ PortfolioShareType }}"
}'
;
```
</TabItem>
</Tabs>
