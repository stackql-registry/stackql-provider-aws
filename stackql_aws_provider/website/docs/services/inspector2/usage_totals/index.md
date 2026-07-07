--- 
title: usage_totals
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_totals
  - inspector2
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

Creates, updates, deletes, gets or lists a <code>usage_totals</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_totals" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.inspector2.usage_totals" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_usage_totals"
    values={[
        { label: 'list_usage_totals', value: 'list_usage_totals' }
    ]}
>
<TabItem value="list_usage_totals">

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
    <td><CopyableCode code="accountId" /></td>
    <td><code>string</code></td>
    <td>The account ID of the account that usage data was retrieved for. (pattern: &lt;code&gt;.*&#91;0-9&#93;&#123;12&#125;.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>array</code></td>
    <td>An object representing the total usage for an account.</td>
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
    <td><a href="#list_usage_totals"><CopyableCode code="list_usage_totals" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the Amazon Inspector usage totals over the last 30 days.</td>
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
    defaultValue="list_usage_totals"
    values={[
        { label: 'list_usage_totals', value: 'list_usage_totals' }
    ]}
>
<TabItem value="list_usage_totals">

Lists the Amazon Inspector usage totals over the last 30 days.

```sql
SELECT
accountId,
usage
FROM aws.inspector2.usage_totals
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
