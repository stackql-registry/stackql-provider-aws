--- 
title: limits
hide_title: false
hide_table_of_contents: false
keywords:
  - limits
  - dynamodb
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

Creates, updates, deletes, gets or lists a <code>limits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="limits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.dynamodb.limits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_limits"
    values={[
        { label: 'describe_limits', value: 'describe_limits' }
    ]}
>
<TabItem value="describe_limits">

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
    <td><CopyableCode code="AccountMaxReadCapacityUnits" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum total read capacity units that your account allows you to provision across all of your tables in this Region.</td>
</tr>
<tr>
    <td><CopyableCode code="AccountMaxWriteCapacityUnits" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum total write capacity units that your account allows you to provision across all of your tables in this Region.</td>
</tr>
<tr>
    <td><CopyableCode code="TableMaxReadCapacityUnits" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum read capacity units that your account allows you to provision for a new table that you are creating in this Region, including the read capacity units provisioned for its global secondary indexes (GSIs).</td>
</tr>
<tr>
    <td><CopyableCode code="TableMaxWriteCapacityUnits" /></td>
    <td><code>integer (int64)</code></td>
    <td>The maximum write capacity units that your account allows you to provision for a new table that you are creating in this Region, including the write capacity units provisioned for its global secondary indexes (GSIs).</td>
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
    <td><a href="#describe_limits"><CopyableCode code="describe_limits" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there. When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see Service, Account, and Table Quotas page in the Amazon DynamoDB Developer Guide. Although you can increase these quotas by filing a case at Amazon Web Services Support Center, obtaining the increase is not instantaneous. The DescribeLimits action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota. For example, you could use one of the Amazon Web Services SDKs to do the following: Call DescribeLimits for a particular Region to obtain your current account quotas on provisioned capacity there. Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both. Call ListTables to obtain a list of all your DynamoDB tables. For each table name listed by ListTables, do the following: Call DescribeTable with the table name. Use the data returned by DescribeTable to add the read capacity units and write capacity units provisioned for the table itself to your variables. If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well. Report the account quotas for that Region returned by DescribeLimits, along with the total current provisioned capacity levels you have calculated. This will let you see whether you are getting close to your account-level quotas. The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes. For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas. DescribeLimits should only be called periodically. You can expect throttling errors if you call it more than once in a minute. The DescribeLimits Request element has no content.</td>
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
    defaultValue="describe_limits"
    values={[
        { label: 'describe_limits', value: 'describe_limits' }
    ]}
>
<TabItem value="describe_limits">

Returns the current provisioned-capacity quotas for your Amazon Web Services account in a Region, both for the Region as a whole and for any one DynamoDB table that you create there. When you establish an Amazon Web Services account, the account has initial quotas on the maximum read capacity units and write capacity units that you can provision across all of your DynamoDB tables in a given Region. Also, there are per-table quotas that apply when you create a table there. For more information, see Service, Account, and Table Quotas page in the Amazon DynamoDB Developer Guide. Although you can increase these quotas by filing a case at Amazon Web Services Support Center, obtaining the increase is not instantaneous. The DescribeLimits action lets you write code to compare the capacity you are currently using to those quotas imposed by your account so that you have enough time to apply for an increase before you hit a quota. For example, you could use one of the Amazon Web Services SDKs to do the following: Call DescribeLimits for a particular Region to obtain your current account quotas on provisioned capacity there. Create a variable to hold the aggregate read capacity units provisioned for all your tables in that Region, and one to hold the aggregate write capacity units. Zero them both. Call ListTables to obtain a list of all your DynamoDB tables. For each table name listed by ListTables, do the following: Call DescribeTable with the table name. Use the data returned by DescribeTable to add the read capacity units and write capacity units provisioned for the table itself to your variables. If the table has one or more global secondary indexes (GSIs), loop over these GSIs and add their provisioned capacity values to your variables as well. Report the account quotas for that Region returned by DescribeLimits, along with the total current provisioned capacity levels you have calculated. This will let you see whether you are getting close to your account-level quotas. The per-table quotas apply only when you are creating a new table. They restrict the sum of the provisioned capacity of the new table itself and all its global secondary indexes. For existing tables and their GSIs, DynamoDB doesn't let you increase provisioned capacity extremely rapidly, but the only quota that applies is that the aggregate provisioned capacity over all your tables and GSIs cannot exceed either of the per-account quotas. DescribeLimits should only be called periodically. You can expect throttling errors if you call it more than once in a minute. The DescribeLimits Request element has no content.

```sql
SELECT
AccountMaxReadCapacityUnits,
AccountMaxWriteCapacityUnits,
TableMaxReadCapacityUnits,
TableMaxWriteCapacityUnits
FROM aws.dynamodb.limits
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
