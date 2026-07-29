--- 
title: automated_discovery_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_discovery_accounts
  - macie2
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

Creates, updates, deletes, gets or lists an <code>automated_discovery_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_discovery_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.automated_discovery_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_automated_discovery_accounts"
    values={[
        { label: 'list_automated_discovery_accounts', value: 'list_automated_discovery_accounts' }
    ]}
>
<TabItem value="list_automated_discovery_accounts">

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>The Amazon Web Services account ID for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of automated sensitive data discovery for the account. Possible values are: ENABLED, perform automated sensitive data discovery activities for the account; and, DISABLED, don't perform automated sensitive data discovery activities for the account. (ENABLED, DISABLED)</td>
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
    <td><a href="#list_automated_discovery_accounts"><CopyableCode code="list_automated_discovery_accounts" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-accountIds"><code>accountIds</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Retrieves the status of automated sensitive data discovery for one or more accounts.</td>
</tr>
<tr>
    <td><a href="#batch_update_automated_discovery_accounts"><CopyableCode code="batch_update_automated_discovery_accounts" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Changes the status of automated sensitive data discovery for one or more accounts.</td>
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
<tr id="parameter-accountIds">
    <td><CopyableCode code="accountIds" /></td>
    <td><code>array</code></td>
    <td>The Amazon Web Services account ID for each account, for as many as 50 accounts. To retrieve the status for multiple accounts, append the accountIds parameter and argument for each account, separated by an ampersand (&). To retrieve the status for all the accounts in an organization, omit this parameter.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of items to include in each page of a paginated response.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The nextToken string that specifies which page of results to return in a paginated response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_automated_discovery_accounts"
    values={[
        { label: 'list_automated_discovery_accounts', value: 'list_automated_discovery_accounts' }
    ]}
>
<TabItem value="list_automated_discovery_accounts">

Retrieves the status of automated sensitive data discovery for one or more accounts.

```sql
SELECT
account_id,
status
FROM aws.macie2.automated_discovery_accounts
WHERE region = '{{ region }}' -- required
AND accountIds = '{{ accountIds }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="batch_update_automated_discovery_accounts"
    values={[
        { label: 'batch_update_automated_discovery_accounts', value: 'batch_update_automated_discovery_accounts' }
    ]}
>
<TabItem value="batch_update_automated_discovery_accounts">

Changes the status of automated sensitive data discovery for one or more accounts.

```sql
EXEC aws.macie2.automated_discovery_accounts.batch_update_automated_discovery_accounts 
@region='{{ region }}' --required 
@@json=
'{
"accounts": "{{ accounts }}"
}'
;
```
</TabItem>
</Tabs>
