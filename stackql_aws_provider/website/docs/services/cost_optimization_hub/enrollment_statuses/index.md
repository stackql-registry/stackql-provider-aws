--- 
title: enrollment_statuses
hide_title: false
hide_table_of_contents: false
keywords:
  - enrollment_statuses
  - cost_optimization_hub
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

Creates, updates, deletes, gets or lists an <code>enrollment_statuses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enrollment_statuses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cost_optimization_hub.enrollment_statuses" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_enrollment_statuses"
    values={[
        { label: 'list_enrollment_statuses', value: 'list_enrollment_statuses' }
    ]}
>
<TabItem value="list_enrollment_statuses">

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
    <td>The Amazon Web Services account ID. (pattern: &lt;code&gt;&#91;0-9&#93;&#123;12&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="created_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the account enrollment status was created.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_timestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The time when the account enrollment status was last updated.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The account enrollment status. (Active, Inactive)</td>
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
    <td><a href="#list_enrollment_statuses"><CopyableCode code="list_enrollment_statuses" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the enrollment status for an account. It can also return the list of accounts that are enrolled under the organization.</td>
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
    defaultValue="list_enrollment_statuses"
    values={[
        { label: 'list_enrollment_statuses', value: 'list_enrollment_statuses' }
    ]}
>
<TabItem value="list_enrollment_statuses">

Retrieves the enrollment status for an account. It can also return the list of accounts that are enrolled under the organization.

```sql
SELECT
account_id,
created_timestamp,
last_updated_timestamp,
status
FROM aws.cost_optimization_hub.enrollment_statuses
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
