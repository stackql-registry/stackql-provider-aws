--- 
title: accounts_in_account_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - accounts_in_account_pools
  - datazone
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

Creates, updates, deletes, gets or lists an <code>accounts_in_account_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="accounts_in_account_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.datazone.accounts_in_account_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_accounts_in_account_pool"
    values={[
        { label: 'list_accounts_in_account_pool', value: 'list_accounts_in_account_pool' }
    ]}
>
<TabItem value="list_accounts_in_account_pool">

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
    <td><CopyableCode code="awsAccountId" /></td>
    <td><code>string</code></td>
    <td>The account ID. (pattern: &lt;code&gt;\d&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="awsAccountName" /></td>
    <td><code>string</code></td>
    <td>The account name.</td>
</tr>
<tr>
    <td><CopyableCode code="supportedRegions" /></td>
    <td><code>array</code></td>
    <td>The regions supported for an account within an account pool.</td>
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
    <td><a href="#list_accounts_in_account_pool"><CopyableCode code="list_accounts_in_account_pool" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_identifier"><code>domain_identifier</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-nextToken"><code>nextToken</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a></td>
    <td>Lists the accounts in the specified account pool.</td>
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
<tr id="parameter-domain_identifier">
    <td><CopyableCode code="domain_identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the domain in which the accounts in the specified account pool are to be listed.</td>
</tr>
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The ID of the account pool whose accounts are to be listed.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of accounts to return in a single call to ListAccountsInAccountPool. When the number of accounts to be listed is greater than the value of MaxResults, the response contains a NextToken value that you can use in a subsequent call to ListAccountsInAccountPool to list the next set of accounts.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>When the number of accounts is greater than the default value for the MaxResults parameter, or if you explicitly specify a value for MaxResults that is less than the number of accounts, the response includes a pagination token named NextToken. You can specify this NextToken value in a subsequent call to ListAccountsInAccountPool to list the next set of accounts.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_accounts_in_account_pool"
    values={[
        { label: 'list_accounts_in_account_pool', value: 'list_accounts_in_account_pool' }
    ]}
>
<TabItem value="list_accounts_in_account_pool">

Lists the accounts in the specified account pool.

```sql
SELECT
awsAccountId,
awsAccountName,
supportedRegions
FROM aws.datazone.accounts_in_account_pools
WHERE domain_identifier = '{{ domain_identifier }}' -- required
AND identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND nextToken = '{{ nextToken }}'
AND maxResults = '{{ maxResults }}'
;
```
</TabItem>
</Tabs>
