--- 
title: ssh_public_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - ssh_public_keys
  - ec2_instance_connect
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

Creates, updates, deletes, gets or lists a <code>ssh_public_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssh_public_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.ec2_instance_connect.ssh_public_keys" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

`SELECT` not supported for this resource, use `SHOW METHODS` to view available operations for the resource.


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
    <td><a href="#send_ssh_public_key"><CopyableCode code="send_ssh_public_key" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-InstanceId"><code>InstanceId</code></a>, <a href="#parameter-InstanceOSUser"><code>InstanceOSUser</code></a>, <a href="#parameter-SSHPublicKey"><code>SSHPublicKey</code></a></td>
    <td></td>
    <td>Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see Connect to your Linux instance using EC2 Instance Connect in the Amazon EC2 User Guide.</td>
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

## Lifecycle Methods

<Tabs
    defaultValue="send_ssh_public_key"
    values={[
        { label: 'send_ssh_public_key', value: 'send_ssh_public_key' }
    ]}
>
<TabItem value="send_ssh_public_key">

Pushes an SSH public key to the specified EC2 instance for use by the specified user. The key remains for 60 seconds. For more information, see Connect to your Linux instance using EC2 Instance Connect in the Amazon EC2 User Guide.

```sql
EXEC aws.ec2_instance_connect.ssh_public_keys.send_ssh_public_key 
@region='{{ region }}' --required 
@@json=
'{
"InstanceId": "{{ InstanceId }}", 
"InstanceOSUser": "{{ InstanceOSUser }}", 
"SSHPublicKey": "{{ SSHPublicKey }}", 
"AvailabilityZone": "{{ AvailabilityZone }}"
}'
;
```
</TabItem>
</Tabs>
