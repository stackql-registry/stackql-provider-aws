--- 
title: devices
hide_title: false
hide_table_of_contents: false
keywords:
  - devices
  - networkmanager
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

Creates, updates, deletes, gets or lists a <code>devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.devices" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_devices"
    values={[
        { label: 'get_devices', value: 'get_devices' }
    ]}
>
<TabItem value="get_devices">

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
    <td><CopyableCode code="aws_location" /></td>
    <td><code>object</code></td>
    <td>Specifies a location in Amazon Web Services.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time that the site was created.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the device. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the device. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the device. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>object</code></td>
    <td>Describes a location.</td>
</tr>
<tr>
    <td><CopyableCode code="model" /></td>
    <td><code>string</code></td>
    <td>The device model. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="serial_number" /></td>
    <td><code>string</code></td>
    <td>The device serial number. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="site_id" /></td>
    <td><code>string</code></td>
    <td>The site ID. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The device state. (PENDING, AVAILABLE, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The tags for the device.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The device type. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vendor" /></td>
    <td><code>string</code></td>
    <td>The device vendor. (pattern: &lt;code&gt;&#91;\s\S&#93;*&lt;/code&gt;)</td>
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
    <td><a href="#get_devices"><CopyableCode code="get_devices" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-deviceIds"><code>deviceIds</code></a>, <a href="#parameter-siteId"><code>siteId</code></a>, <a href="#parameter-maxResults"><code>maxResults</code></a>, <a href="#parameter-nextToken"><code>nextToken</code></a></td>
    <td>Gets information about one or more of your devices in a global network.</td>
</tr>
<tr>
    <td><a href="#create_device"><CopyableCode code="create_device" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Creates a new device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.</td>
</tr>
<tr>
    <td><a href="#update_device"><CopyableCode code="update_device" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-device_id"><code>device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the details for an existing device. To remove information for any of the parameters, specify an empty string.</td>
</tr>
<tr>
    <td><a href="#delete_device"><CopyableCode code="delete_device" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-global_network_id"><code>global_network_id</code></a>, <a href="#parameter-device_id"><code>device_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an existing device. You must first disassociate the device from any links and customer gateways.</td>
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
<tr id="parameter-device_id">
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the device.</td>
</tr>
<tr id="parameter-global_network_id">
    <td><CopyableCode code="global_network_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the global network.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-deviceIds">
    <td><CopyableCode code="deviceIds" /></td>
    <td><code>array</code></td>
    <td>One or more device IDs. The maximum is 10.</td>
</tr>
<tr id="parameter-maxResults">
    <td><CopyableCode code="maxResults" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of results to return.</td>
</tr>
<tr id="parameter-nextToken">
    <td><CopyableCode code="nextToken" /></td>
    <td><code>string</code></td>
    <td>The token for the next page of results.</td>
</tr>
<tr id="parameter-siteId">
    <td><CopyableCode code="siteId" /></td>
    <td><code>string</code></td>
    <td>The ID of the site.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_devices"
    values={[
        { label: 'get_devices', value: 'get_devices' }
    ]}
>
<TabItem value="get_devices">

Gets information about one or more of your devices in a global network.

```sql
SELECT
aws_location,
created_at,
description,
device_arn,
device_id,
global_network_id,
location,
model,
serial_number,
site_id,
state,
tags,
type,
vendor
FROM aws.networkmanager.devices
WHERE global_network_id = '{{ global_network_id }}' -- required
AND region = '{{ region }}' -- required
AND deviceIds = '{{ deviceIds }}'
AND siteId = '{{ siteId }}'
AND maxResults = '{{ maxResults }}'
AND nextToken = '{{ nextToken }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_device"
    values={[
        { label: 'create_device', value: 'create_device' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_device">

Creates a new device in a global network. If you specify both a site ID and a location, the location of the site is used for visualization in the Network Manager console.

```sql
INSERT INTO aws.networkmanager.devices (
AWSLocation,
Description,
Type,
Vendor,
Model,
SerialNumber,
Location,
SiteId,
Tags,
global_network_id,
region
)
SELECT 
'{{ AWSLocation }}',
'{{ Description }}',
'{{ Type }}',
'{{ Vendor }}',
'{{ Model }}',
'{{ SerialNumber }}',
'{{ Location }}',
'{{ SiteId }}',
'{{ Tags }}',
'{{ global_network_id }}',
'{{ region }}'
RETURNING
device
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: devices
  props:
    - name: global_network_id
      value: "{{ global_network_id }}"
      description: Required parameter for the devices resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the devices resource.
    - name: AWSLocation
      description: |
        Specifies a location in Amazon Web Services.
      value:
        Zone: "{{ Zone }}"
        SubnetArn: "{{ SubnetArn }}"
    - name: Description
      value: "{{ Description }}"
    - name: Type
      value: "{{ Type }}"
    - name: Vendor
      value: "{{ Vendor }}"
    - name: Model
      value: "{{ Model }}"
    - name: SerialNumber
      value: "{{ SerialNumber }}"
    - name: Location
      description: |
        Describes a location.
      value:
        Address: "{{ Address }}"
        Latitude: "{{ Latitude }}"
        Longitude: "{{ Longitude }}"
    - name: SiteId
      value: "{{ SiteId }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_device"
    values={[
        { label: 'update_device', value: 'update_device' }
    ]}
>
<TabItem value="update_device">

Updates the details for an existing device. To remove information for any of the parameters, specify an empty string.

```sql
UPDATE aws.networkmanager.devices
SET 
AWSLocation = '{{ AWSLocation }}',
Description = '{{ Description }}',
Type = '{{ Type }}',
Vendor = '{{ Vendor }}',
Model = '{{ Model }}',
SerialNumber = '{{ SerialNumber }}',
Location = '{{ Location }}',
SiteId = '{{ SiteId }}'
WHERE 
global_network_id = '{{ global_network_id }}' --required
AND device_id = '{{ device_id }}' --required
AND region = '{{ region }}' --required
RETURNING
device;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_device"
    values={[
        { label: 'delete_device', value: 'delete_device' }
    ]}
>
<TabItem value="delete_device">

Deletes an existing device. You must first disassociate the device from any links and customer gateways.

```sql
DELETE FROM aws.networkmanager.devices
WHERE global_network_id = '{{ global_network_id }}' --required
AND device_id = '{{ device_id }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
