--- 
title: usage_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_statistics
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

Creates, updates, deletes, gets or lists a <code>usage_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.macie2.usage_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_usage_statistics"
    values={[
        { label: 'get_usage_statistics', value: 'get_usage_statistics' }
    ]}
>
<TabItem value="get_usage_statistics">

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
    <td>The unique identifier for the Amazon Web Services account that the data applies to.</td>
</tr>
<tr>
    <td><CopyableCode code="automated_discovery_free_trial_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the free trial of automated sensitive data discovery started for the account. This value is null if automated sensitive data discovery hasn't been enabled for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="free_trial_start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time, in UTC and extended ISO 8601 format, when the Amazon Macie free trial started for the account.</td>
</tr>
<tr>
    <td><CopyableCode code="usage" /></td>
    <td><code>array</code></td>
    <td>An array of objects that contains usage data and quotas for the account. Each object contains the data for a specific usage metric and the corresponding quota.</td>
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
    <td><a href="#get_usage_statistics"><CopyableCode code="get_usage_statistics" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves (queries) quotas and aggregated usage data for one or more accounts.</td>
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
    defaultValue="get_usage_statistics"
    values={[
        { label: 'get_usage_statistics', value: 'get_usage_statistics' }
    ]}
>
<TabItem value="get_usage_statistics">

Retrieves (queries) quotas and aggregated usage data for one or more accounts.

```sql
SELECT
account_id,
automated_discovery_free_trial_start_date,
free_trial_start_date,
usage
FROM aws.macie2.usage_statistics
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
