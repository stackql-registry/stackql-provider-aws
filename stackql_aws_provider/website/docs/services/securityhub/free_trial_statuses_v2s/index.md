--- 
title: free_trial_statuses_v2s
hide_title: false
hide_table_of_contents: false
keywords:
  - free_trial_statuses_v2s
  - securityhub
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

Creates, updates, deletes, gets or lists a <code>free_trial_statuses_v2s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="free_trial_statuses_v2s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityhub.free_trial_statuses_v2s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_free_trial_statuses_v2"
    values={[
        { label: 'list_free_trial_statuses_v2', value: 'list_free_trial_statuses_v2' }
    ]}
>
<TabItem value="list_free_trial_statuses_v2">

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
    <td>The Amazon Web Services account identifier that the free trial statuses apply to. (pattern: &lt;code&gt;^&#91;0-9&#93;&#123;12&#125;$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="evaluated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time at which Security Hub evaluated the free trial statuses for this account. Every status in FreeTrialStatuses reflects this point in time.</td>
</tr>
<tr>
    <td><CopyableCode code="free_trial_statuses" /></td>
    <td><code>array</code></td>
    <td>An array of free trial statuses, one for each feature that has a free trial period for the account. The array is empty if the account has no free trial to report.</td>
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
    <td><a href="#list_free_trial_statuses_v2"><CopyableCode code="list_free_trial_statuses_v2" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the free trial status of Security Hub features. A delegated Security Hub administrator can list the status for accounts in its organization. Any other account can list the status only for itself. Free trial status remains available after a feature is disabled.</td>
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
    defaultValue="list_free_trial_statuses_v2"
    values={[
        { label: 'list_free_trial_statuses_v2', value: 'list_free_trial_statuses_v2' }
    ]}
>
<TabItem value="list_free_trial_statuses_v2">

Lists the free trial status of Security Hub features. A delegated Security Hub administrator can list the status for accounts in its organization. Any other account can list the status only for itself. Free trial status remains available after a feature is disabled.

```sql
SELECT
account_id,
evaluated_at,
free_trial_statuses
FROM aws.securityhub.free_trial_statuses_v2s
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
