--- 
title: partner_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - partner_accounts
  - iotwireless
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

Creates, updates, deletes, gets or lists a <code>partner_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partner_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotwireless.partner_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_partner_account"
    values={[
        { label: 'get_partner_account', value: 'get_partner_account' },
        { label: 'list_partner_accounts', value: 'list_partner_accounts' }
    ]}
>
<TabItem value="get_partner_account">

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
    <td><CopyableCode code="account_linked" /></td>
    <td><code>boolean</code></td>
    <td>Whether the partner account is linked to the AWS account.</td>
</tr>
<tr>
    <td><CopyableCode code="sidewalk" /></td>
    <td><code>object</code></td>
    <td>Information about a Sidewalk account.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_partner_accounts">

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
    <td><CopyableCode code="next_token" /></td>
    <td><code>string</code></td>
    <td>The token to use to get the next set of results, or null if there are no additional results.</td>
</tr>
<tr>
    <td><CopyableCode code="sidewalk" /></td>
    <td><code>array</code></td>
    <td>The Sidewalk account credentials.</td>
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
    <td><a href="#get_partner_account"><CopyableCode code="get_partner_account" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-partner_account_id"><code>partner_account_id</code></a>, <a href="#parameter-partnerType"><code>partnerType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets information about a partner account. If PartnerAccountId and PartnerType are null, returns all partner accounts.</td>
</tr>
<tr>
    <td><a href="#list_partner_accounts"><CopyableCode code="list_partner_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the partner accounts associated with your AWS account.</td>
</tr>
<tr>
    <td><a href="#update_partner_account"><CopyableCode code="update_partner_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-partner_account_id"><code>partner_account_id</code></a>, <a href="#parameter-partnerType"><code>partnerType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates properties of a partner account.</td>
</tr>
<tr>
    <td><a href="#associate_aws_account_with_partner_account"><CopyableCode code="associate_aws_account_with_partner_account" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Associates a partner account with your AWS account.</td>
</tr>
<tr>
    <td><a href="#disassociate_aws_account_from_partner_account"><CopyableCode code="disassociate_aws_account_from_partner_account" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-partner_account_id"><code>partner_account_id</code></a>, <a href="#parameter-partnerType"><code>partnerType</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Disassociates your AWS account from a partner account. If PartnerAccountId and PartnerType are null, disassociates your AWS account from all partner accounts.</td>
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
<tr id="parameter-partnerType">
    <td><CopyableCode code="partnerType" /></td>
    <td><code>string</code></td>
    <td>The partner type.</td>
</tr>
<tr id="parameter-partner_account_id">
    <td><CopyableCode code="partner_account_id" /></td>
    <td><code>string</code></td>
    <td>The partner account ID to disassociate from the AWS account.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return in this operation.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>To retrieve the next set of results, the nextToken value from a previous response; otherwise null to receive the first set of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_partner_account"
    values={[
        { label: 'get_partner_account', value: 'get_partner_account' },
        { label: 'list_partner_accounts', value: 'list_partner_accounts' }
    ]}
>
<TabItem value="get_partner_account">

Gets information about a partner account. If PartnerAccountId and PartnerType are null, returns all partner accounts.

```sql
SELECT
account_linked,
sidewalk
FROM aws.iotwireless.partner_accounts
WHERE partner_account_id = '{{ partner_account_id }}' -- required
AND partnerType = '{{ partnerType }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_partner_accounts">

Lists the partner accounts associated with your AWS account.

```sql
SELECT
next_token,
sidewalk
FROM aws.iotwireless.partner_accounts
WHERE region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_partner_account"
    values={[
        { label: 'update_partner_account', value: 'update_partner_account' },
        { label: 'associate_aws_account_with_partner_account', value: 'associate_aws_account_with_partner_account' }
    ]}
>
<TabItem value="update_partner_account">

Updates properties of a partner account.

```sql
UPDATE aws.iotwireless.partner_accounts
SET 
Sidewalk = '{{ Sidewalk }}'
WHERE 
partner_account_id = '{{ partner_account_id }}' --required
AND partnerType = '{{ partnerType }}' --required
AND region = '{{ region }}' --required;
```
</TabItem>
<TabItem value="associate_aws_account_with_partner_account">

Associates a partner account with your AWS account.

```sql
UPDATE aws.iotwireless.partner_accounts
SET 
Sidewalk = '{{ Sidewalk }}',
ClientRequestToken = '{{ ClientRequestToken }}',
Tags = '{{ Tags }}'
WHERE 
region = '{{ region }}' --required
RETURNING
arn,
sidewalk;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="disassociate_aws_account_from_partner_account"
    values={[
        { label: 'disassociate_aws_account_from_partner_account', value: 'disassociate_aws_account_from_partner_account' }
    ]}
>
<TabItem value="disassociate_aws_account_from_partner_account">

Disassociates your AWS account from a partner account. If PartnerAccountId and PartnerType are null, disassociates your AWS account from all partner accounts.

```sql
EXEC aws.iotwireless.partner_accounts.disassociate_aws_account_from_partner_account 
@partner_account_id='{{ partner_account_id }}' --required, 
@partnerType='{{ partnerType }}' --required, 
@region='{{ region }}' --required
;
```
</TabItem>
</Tabs>
