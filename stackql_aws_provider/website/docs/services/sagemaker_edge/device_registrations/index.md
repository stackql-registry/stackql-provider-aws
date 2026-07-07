--- 
title: device_registrations
hide_title: false
hide_table_of_contents: false
keywords:
  - device_registrations
  - sagemaker_edge
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

Creates, updates, deletes, gets or lists a <code>device_registrations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="device_registrations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.sagemaker_edge.device_registrations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_device_registration"
    values={[
        { label: 'get_device_registration', value: 'get_device_registration' }
    ]}
>
<TabItem value="get_device_registration">

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
    <td><CopyableCode code="CacheTTL" /></td>
    <td><code>string</code></td>
    <td>The amount of time, in seconds, that the registration status is stored on the device’s cache before it is refreshed.</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceRegistration" /></td>
    <td><code>string</code></td>
    <td>Describes if the device is currently registered with SageMaker Edge Manager.</td>
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
    <td><a href="#get_device_registration"><CopyableCode code="get_device_registration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Use to check if a device is registered with SageMaker Edge Manager.</td>
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
    defaultValue="get_device_registration"
    values={[
        { label: 'get_device_registration', value: 'get_device_registration' }
    ]}
>
<TabItem value="get_device_registration">

Use to check if a device is registered with SageMaker Edge Manager.

```sql
SELECT
CacheTTL,
DeviceRegistration
FROM aws.sagemaker_edge.device_registrations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>
