--- 
title: hypervisors
hide_title: false
hide_table_of_contents: false
keywords:
  - hypervisors
  - backup_gateway
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

Creates, updates, deletes, gets or lists a <code>hypervisors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hypervisors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup_gateway.hypervisors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_hypervisor"
    values={[
        { label: 'get_hypervisor', value: 'get_hypervisor' },
        { label: 'list_hypervisors', value: 'list_hypervisors' }
    ]}
>
<TabItem value="get_hypervisor">

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
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>The server host of the hypervisor. This can be either an IP address or a fully-qualified domain name (FQDN). (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hypervisor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the hypervisor. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):backup-gateway(:&#91;a-zA-Z-0-9&#93;+)&#123;3&#125;\/&#91;a-zA-Z-0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the KMS used to encrypt the hypervisor. (pattern: &lt;code&gt;(^arn:(aws|aws-cn|aws-us-gov):kms:(&#91;a-zA-Z0-9-&#93;+):(&#91;0-9&#93;+):(key|alias)/(\S+)$)|(^alias/(\S+)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_successful_metadata_sync_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>This is the time when the most recent successful sync of metadata occurred.</td>
</tr>
<tr>
    <td><CopyableCode code="latest_metadata_sync_status" /></td>
    <td><code>string</code></td>
    <td>This is the most recent status for the indicated metadata sync. (CREATED, RUNNING, FAILED, PARTIALLY_FAILED, SUCCEEDED)</td>
</tr>
<tr>
    <td><CopyableCode code="latest_metadata_sync_status_message" /></td>
    <td><code>string</code></td>
    <td>This is the most recent status for the indicated metadata sync.</td>
</tr>
<tr>
    <td><CopyableCode code="log_group_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the group of gateways within the requested log. (pattern: &lt;code&gt;$|^arn:(aws|aws-cn|aws-us-gov):logs:(&#91;a-zA-Z0-9-&#93;+):(&#91;0-9&#93;+):log-group:&#91;a-zA-Z0-9_\-\/\.&#93;+:\*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>This is the name of the specified hypervisor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>This is the current state of the specified hypervisor. The possible states are PENDING, ONLINE, OFFLINE, or ERROR. (PENDING, ONLINE, OFFLINE, ERROR)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_hypervisors">

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
    <td><CopyableCode code="host" /></td>
    <td><code>string</code></td>
    <td>The server host of the hypervisor. This can be either an IP address or a fully-qualified domain name (FQDN). (pattern: &lt;code&gt;.+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="hypervisor_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the hypervisor. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):backup-gateway(:&#91;a-zA-Z-0-9&#93;+)&#123;3&#125;\/&#91;a-zA-Z-0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="kms_key_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the Key Management Service used to encrypt the hypervisor. (pattern: &lt;code&gt;(^arn:(aws|aws-cn|aws-us-gov):kms:(&#91;a-zA-Z0-9-&#93;+):(&#91;0-9&#93;+):(key|alias)/(\S+)$)|(^alias/(\S+)$)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the hypervisor. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>The state of the hypervisor. (PENDING, ONLINE, OFFLINE, ERROR)</td>
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
    <td><a href="#get_hypervisor"><CopyableCode code="get_hypervisor" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.</td>
</tr>
<tr>
    <td><a href="#list_hypervisors"><CopyableCode code="list_hypervisors" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists your hypervisors.</td>
</tr>
<tr>
    <td><a href="#update_hypervisor"><CopyableCode code="update_hypervisor" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-HypervisorArn"><code>HypervisorArn</code></a></td>
    <td></td>
    <td>Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.</td>
</tr>
<tr>
    <td><a href="#delete_hypervisor"><CopyableCode code="delete_hypervisor" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a hypervisor.</td>
</tr>
<tr>
    <td><a href="#import_hypervisor_configuration"><CopyableCode code="import_hypervisor_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Connect to a hypervisor by importing its configuration.</td>
</tr>
<tr>
    <td><a href="#test_hypervisor_configuration"><CopyableCode code="test_hypervisor_configuration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayArn"><code>GatewayArn</code></a></td>
    <td></td>
    <td>Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.</td>
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
    defaultValue="get_hypervisor"
    values={[
        { label: 'get_hypervisor', value: 'get_hypervisor' },
        { label: 'list_hypervisors', value: 'list_hypervisors' }
    ]}
>
<TabItem value="get_hypervisor">

This action requests information about the specified hypervisor to which the gateway will connect. A hypervisor is hardware, software, or firmware that creates and manages virtual machines, and allocates resources to them.

```sql
SELECT
host,
hypervisor_arn,
kms_key_arn,
last_successful_metadata_sync_time,
latest_metadata_sync_status,
latest_metadata_sync_status_message,
log_group_arn,
name,
state
FROM aws.backup_gateway.hypervisors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_hypervisors">

Lists your hypervisors.

```sql
SELECT
host,
hypervisor_arn,
kms_key_arn,
name,
state
FROM aws.backup_gateway.hypervisors
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_hypervisor"
    values={[
        { label: 'update_hypervisor', value: 'update_hypervisor' }
    ]}
>
<TabItem value="update_hypervisor">

Updates a hypervisor metadata, including its host, username, and password. Specify which hypervisor to update using the Amazon Resource Name (ARN) of the hypervisor in your request.

```sql
UPDATE aws.backup_gateway.hypervisors
SET 
HypervisorArn = '{{ HypervisorArn }}',
Host = '{{ Host }}',
Username = '{{ Username }}',
Password = '{{ Password }}',
Name = '{{ Name }}',
LogGroupArn = '{{ LogGroupArn }}'
WHERE 
region = '{{ region }}' --required
AND HypervisorArn = '{{ HypervisorArn }}' --required
RETURNING
hypervisor_arn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_hypervisor"
    values={[
        { label: 'delete_hypervisor', value: 'delete_hypervisor' }
    ]}
>
<TabItem value="delete_hypervisor">

Deletes a hypervisor.

```sql
DELETE FROM aws.backup_gateway.hypervisors
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="import_hypervisor_configuration"
    values={[
        { label: 'import_hypervisor_configuration', value: 'import_hypervisor_configuration' },
        { label: 'test_hypervisor_configuration', value: 'test_hypervisor_configuration' }
    ]}
>
<TabItem value="import_hypervisor_configuration">

Connect to a hypervisor by importing its configuration.

```sql
EXEC aws.backup_gateway.hypervisors.import_hypervisor_configuration 
@region='{{ region }}' --required 
@@json=
'{
"Name": "{{ Name }}", 
"Host": "{{ Host }}", 
"Username": "{{ Username }}", 
"Password": "{{ Password }}", 
"KmsKeyArn": "{{ KmsKeyArn }}", 
"Tags": "{{ Tags }}"
}'
;
```
</TabItem>
<TabItem value="test_hypervisor_configuration">

Tests your hypervisor configuration to validate that backup gateway can connect with the hypervisor and its resources.

```sql
EXEC aws.backup_gateway.hypervisors.test_hypervisor_configuration 
@region='{{ region }}' --required 
@@json=
'{
"GatewayArn": "{{ GatewayArn }}", 
"Host": "{{ Host }}", 
"Username": "{{ Username }}", 
"Password": "{{ Password }}"
}'
;
```
</TabItem>
</Tabs>
