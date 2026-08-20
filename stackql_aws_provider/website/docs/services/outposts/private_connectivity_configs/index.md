--- 
title: private_connectivity_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - private_connectivity_configs
  - outposts
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

Creates, updates, deletes, gets or lists a <code>private_connectivity_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="private_connectivity_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.outposts.private_connectivity_configs" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_private_connectivity_config"
    values={[
        { label: 'get_private_connectivity_config', value: 'get_private_connectivity_config' }
    ]}
>
<TabItem value="get_private_connectivity_config">

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
    <td><CopyableCode code="private_connectivity_status" /></td>
    <td><code>string</code></td>
    <td>The status of private connectivity for the Outpost. Valid values are ENABLED and DISABLED. (ENABLED, DISABLED)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the provisioning role in your account that Amazon Web Services Outposts uses to establish the service link connection during Outpost installation. This field is present only when VPC endpoint-based provisioning is configured. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:iam::\d&#123;12&#125;:role\/&#91;a-zA-Z_0-9+=,.@\-_\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="role_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the service-linked role that Amazon Web Services Outposts creates and uses to provision and attach the network interfaces for private connectivity in your VPC. The role's permissions are scoped to the specific Outpost and VPC. (pattern: &lt;code&gt;^arn:aws(&#91;a-z-&#93;+)?:iam::\d&#123;12&#125;:role\/&#91;a-zA-Z_0-9+=,.@\-_\/&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_information_list" /></td>
    <td><code>array</code></td>
    <td>Information about the VPC used for private connectivity.</td>
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
    <td><a href="#get_private_connectivity_config"><CopyableCode code="get_private_connectivity_config" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Gets the private connectivity configuration for the specified Outpost.</td>
</tr>
<tr>
    <td><a href="#create_private_connectivity_config"><CopyableCode code="create_private_connectivity_config" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-outpost_id"><code>outpost_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-VpcInformationList"><code>VpcInformationList</code></a></td>
    <td></td>
    <td>Creates the private connectivity configuration for the specified Outpost. Private connectivity establishes a service link VPN connection between the Outpost and its home Amazon Web Services Region using a VPC and subnet that you specify, which allows the service link traffic to flow through your VPC and minimizes public internet exposure.</td>
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
<tr id="parameter-outpost_id">
    <td><CopyableCode code="outpost_id" /></td>
    <td><code>string</code></td>
    <td>The ID or ARN of the Outpost.</td>
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
    defaultValue="get_private_connectivity_config"
    values={[
        { label: 'get_private_connectivity_config', value: 'get_private_connectivity_config' }
    ]}
>
<TabItem value="get_private_connectivity_config">

Gets the private connectivity configuration for the specified Outpost.

```sql
SELECT
private_connectivity_status,
provisioning_role_arn,
role_arn,
vpc_information_list
FROM aws.outposts.private_connectivity_configs
WHERE outpost_id = '{{ outpost_id }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_private_connectivity_config"
    values={[
        { label: 'create_private_connectivity_config', value: 'create_private_connectivity_config' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_private_connectivity_config">

Creates the private connectivity configuration for the specified Outpost. Private connectivity establishes a service link VPN connection between the Outpost and its home Amazon Web Services Region using a VPC and subnet that you specify, which allows the service link traffic to flow through your VPC and minimizes public internet exposure.

```sql
INSERT INTO aws.outposts.private_connectivity_configs (
VpcInformationList,
outpost_id,
region
)
SELECT 
'{{ VpcInformationList }}' /* required */,
'{{ outpost_id }}',
'{{ region }}'
RETURNING
outpost_id,
private_connectivity_config
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: private_connectivity_configs
  props:
    - name: outpost_id
      value: "{{ outpost_id }}"
      description: Required parameter for the private_connectivity_configs resource.
    - name: region
      value: "{{ region }}"
      description: Required parameter for the private_connectivity_configs resource.
    - name: VpcInformationList
      value:
        - VpcId: "{{ VpcId }}"
          SubnetIds: "{{ SubnetIds }}"
          VpcEndpointId: "{{ VpcEndpointId }}"
`}</CodeBlock>

</TabItem>
</Tabs>
