--- 
title: remaining_free_trial_days
hide_title: false
hide_table_of_contents: false
keywords:
  - remaining_free_trial_days
  - guardduty
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

Creates, updates, deletes, gets or lists a <code>remaining_free_trial_days</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="remaining_free_trial_days" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.guardduty.remaining_free_trial_days" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_remaining_free_trial_days"
    values={[
        { label: 'get_remaining_free_trial_days', value: 'get_remaining_free_trial_days' }
    ]}
>
<TabItem value="get_remaining_free_trial_days">

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
    <td><CopyableCode code="accounts" /></td>
    <td><code>array</code></td>
    <td>The member accounts which were included in a request and were processed successfully.</td>
</tr>
<tr>
    <td><CopyableCode code="unprocessed_accounts" /></td>
    <td><code>array</code></td>
    <td>The member account that was included in a request but for which the request could not be processed.</td>
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
    <td><a href="#get_remaining_free_trial_days"><CopyableCode code="get_remaining_free_trial_days" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-detector_id"><code>detector_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Provides the number of days left for each data source used in the free trial period.</td>
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
<tr id="parameter-detector_id">
    <td><CopyableCode code="detector_id" /></td>
    <td><code>string</code></td>
    <td>The unique ID of the detector of the GuardDuty member account. To find the detectorId in the current Region, see the Settings page in the GuardDuty console, or run the ListDetectors API.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_remaining_free_trial_days"
    values={[
        { label: 'get_remaining_free_trial_days', value: 'get_remaining_free_trial_days' }
    ]}
>
<TabItem value="get_remaining_free_trial_days">

Provides the number of days left for each data source used in the free trial period.

```sql
SELECT
accounts,
unprocessed_accounts
FROM aws.guardduty.remaining_free_trial_days
WHERE detector_id = '{{ detector_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
