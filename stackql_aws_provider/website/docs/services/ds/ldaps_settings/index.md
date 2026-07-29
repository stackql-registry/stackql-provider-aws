--- 
title: ldaps_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - ldaps_settings
  - ds
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

Creates, updates, deletes, gets or lists a <code>ldaps_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ldaps_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ds.ldaps_settings" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_ldaps_settings"
    values={[
        { label: 'describe_ldaps_settings', value: 'describe_ldaps_settings' }
    ]}
>
<TabItem value="describe_ldaps_settings">

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
    <td><CopyableCode code="ldaps_status" /></td>
    <td><code>string</code></td>
    <td>The state of the LDAPS settings. (Enabling, Enabled, EnableFailed, Disabled)</td>
</tr>
<tr>
    <td><CopyableCode code="ldaps_status_reason" /></td>
    <td><code>string</code></td>
    <td>Describes a state change for LDAPS.</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_date_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time when the LDAPS settings were last updated.</td>
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
    <td><a href="#describe_ldaps_settings"><CopyableCode code="describe_ldaps_settings" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Describes the status of LDAP security for the specified directory.</td>
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
    defaultValue="describe_ldaps_settings"
    values={[
        { label: 'describe_ldaps_settings', value: 'describe_ldaps_settings' }
    ]}
>
<TabItem value="describe_ldaps_settings">

Describes the status of LDAP security for the specified directory.

```sql
SELECT
ldaps_status,
ldaps_status_reason,
last_updated_date_time
FROM aws.ds.ldaps_settings
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
