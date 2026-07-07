--- 
title: endpoints
hide_title: false
hide_table_of_contents: false
keywords:
  - endpoints
  - iotdeviceadvisor
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

Creates, updates, deletes, gets or lists an <code>endpoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="endpoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iotdeviceadvisor.endpoints" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_endpoint"
    values={[
        { label: 'get_endpoint', value: 'get_endpoint' }
    ]}
>
<TabItem value="get_endpoint">

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
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The response of an Device Advisor endpoint.</td>
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
    <td><a href="#get_endpoint"><CopyableCode code="get_endpoint" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-thingArn"><code>thingArn</code></a>, <a href="#parameter-certificateArn"><code>certificateArn</code></a>, <a href="#parameter-deviceRoleArn"><code>deviceRoleArn</code></a>, <a href="#parameter-authenticationMethod"><code>authenticationMethod</code></a></td>
    <td>Gets information about an Device Advisor endpoint.</td>
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
<tr id="parameter-authenticationMethod">
    <td><CopyableCode code="authenticationMethod" /></td>
    <td><code>string</code></td>
    <td>The authentication method used during the device connection.</td>
</tr>
<tr id="parameter-certificateArn">
    <td><CopyableCode code="certificateArn" /></td>
    <td><code>string</code></td>
    <td>The certificate ARN of the device. This is an optional parameter.</td>
</tr>
<tr id="parameter-deviceRoleArn">
    <td><CopyableCode code="deviceRoleArn" /></td>
    <td><code>string</code></td>
    <td>The device role ARN of the device. This is an optional parameter.</td>
</tr>
<tr id="parameter-thingArn">
    <td><CopyableCode code="thingArn" /></td>
    <td><code>string</code></td>
    <td>The thing ARN of the device. This is an optional parameter.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_endpoint"
    values={[
        { label: 'get_endpoint', value: 'get_endpoint' }
    ]}
>
<TabItem value="get_endpoint">

Gets information about an Device Advisor endpoint.

```sql
SELECT
endpoint
FROM aws.iotdeviceadvisor.endpoints
WHERE region = '{{ region }}' -- required
AND thingArn = '{{ thingArn }}'
AND certificateArn = '{{ certificateArn }}'
AND deviceRoleArn = '{{ deviceRoleArn }}'
AND authenticationMethod = '{{ authenticationMethod }}'
;
```
</TabItem>
</Tabs>
