--- 
title: connect_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - connect_attachments
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

Creates, updates, deletes, gets or lists a <code>connect_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="connect_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.connect_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_connect_attachment"
    values={[
        { label: 'get_connect_attachment', value: 'get_connect_attachment' }
    ]}
>
<TabItem value="get_connect_attachment">

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
    <td><CopyableCode code="attachment" /></td>
    <td><code>object</code></td>
    <td>The attachment details.</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Describes a core network Connect attachment options.</td>
</tr>
<tr>
    <td><CopyableCode code="transport_attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the transport attachment. (pattern: &lt;code&gt;^attachment-(&#91;0-9a-f&#93;&#123;8,17&#125;)$&lt;/code&gt;)</td>
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
    <td><a href="#get_connect_attachment"><CopyableCode code="get_connect_attachment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a core network Connect attachment.</td>
</tr>
<tr>
    <td><a href="#create_connect_attachment"><CopyableCode code="create_connect_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CoreNetworkId"><code>CoreNetworkId</code></a>, <a href="#parameter-EdgeLocation"><code>EdgeLocation</code></a>, <a href="#parameter-TransportAttachmentId"><code>TransportAttachmentId</code></a>, <a href="#parameter-Options"><code>Options</code></a></td>
    <td></td>
    <td>Creates a core network Connect attachment from a specified core network attachment. A core network Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a core network and an appliance. A core network Connect attachment uses an existing VPC attachment as the underlying transport mechanism.</td>
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
<tr id="parameter-attachment_id">
    <td><CopyableCode code="attachment_id" /></td>
    <td><code>string</code></td>
    <td>The ID of the attachment.</td>
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
    defaultValue="get_connect_attachment"
    values={[
        { label: 'get_connect_attachment', value: 'get_connect_attachment' }
    ]}
>
<TabItem value="get_connect_attachment">

Returns information about a core network Connect attachment.

```sql
SELECT
attachment,
options,
transport_attachment_id
FROM aws.networkmanager.connect_attachments
WHERE attachment_id = '{{ attachment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_connect_attachment"
    values={[
        { label: 'create_connect_attachment', value: 'create_connect_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_connect_attachment">

Creates a core network Connect attachment from a specified core network attachment. A core network Connect attachment is a GRE-based tunnel attachment that you can use to establish a connection between a core network and an appliance. A core network Connect attachment uses an existing VPC attachment as the underlying transport mechanism.

```sql
INSERT INTO aws.networkmanager.connect_attachments (
CoreNetworkId,
EdgeLocation,
TransportAttachmentId,
RoutingPolicyLabel,
Options,
Tags,
ClientToken,
region
)
SELECT 
'{{ CoreNetworkId }}' /* required */,
'{{ EdgeLocation }}' /* required */,
'{{ TransportAttachmentId }}' /* required */,
'{{ RoutingPolicyLabel }}',
'{{ Options }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
connect_attachment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: connect_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the connect_attachments resource.
    - name: CoreNetworkId
      value: "{{ CoreNetworkId }}"
    - name: EdgeLocation
      value: "{{ EdgeLocation }}"
    - name: TransportAttachmentId
      value: "{{ TransportAttachmentId }}"
    - name: RoutingPolicyLabel
      value: "{{ RoutingPolicyLabel }}"
    - name: Options
      description: |
        Describes a core network Connect attachment options.
      value:
        Protocol: "{{ Protocol }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>
