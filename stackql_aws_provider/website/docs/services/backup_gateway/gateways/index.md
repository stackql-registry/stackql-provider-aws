--- 
title: gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - gateways
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

Creates, updates, deletes, gets or lists a <code>gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.backup_gateway.gateways" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get_gateway"
    values={[
        { label: 'get_gateway', value: 'get_gateway' },
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="get_gateway">

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
    <td><CopyableCode code="DeprecationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date after which this gateway will not receive software updates for new features and bug fixes.</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):backup-gateway(:&#91;a-zA-Z-0-9&#93;+)&#123;3&#125;\/&#91;a-zA-Z-0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the gateway. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayType" /></td>
    <td><code>string</code></td>
    <td>The type of the gateway type. (BACKUP_VM)</td>
</tr>
<tr>
    <td><CopyableCode code="HypervisorId" /></td>
    <td><code>string</code></td>
    <td>The hypervisor ID of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="LastSeenTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Details showing the last time Backup gateway communicated with the cloud, in Unix format and UTC time.</td>
</tr>
<tr>
    <td><CopyableCode code="MaintenanceStartTime" /></td>
    <td><code>object</code></td>
    <td>Returns your gateway's weekly maintenance start time including the day and time of the week. Note that values are in terms of the gateway's time zone. Can be weekly or monthly.</td>
</tr>
<tr>
    <td><CopyableCode code="NextUpdateAvailabilityTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>Details showing the next update availability time of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="SoftwareVersion" /></td>
    <td><code>string</code></td>
    <td>The version number of the software running on the gateway appliance. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="VpcEndpoint" /></td>
    <td><code>string</code></td>
    <td>The DNS name for the virtual private cloud (VPC) endpoint the gateway uses to connect to the cloud for backup gateway.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_gateways">

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
    <td><CopyableCode code="GatewayArn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the gateway. Use the ListGateways operation to return a list of gateways for your account and Amazon Web Services Region. (pattern: &lt;code&gt;arn:(aws|aws-cn|aws-us-gov):backup-gateway(:&#91;a-zA-Z-0-9&#93;+)&#123;3&#125;\/&#91;a-zA-Z-0-9&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayDisplayName" /></td>
    <td><code>string</code></td>
    <td>The display name of the gateway. (pattern: &lt;code&gt;&#91;a-zA-Z0-9-&#93;*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="GatewayType" /></td>
    <td><code>string</code></td>
    <td>The type of the gateway. (BACKUP_VM)</td>
</tr>
<tr>
    <td><CopyableCode code="HypervisorId" /></td>
    <td><code>string</code></td>
    <td>The hypervisor ID of the gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="LastSeenTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time Backup gateway communicated with the gateway, in Unix format and UTC time.</td>
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
    <td><a href="#get_gateway"><CopyableCode code="get_gateway" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>By providing the ARN (Amazon Resource Name), this API returns the gateway.</td>
</tr>
<tr>
    <td><a href="#list_gateways"><CopyableCode code="list_gateways" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).</td>
</tr>
<tr>
    <td><a href="#create_gateway"><CopyableCode code="create_gateway" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ActivationKey"><code>ActivationKey</code></a>, <a href="#parameter-GatewayDisplayName"><code>GatewayDisplayName</code></a>, <a href="#parameter-GatewayType"><code>GatewayType</code></a></td>
    <td></td>
    <td>Creates a backup gateway. After you create a gateway, you can associate it with a server using the AssociateGatewayToServer operation.</td>
</tr>
<tr>
    <td><a href="#associate_gateway_to_server"><CopyableCode code="associate_gateway_to_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayArn"><code>GatewayArn</code></a>, <a href="#parameter-ServerArn"><code>ServerArn</code></a></td>
    <td></td>
    <td>Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.</td>
</tr>
<tr>
    <td><a href="#disassociate_gateway_from_server"><CopyableCode code="disassociate_gateway_from_server" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayArn"><code>GatewayArn</code></a></td>
    <td></td>
    <td>Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.</td>
</tr>
<tr>
    <td><a href="#put_maintenance_start_time"><CopyableCode code="put_maintenance_start_time" /></a></td>
    <td><CopyableCode code="replace" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayArn"><code>GatewayArn</code></a>, <a href="#parameter-HourOfDay"><code>HourOfDay</code></a>, <a href="#parameter-MinuteOfHour"><code>MinuteOfHour</code></a></td>
    <td></td>
    <td>Set the maintenance start time for a gateway.</td>
</tr>
<tr>
    <td><a href="#delete_gateway"><CopyableCode code="delete_gateway" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a backup gateway.</td>
</tr>
<tr>
    <td><a href="#update_gateway_information"><CopyableCode code="update_gateway_information" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayArn"><code>GatewayArn</code></a></td>
    <td></td>
    <td>Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.</td>
</tr>
<tr>
    <td><a href="#update_gateway_software_now"><CopyableCode code="update_gateway_software_now" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-GatewayArn"><code>GatewayArn</code></a></td>
    <td></td>
    <td>Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete.</td>
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
    defaultValue="get_gateway"
    values={[
        { label: 'get_gateway', value: 'get_gateway' },
        { label: 'list_gateways', value: 'list_gateways' }
    ]}
>
<TabItem value="get_gateway">

By providing the ARN (Amazon Resource Name), this API returns the gateway.

```sql
SELECT
DeprecationDate,
GatewayArn,
GatewayDisplayName,
GatewayType,
HypervisorId,
LastSeenTime,
MaintenanceStartTime,
NextUpdateAvailabilityTime,
SoftwareVersion,
VpcEndpoint
FROM aws.backup_gateway.gateways
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_gateways">

Lists backup gateways owned by an Amazon Web Services account in an Amazon Web Services Region. The returned list is ordered by gateway Amazon Resource Name (ARN).

```sql
SELECT
GatewayArn,
GatewayDisplayName,
GatewayType,
HypervisorId,
LastSeenTime
FROM aws.backup_gateway.gateways
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_gateway"
    values={[
        { label: 'create_gateway', value: 'create_gateway' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_gateway">

Creates a backup gateway. After you create a gateway, you can associate it with a server using the AssociateGatewayToServer operation.

```sql
INSERT INTO aws.backup_gateway.gateways (
ActivationKey,
GatewayDisplayName,
GatewayType,
Tags,
region
)
SELECT 
'{{ ActivationKey }}' /* required */,
'{{ GatewayDisplayName }}' /* required */,
'{{ GatewayType }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
GatewayArn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: gateways
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the gateways resource.
    - name: ActivationKey
      value: "{{ ActivationKey }}"
      description: |
        The activation key of the created gateway.
    - name: GatewayDisplayName
      value: "{{ GatewayDisplayName }}"
      description: |
        The display name of the created gateway.
    - name: GatewayType
      value: "{{ GatewayType }}"
      description: |
        The type of created gateway.
      valid_values: ['BACKUP_VM']
    - name: Tags
      description: |
        A list of up to 50 tags to assign to the gateway. Each tag is a key-value pair.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="associate_gateway_to_server"
    values={[
        { label: 'associate_gateway_to_server', value: 'associate_gateway_to_server' },
        { label: 'disassociate_gateway_from_server', value: 'disassociate_gateway_from_server' }
    ]}
>
<TabItem value="associate_gateway_to_server">

Associates a backup gateway with your server. After you complete the association process, you can back up and restore your VMs through the gateway.

```sql
UPDATE aws.backup_gateway.gateways
SET 
GatewayArn = '{{ GatewayArn }}',
ServerArn = '{{ ServerArn }}'
WHERE 
region = '{{ region }}' --required
AND GatewayArn = '{{ GatewayArn }}' --required
AND ServerArn = '{{ ServerArn }}' --required
RETURNING
GatewayArn;
```
</TabItem>
<TabItem value="disassociate_gateway_from_server">

Disassociates a backup gateway from the specified server. After the disassociation process finishes, the gateway can no longer access the virtual machines on the server.

```sql
UPDATE aws.backup_gateway.gateways
SET 
GatewayArn = '{{ GatewayArn }}'
WHERE 
region = '{{ region }}' --required
AND GatewayArn = '{{ GatewayArn }}' --required
RETURNING
GatewayArn;
```
</TabItem>
</Tabs>


## `REPLACE` examples

<Tabs
    defaultValue="put_maintenance_start_time"
    values={[
        { label: 'put_maintenance_start_time', value: 'put_maintenance_start_time' }
    ]}
>
<TabItem value="put_maintenance_start_time">

Set the maintenance start time for a gateway.

```sql
REPLACE aws.backup_gateway.gateways
SET 
GatewayArn = '{{ GatewayArn }}',
HourOfDay = {{ HourOfDay }},
MinuteOfHour = {{ MinuteOfHour }},
DayOfWeek = {{ DayOfWeek }},
DayOfMonth = {{ DayOfMonth }}
WHERE 
region = '{{ region }}' --required
AND GatewayArn = '{{ GatewayArn }}' --required
AND HourOfDay = '{{ HourOfDay }}' --required
AND MinuteOfHour = '{{ MinuteOfHour }}' --required
RETURNING
GatewayArn;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_gateway"
    values={[
        { label: 'delete_gateway', value: 'delete_gateway' }
    ]}
>
<TabItem value="delete_gateway">

Deletes a backup gateway.

```sql
DELETE FROM aws.backup_gateway.gateways
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

<Tabs
    defaultValue="update_gateway_information"
    values={[
        { label: 'update_gateway_information', value: 'update_gateway_information' },
        { label: 'update_gateway_software_now', value: 'update_gateway_software_now' }
    ]}
>
<TabItem value="update_gateway_information">

Updates a gateway's name. Specify which gateway to update using the Amazon Resource Name (ARN) of the gateway in your request.

```sql
EXEC aws.backup_gateway.gateways.update_gateway_information 
@region='{{ region }}' --required 
@@json=
'{
"GatewayArn": "{{ GatewayArn }}", 
"GatewayDisplayName": "{{ GatewayDisplayName }}"
}'
;
```
</TabItem>
<TabItem value="update_gateway_software_now">

Updates the gateway virtual machine (VM) software. The request immediately triggers the software update. When you make this request, you get a 200 OK success response immediately. However, it might take some time for the update to complete.

```sql
EXEC aws.backup_gateway.gateways.update_gateway_software_now 
@region='{{ region }}' --required 
@@json=
'{
"GatewayArn": "{{ GatewayArn }}"
}'
;
```
</TabItem>
</Tabs>
