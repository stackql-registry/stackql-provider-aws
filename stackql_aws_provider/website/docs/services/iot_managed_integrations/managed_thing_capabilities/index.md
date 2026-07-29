--- 
title: managed_thing_capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_thing_capabilities
  - iot_managed_integrations
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

Creates, updates, deletes, gets or lists a <code>managed_thing_capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_thing_capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.managed_thing_capabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_managed_thing_capabilities"
    values={[
        { label: 'get_managed_thing_capabilities', value: 'get_managed_thing_capabilities' }
    ]}
>
<TabItem value="get_managed_thing_capabilities">

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
    <td><CopyableCode code="capabilities" /></td>
    <td><code>string</code></td>
    <td>The capabilities of the device such as light bulb. (pattern: &lt;code&gt;&#91;a-zA-Z0-9\s'\x&#123;0022&#125;,.:\\\/&#123;$&#125;\&#91;\&#93;=_\-\+&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="capability_report" /></td>
    <td><code>object</code></td>
    <td>Report of all capabilities supported by the device.</td>
</tr>
<tr>
    <td><CopyableCode code="managed_thing_id" /></td>
    <td><code>string</code></td>
    <td>The id of the device. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_managed_thing_capabilities"><CopyableCode code="get_managed_thing_capabilities" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get the capabilities for a managed thing using the device ID.</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>The id of the device.</td>
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
    defaultValue="get_managed_thing_capabilities"
    values={[
        { label: 'get_managed_thing_capabilities', value: 'get_managed_thing_capabilities' }
    ]}
>
<TabItem value="get_managed_thing_capabilities">

Get the capabilities for a managed thing using the device ID.

```sql
SELECT
capabilities,
capability_report,
managed_thing_id
FROM aws.iot_managed_integrations.managed_thing_capabilities
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
