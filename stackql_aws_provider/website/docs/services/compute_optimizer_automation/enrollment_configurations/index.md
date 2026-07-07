--- 
title: enrollment_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - enrollment_configurations
  - compute_optimizer_automation
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

Creates, updates, deletes, gets or lists an <code>enrollment_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="enrollment_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.compute_optimizer_automation.enrollment_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_enrollment_configuration"
    values={[
        { label: 'get_enrollment_configuration', value: 'get_enrollment_configuration' }
    ]}
>
<TabItem value="get_enrollment_configuration">

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
    <td><CopyableCode code="lastUpdatedTimestamp" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp of the last update to the enrollment configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="organizationRuleMode" /></td>
    <td><code>string</code></td>
    <td>Specifies whether the management account can create Automation rules that implement optimization actions for this account. (AnyAllowed, NoneAllowed)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current enrollment status. (Active, Inactive, Pending, Failed)</td>
</tr>
<tr>
    <td><CopyableCode code="statusReason" /></td>
    <td><code>string</code></td>
    <td>The reason for the current enrollment status.</td>
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
    <td><a href="#get_enrollment_configuration"><CopyableCode code="get_enrollment_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the current enrollment configuration for Compute Optimizer Automation.</td>
</tr>
<tr>
    <td><a href="#update_enrollment_configuration"><CopyableCode code="update_enrollment_configuration" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Updates your account’s Compute Optimizer Automation enrollment configuration.</td>
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
    defaultValue="get_enrollment_configuration"
    values={[
        { label: 'get_enrollment_configuration', value: 'get_enrollment_configuration' }
    ]}
>
<TabItem value="get_enrollment_configuration">

Retrieves the current enrollment configuration for Compute Optimizer Automation.

```sql
SELECT
lastUpdatedTimestamp,
organizationRuleMode,
status,
statusReason
FROM aws.compute_optimizer_automation.enrollment_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_enrollment_configuration"
    values={[
        { label: 'update_enrollment_configuration', value: 'update_enrollment_configuration' }
    ]}
>
<TabItem value="update_enrollment_configuration">

Updates your account’s Compute Optimizer Automation enrollment configuration.

```sql
UPDATE aws.compute_optimizer_automation.enrollment_configurations
SET 
status = '{{ status }}',
clientToken = '{{ clientToken }}'
WHERE 
region = '{{ region }}' --required
AND status = '{{ status }}' --required
RETURNING
lastUpdatedTimestamp,
status,
statusReason;
```
</TabItem>
</Tabs>
