--- 
title: vpc_attachments
hide_title: false
hide_table_of_contents: false
keywords:
  - vpc_attachments
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

Creates, updates, deletes, gets or lists a <code>vpc_attachments</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vpc_attachments" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.networkmanager.vpc_attachments" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_vpc_attachment"
    values={[
        { label: 'get_vpc_attachment', value: 'get_vpc_attachment' }
    ]}
>
<TabItem value="get_vpc_attachment">

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
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Describes the VPC options.</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_arns" /></td>
    <td><code>array</code></td>
    <td>The subnet ARNs.</td>
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
    <td><a href="#get_vpc_attachment"><CopyableCode code="get_vpc_attachment" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Returns information about a VPC attachment.</td>
</tr>
<tr>
    <td><a href="#create_vpc_attachment"><CopyableCode code="create_vpc_attachment" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-CoreNetworkId"><code>CoreNetworkId</code></a>, <a href="#parameter-VpcArn"><code>VpcArn</code></a>, <a href="#parameter-SubnetArns"><code>SubnetArns</code></a></td>
    <td></td>
    <td>Creates a VPC attachment on an edge location of a core network.</td>
</tr>
<tr>
    <td><a href="#update_vpc_attachment"><CopyableCode code="update_vpc_attachment" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-attachment_id"><code>attachment_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Updates a VPC attachment.</td>
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
    defaultValue="get_vpc_attachment"
    values={[
        { label: 'get_vpc_attachment', value: 'get_vpc_attachment' }
    ]}
>
<TabItem value="get_vpc_attachment">

Returns information about a VPC attachment.

```sql
SELECT
attachment,
options,
subnet_arns
FROM aws.networkmanager.vpc_attachments
WHERE attachment_id = '{{ attachment_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_vpc_attachment"
    values={[
        { label: 'create_vpc_attachment', value: 'create_vpc_attachment' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_vpc_attachment">

Creates a VPC attachment on an edge location of a core network.

```sql
INSERT INTO aws.networkmanager.vpc_attachments (
CoreNetworkId,
VpcArn,
SubnetArns,
Options,
RoutingPolicyLabel,
Tags,
ClientToken,
region
)
SELECT 
'{{ CoreNetworkId }}' /* required */,
'{{ VpcArn }}' /* required */,
'{{ SubnetArns }}' /* required */,
'{{ Options }}',
'{{ RoutingPolicyLabel }}',
'{{ Tags }}',
'{{ ClientToken }}',
'{{ region }}'
RETURNING
vpc_attachment
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vpc_attachments
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the vpc_attachments resource.
    - name: CoreNetworkId
      value: "{{ CoreNetworkId }}"
    - name: VpcArn
      value: "{{ VpcArn }}"
    - name: SubnetArns
      value:
        - "{{ SubnetArns }}"
    - name: Options
      description: |
        Describes the VPC options.
      value:
        Ipv6Support: {{ Ipv6Support }}
        ApplianceModeSupport: {{ ApplianceModeSupport }}
        DnsSupport: {{ DnsSupport }}
        SecurityGroupReferencingSupport: {{ SecurityGroupReferencingSupport }}
    - name: RoutingPolicyLabel
      value: "{{ RoutingPolicyLabel }}"
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
    defaultValue="update_vpc_attachment"
    values={[
        { label: 'update_vpc_attachment', value: 'update_vpc_attachment' }
    ]}
>
<TabItem value="update_vpc_attachment">

Updates a VPC attachment.

```sql
UPDATE aws.networkmanager.vpc_attachments
SET 
AddSubnetArns = '{{ AddSubnetArns }}',
RemoveSubnetArns = '{{ RemoveSubnetArns }}',
Options = '{{ Options }}'
WHERE 
attachment_id = '{{ attachment_id }}' --required
AND region = '{{ region }}' --required
RETURNING
vpc_attachment;
```
</TabItem>
</Tabs>
