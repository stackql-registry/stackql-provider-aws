--- 
title: device_instances
hide_title: false
hide_table_of_contents: false
keywords:
  - device_instances
  - devicefarm
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

Creates, updates, deletes, gets or lists a <code>device_instances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_instances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devicefarm.device_instances" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device_instance"
    values={[
        { label: 'get_device_instance', value: 'get_device_instance' },
        { label: 'list_device_instances', value: 'list_device_instances' }
    ]}
>
<TabItem value="get_device_instance">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device instance. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceProfile" /></td>
    <td><code>object</code></td>
    <td>A object that contains information about the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>An array of strings that describe the device instance.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the device instance. Valid values are listed here. (IN_USE, PREPARING, AVAILABLE, NOT_AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="udid" /></td>
    <td><code>string</code></td>
    <td>Unique device identifier for the device instance.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_device_instances">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device instance. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="deviceArn" /></td>
    <td><code>string</code></td>
    <td>The ARN of the device. (pattern: &lt;code&gt;^arn:aws:devicefarm:.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="instanceProfile" /></td>
    <td><code>object</code></td>
    <td>A object that contains information about the instance profile.</td>
</tr>
<tr>
    <td><CopyableCode code="labels" /></td>
    <td><code>array</code></td>
    <td>An array of strings that describe the device instance.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the device instance. Valid values are listed here. (IN_USE, PREPARING, AVAILABLE, NOT_AVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="udid" /></td>
    <td><code>string</code></td>
    <td>Unique device identifier for the device instance.</td>
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
    <td><a href="#get_device_instance"><CopyableCode code="get_device_instance" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a device instance that belongs to a private device fleet.</td>
</tr>
<tr>
    <td><a href="#list_device_instances"><CopyableCode code="list_device_instances" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about the private device instances associated with one or more AWS accounts.</td>
</tr>
<tr>
    <td><a href="#update_device_instance"><CopyableCode code="update_device_instance" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-arn"><code>arn</code></a></td>
    <td></td>
    <td>Updates information about a private device instance.</td>
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
    defaultValue="get_device_instance"
    values={[
        { label: 'get_device_instance', value: 'get_device_instance' },
        { label: 'list_device_instances', value: 'list_device_instances' }
    ]}
>
<TabItem value="get_device_instance">

Returns information about a device instance that belongs to a private device fleet.

```sql
SELECT
arn,
deviceArn,
instanceProfile,
labels,
status,
udid
FROM aws.devicefarm.device_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_device_instances">

Returns information about the private device instances associated with one or more AWS accounts.

```sql
SELECT
arn,
deviceArn,
instanceProfile,
labels,
status,
udid
FROM aws.devicefarm.device_instances
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_device_instance"
    values={[
        { label: 'update_device_instance', value: 'update_device_instance' }
    ]}
>
<TabItem value="update_device_instance">

Updates information about a private device instance.

```sql
UPDATE aws.devicefarm.device_instances
SET 
arn = '{{ arn }}',
profileArn = '{{ profileArn }}',
labels = '{{ labels }}'
WHERE 
region = '{{ region }}' --required
AND arn = '{{ arn }}' --required
RETURNING
deviceInstance;
```
</TabItem>
</Tabs>
