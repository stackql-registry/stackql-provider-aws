--- 
title: anycast_ip_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - anycast_ip_lists
  - cloudfront
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

Creates, updates, deletes, gets or lists an <code>anycast_ip_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="anycast_ip_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.cloudfront.anycast_ip_lists" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_anycast_ip_list"
    values={[
        { label: 'get_anycast_ip_list', value: 'get_anycast_ip_list' },
        { label: 'list_anycast_ip_lists', value: 'list_anycast_ip_lists' }
    ]}
>
<TabItem value="get_anycast_ip_list">

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
    <td><CopyableCode code="anycast_ips" /></td>
    <td><code>string</code></td>
    <td>The static IP addresses that are allocated to the Anycast static IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Anycast static IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Anycast static IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address_type" /></td>
    <td><code>string</code></td>
    <td>The IP address type for the Anycast static IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="ip_count" /></td>
    <td><code>integer</code></td>
    <td>The number of IP addresses in the Anycast static IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="ipam_config" /></td>
    <td><code>string</code></td>
    <td>The IPAM configuration for the Anycast static IP list, that contains the quantity and list of IPAM CIDR configurations.</td>
</tr>
<tr>
    <td><CopyableCode code="last_modified_time" /></td>
    <td><code>string</code></td>
    <td>The last time the Anycast static IP list was modified.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Anycast static IP list.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Anycast static IP list. Valid values: Deployed, Deploying, or Failed.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_anycast_ip_lists">

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
    <td><CopyableCode code="is_truncated" /></td>
    <td><code>boolean</code></td>
    <td>If there are more items in the list collection than are in this response, this value is true.</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>string</code></td>
    <td>Items in the Anycast static IP list collection. Each item is of the AnycastIpListSummary structure type.</td>
</tr>
<tr>
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr>
    <td><CopyableCode code="max_items" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Anycast static IP list collections that you want returned in the response.</td>
</tr>
<tr>
    <td><CopyableCode code="next_marker" /></td>
    <td><code>string</code></td>
    <td>Indicates the next page of the Anycast static IP list collection. To get the next page of the list, use this value in the Marker field of your request.</td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>The quantity of Anycast static IP lists in the collection.</td>
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
    <td><a href="#get_anycast_ip_list"><CopyableCode code="get_anycast_ip_list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets an Anycast static IP list.</td>
</tr>
<tr>
    <td><a href="#list_anycast_ip_lists"><CopyableCode code="list_anycast_ip_lists" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td><a href="#parameter-Marker"><code>Marker</code></a>, <a href="#parameter-MaxItems"><code>MaxItems</code></a></td>
    <td>Lists your Anycast static IP lists.</td>
</tr>
<tr>
    <td><a href="#create_anycast_ip_list"><CopyableCode code="create_anycast_ip_list" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-IpCount"><code>IpCount</code></a></td>
    <td></td>
    <td>Creates an Anycast static IP list.</td>
</tr>
<tr>
    <td><a href="#update_anycast_ip_list"><CopyableCode code="update_anycast_ip_list" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates an Anycast static IP list.</td>
</tr>
<tr>
    <td><a href="#delete_anycast_ip_list"><CopyableCode code="delete_anycast_ip_list" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-If-Match"><code>If-Match</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes an Anycast static IP list.</td>
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
<tr id="parameter-If-Match">
    <td><CopyableCode code="If-Match" /></td>
    <td><code>string</code></td>
    <td>The current version (ETag value) of the Anycast static IP list that you are deleting.</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The ID of the Anycast static IP list.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>AWS region (default: us-east-1)</td>
</tr>
<tr id="parameter-Marker">
    <td><CopyableCode code="Marker" /></td>
    <td><code>string</code></td>
    <td>Use this field when paginating results to indicate where to begin in your list. The response includes items in the list that occur after the marker. To get the next page of the list, set this field's value to the value of NextMarker from the current page's response.</td>
</tr>
<tr id="parameter-MaxItems">
    <td><CopyableCode code="MaxItems" /></td>
    <td><code>integer</code></td>
    <td>The maximum number of Anycast static IP lists that you want returned in the response.</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get_anycast_ip_list"
    values={[
        { label: 'get_anycast_ip_list', value: 'get_anycast_ip_list' },
        { label: 'list_anycast_ip_lists', value: 'list_anycast_ip_lists' }
    ]}
>
<TabItem value="get_anycast_ip_list">

Gets an Anycast static IP list.

```sql
SELECT
anycast_ips,
arn,
id,
ip_address_type,
ip_count,
ipam_config,
last_modified_time,
name,
status
FROM aws.cloudfront.anycast_ip_lists
WHERE id = '{{ id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_anycast_ip_lists">

Lists your Anycast static IP lists.

```sql
SELECT
is_truncated,
items,
marker,
max_items,
next_marker,
quantity
FROM aws.cloudfront.anycast_ip_lists
WHERE region = '{{ region }}' -- required
AND Marker = '{{ Marker }}'
AND MaxItems = '{{ MaxItems }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_anycast_ip_list"
    values={[
        { label: 'create_anycast_ip_list', value: 'create_anycast_ip_list' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_anycast_ip_list">

Creates an Anycast static IP list.

```sql
INSERT INTO aws.cloudfront.anycast_ip_lists (
Name,
IpCount,
Tags,
IpAddressType,
IpamCidrConfigs,
region
)
SELECT 
'{{ Name }}',
{{ IpCount }} /* required */,
'{{ Tags }}',
'{{ IpAddressType }}',
'{{ IpamCidrConfigs }}',
'{{ region }}'
RETURNING
anycast_ips,
arn,
id,
ip_address_type,
ip_count,
ipam_config,
last_modified_time,
name,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: anycast_ip_lists
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the anycast_ip_lists resource.
    - name: Name
      value: "{{ Name }}"
    - name: IpCount
      value: {{ IpCount }}
    - name: Tags
      description: |
        A complex type that contains zero or more Tag elements.
      value:
        Items:
          - Key: "{{ Key }}"
            Value: "{{ Value }}"
    - name: IpAddressType
      value: "{{ IpAddressType }}"
      valid_values: ['ipv4', 'ipv6', 'dualstack']
    - name: IpamCidrConfigs
      value:
        - Cidr: "{{ Cidr }}"
          IpamPoolArn: "{{ IpamPoolArn }}"
          AnycastIp: "{{ AnycastIp }}"
          Status: "{{ Status }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_anycast_ip_list"
    values={[
        { label: 'update_anycast_ip_list', value: 'update_anycast_ip_list' }
    ]}
>
<TabItem value="update_anycast_ip_list">

Updates an Anycast static IP list.

```sql
UPDATE aws.cloudfront.anycast_ip_lists
SET 
IpAddressType = '{{ IpAddressType }}',
IpamCidrConfigs = '{{ IpamCidrConfigs }}'
WHERE 
id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
RETURNING
anycast_ips,
arn,
id,
ip_address_type,
ip_count,
ipam_config,
last_modified_time,
name,
status;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_anycast_ip_list"
    values={[
        { label: 'delete_anycast_ip_list', value: 'delete_anycast_ip_list' }
    ]}
>
<TabItem value="delete_anycast_ip_list">

Deletes an Anycast static IP list.

```sql
DELETE FROM aws.cloudfront.anycast_ip_lists
WHERE id = '{{ id }}' --required
AND `If-Match` = '{{ If-Match }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
