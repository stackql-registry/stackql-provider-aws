--- 
title: direct_connect_gateway_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - direct_connect_gateway_attachments
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

Creates, updates, deletes, gets or lists a <code>direct_connect_gateway_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="direct_connect_gateway_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.direct_connect_gateway_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_direct_connect_gateway_attachment"
    values={[
        { label: 'get_direct_connect_gateway_attachment', value: 'get_direct_connect_gateway_attachment' }
    ]}
>
<TabItem value="get_direct_connect_gateway_attachment">

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
    <td>Describes a core network attachment.</td>
</tr>
<tr>
    <td><CopyableCode code="direct_connect_gateway_arn" /></td>
    <td><code>string</code></td>
    <td>The Direct Connect gateway attachment ARN. (pattern: &lt;code&gt;^arn:&#91;^:&#93;&#123;1,63&#125;:directconnect::&#91;^:&#93;&#123;0,63&#125;:dx-gateway\/&#91;0-9a-f&#93;&#123;8&#125;-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;&#91;0-9a-f&#93;&#123;12&#125;$&lt;/code&gt;)</td>
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
    <td><a href="#get_direct_connect_gateway_attachment"><CopyableCode code="get_direct_connect_gateway_attachment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a specific Amazon Web Services Direct Connect gateway attachment.</td>
</tr>
<tr>
    <td><a href="#create_direct_connect_gateway_attachment"><CopyableCode code="create_direct_connect_gateway_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CoreNetworkId"><code>CoreNetworkId</code></a>, <a href="#parameter-DirectConnectGatewayArn"><code>DirectConnectGatewayArn</code></a>, <a href="#parameter-EdgeLocations"><code>EdgeLocations</code></a></td>
    <td></td>
    <td>Creates an Amazon Web Services Direct Connect gateway attachment</td>
</tr>
<tr>
    <td><a href="#update_direct_connect_gateway_attachment"><CopyableCode code="update_direct_connect_gateway_attachment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates the edge locations associated with an Amazon Web Services Direct Connect gateway attachment.</td>
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
    <td>The ID of the Direct Connect gateway attachment for the updated edge locations.</td>
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
    defaultValue="get_direct_connect_gateway_attachment"
    values={[
        { label: 'get_direct_connect_gateway_attachment', value: 'get_direct_connect_gateway_attachment' }
    ]}
>
<TabItem value="get_direct_connect_gateway_attachment">

Returns information about a specific Amazon Web Services Direct Connect gateway attachment.

```sql
SELECT
attachment,
direct_connect_gateway_arn
FROM aws.networkmanager.direct_connect_gateway_attachments
WHERE attachment_id = '{{ attachment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_direct_connect_gateway_attachment"
    values={[
        { label: 'create_direct_connect_gateway_attachment', value: 'create_direct_connect_gateway_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_direct_connect_gateway_attachment">

Creates an Amazon Web Services Direct Connect gateway attachment

```sql
INSERT INTO aws.networkmanager.direct_connect_gateway_attachments (
CoreNetworkId,
DirectConnectGatewayArn,
RoutingPolicyLabel,
EdgeLocations,
Tags,
ClientToken,
region
)
SELECT 
'{{ CoreNetworkId }}' /* required */,
'{{ DirectConnectGatewayArn }}' /* required */,
'{{ RoutingPolicyLabel }}',
'{{ EdgeLocations }}' /* required */,
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
direct_connect_gateway_attachment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: direct_connect_gateway_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the direct_connect_gateway_attachments resource.
    - name: CoreNetworkId
      value: "{{ CoreNetworkId }}"
    - name: DirectConnectGatewayArn
      value: "{{ DirectConnectGatewayArn }}"
    - name: RoutingPolicyLabel
      value: "{{ RoutingPolicyLabel }}"
    - name: EdgeLocations
      value:
        - "{{ EdgeLocations }}"
    - name: Tags
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
    - name: ClientToken
      value: "{{ ClientToken }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_direct_connect_gateway_attachment"
    values={[
        { label: 'update_direct_connect_gateway_attachment', value: 'update_direct_connect_gateway_attachment' }
    ]}
>
<TabItem value="update_direct_connect_gateway_attachment">

Updates the edge locations associated with an Amazon Web Services Direct Connect gateway attachment.

```sql
UPDATE aws.networkmanager.direct_connect_gateway_attachments
SET 
EdgeLocations = '{{ EdgeLocations }}'
WHERE 
attachment_id = '{{ attachment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
direct_connect_gateway_attachment;
```
</TabItem>
</Tabs>
