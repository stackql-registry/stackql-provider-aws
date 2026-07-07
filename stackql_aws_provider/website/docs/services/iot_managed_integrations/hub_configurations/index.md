--- 
title: hub_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - hub_configurations
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

Creates, updates, deletes, gets or lists a <code>hub_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hub_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.hub_configurations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hub_configuration"
    values={[
        { label: 'get_hub_configuration', value: 'get_hub_configuration' }
    ]}
>
<TabItem value="get_hub_configuration">

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
    <td><CopyableCode code="HubTokenTimerExpirySettingInSeconds" /></td>
    <td><code>integer (int64)</code></td>
    <td>A user-defined integer value that represents the hub token timer expiry setting in seconds.</td>
</tr>
<tr>
    <td><CopyableCode code="UpdatedAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp value of when the hub configuration was updated.</td>
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
    <td><a href="#get_hub_configuration"><CopyableCode code="get_hub_configuration" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Get a hub configuration.</td>
</tr>
<tr>
    <td><a href="#put_hub_configuration"><CopyableCode code="put_hub_configuration" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HubTokenTimerExpirySettingInSeconds"><code>HubTokenTimerExpirySettingInSeconds</code></a></td>
    <td></td>
    <td>Update a hub configuration.</td>
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
    defaultValue="get_hub_configuration"
    values={[
        { label: 'get_hub_configuration', value: 'get_hub_configuration' }
    ]}
>
<TabItem value="get_hub_configuration">

Get a hub configuration.

```sql
SELECT
HubTokenTimerExpirySettingInSeconds,
UpdatedAt
FROM aws.iot_managed_integrations.hub_configurations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_hub_configuration"
    values={[
        { label: 'put_hub_configuration', value: 'put_hub_configuration' }
    ]}
>
<TabItem value="put_hub_configuration">

Update a hub configuration.

```sql
REPLACE aws.iot_managed_integrations.hub_configurations
SET 
HubTokenTimerExpirySettingInSeconds = {{ HubTokenTimerExpirySettingInSeconds }}
WHERE 
region = '{{ region }}' --required
AND HubTokenTimerExpirySettingInSeconds = '{{ HubTokenTimerExpirySettingInSeconds }}' --required
RETURNING
HubTokenTimerExpirySettingInSeconds;
```
</TabItem>
</Tabs>
