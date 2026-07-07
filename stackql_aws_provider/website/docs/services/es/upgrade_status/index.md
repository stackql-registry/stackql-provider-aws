--- 
title: upgrade_status
hide_title: false
hide_table_of_contents: false
keywords:
  - upgrade_status
  - es
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

Creates, updates, deletes, gets or lists a <code>upgrade_status</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upgrade_status" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.es.upgrade_status" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_upgrade_status"
    values={[
        { label: 'get_upgrade_status', value: 'get_upgrade_status' }
    ]}
>
<TabItem value="get_upgrade_status">

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
    <td><CopyableCode code="StepStatus" /></td>
    <td><code>string</code></td>
    <td>One of 4 statuses that a step can go through returned as part of the GetUpgradeStatusResponse object. The status can take one of the following values: In Progress Succeeded Succeeded with Issues Failed (IN_PROGRESS, SUCCEEDED, SUCCEEDED_WITH_ISSUES, FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="UpgradeName" /></td>
    <td><code>string</code></td>
    <td>A string that describes the update briefly</td>
</tr>
<tr>
    <td><CopyableCode code="UpgradeStep" /></td>
    <td><code>string</code></td>
    <td>Represents one of 3 steps that an Upgrade or Upgrade Eligibility Check does through: PreUpgradeCheck Snapshot Upgrade (PRE_UPGRADE_CHECK, SNAPSHOT, UPGRADE)</td>
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
    <td><a href="#get_upgrade_status"><CopyableCode code="get_upgrade_status" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td></td>
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
    defaultValue="get_upgrade_status"
    values={[
        { label: 'get_upgrade_status', value: 'get_upgrade_status' }
    ]}
>
<TabItem value="get_upgrade_status">

Retrieves the latest status of the last upgrade or upgrade eligibility check that was performed on the domain.

```sql
SELECT
StepStatus,
UpgradeName,
UpgradeStep
FROM aws.es.upgrade_status
WHERE domain_name = '{{ domain_name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
