--- 
title: discovered_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - discovered_devices
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

Creates, updates, deletes, gets or lists a <code>discovered_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="discovered_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.iot_managed_integrations.discovered_devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_discovered_devices"
    values={[
        { label: 'list_discovered_devices', value: 'list_discovered_devices' }
    ]}
>
<TabItem value="list_discovered_devices">

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
    <td><CopyableCode code="AuthenticationMaterial" /></td>
    <td><code>string</code></td>
    <td>The authentication material required for connecting to the discovered device, such as credentials or tokens. (pattern: &lt;code&gt;&#91;0-9A-Za-z!#$%&()*\+\-;&lt;=&gt;?@^_`&#123;|&#125;~\/: &#123;&#125;,\\"&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Brand" /></td>
    <td><code>string</code></td>
    <td>The brand of the discovered device. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectorDeviceId" /></td>
    <td><code>string</code></td>
    <td>The third-party device identifier as defined by the connector. This identifier must not contain personal identifiable information (PII). (pattern: &lt;code&gt;&#91;a-zA-Z0-9_.,@-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="ConnectorDeviceName" /></td>
    <td><code>string</code></td>
    <td>The name of the device as defined by the connector or third-party system. (pattern: &lt;code&gt;&#91;\p&#123;L&#125;\p&#123;N&#125; ._-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="DeviceTypes" /></td>
    <td><code>array</code></td>
    <td>The list of device types or categories that the discovered device belongs to.</td>
</tr>
<tr>
    <td><CopyableCode code="DiscoveredAt" /></td>
    <td><code>string (date-time)</code></td>
    <td>The timestamp indicating when the device was discovered.</td>
</tr>
<tr>
    <td><CopyableCode code="ManagedThingId" /></td>
    <td><code>string</code></td>
    <td>The identifier of the managed thing created for this discovered device, if one exists. (pattern: &lt;code&gt;&#91;a-zA-Z0-9:_-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Model" /></td>
    <td><code>string</code></td>
    <td>The model of the discovered device. (pattern: &lt;code&gt;&#91;A-Za-z0-9-_ &#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="Modification" /></td>
    <td><code>string</code></td>
    <td>The status of the discovered device, indicating whether it has been added, removed, or modified since the last discovery. (DISCOVERED, UPDATED, NO_CHANGE)</td>
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
    <td><a href="#list_discovered_devices"><CopyableCode code="list_discovered_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-NextToken"><code>NextToken</code></a>, <a href="#parameter-MaxResults"><code>MaxResults</code></a></td>
    <td>Lists all devices discovered during a specific device discovery task.</td>
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
    <td>The identifier of the device discovery job to list discovered devices for.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-MaxResults">
    <td><CopyableCode code="MaxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of discovered devices to return in a single response.</td>
</tr>
<tr id="parameter-NextToken">
    <td><CopyableCode code="NextToken" /></td>
    <td><code>string</code></td>
    <td>A token used for pagination of results.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_discovered_devices"
    values={[
        { label: 'list_discovered_devices', value: 'list_discovered_devices' }
    ]}
>
<TabItem value="list_discovered_devices">

Lists all devices discovered during a specific device discovery task.

```sql
SELECT
AuthenticationMaterial,
Brand,
ConnectorDeviceId,
ConnectorDeviceName,
DeviceTypes,
DiscoveredAt,
ManagedThingId,
Model,
Modification
FROM aws.iot_managed_integrations.discovered_devices
WHERE identifier = '{{ identifier }}' -- required
AND region = '{{ region }}' -- required
AND NextToken = '{{ NextToken }}'
AND MaxResults = '{{ MaxResults }}'
;
```
</TabItem>
</Tabs>
