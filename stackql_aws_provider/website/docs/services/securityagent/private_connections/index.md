--- 
title: private_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - private_connections
  - securityagent
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

Creates, updates, deletes, gets or lists a <code>private_connections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="private_connections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.securityagent.private_connections" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_private_connection"
    values={[
        { label: 'describe_private_connection', value: 'describe_private_connection' },
        { label: 'list_private_connections', value: 'list_private_connections' }
    ]}
>
<TabItem value="describe_private_connection">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of a private connection within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_expiry_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the connection's certificate expires, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_resolution" /></td>
    <td><code>string</code></td>
    <td>The DNS resolution mode for the resource gateway. (PUBLIC, IN_VPC)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>A message describing why the private connection entered a failed state, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="host_address" /></td>
    <td><code>string</code></td>
    <td>The IP address or DNS name of the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The identifier or ARN of the VPC Lattice resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The identifier or ARN of the VPC Lattice resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the private connection. (ACTIVE, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags attached to the private connection.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the private connection, indicating whether it is service-managed or self-managed. (SERVICE_MANAGED, SELF_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the VPC the resource gateway is created in.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_private_connections">

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The unique name of a private connection within your account.</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_expiry_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the connection's certificate expires, in UTC format.</td>
</tr>
<tr>
    <td><CopyableCode code="dns_resolution" /></td>
    <td><code>string</code></td>
    <td>The DNS resolution mode for the resource gateway. (PUBLIC, IN_VPC)</td>
</tr>
<tr>
    <td><CopyableCode code="failure_message" /></td>
    <td><code>string</code></td>
    <td>A message describing why the private connection entered a failed state, if applicable.</td>
</tr>
<tr>
    <td><CopyableCode code="host_address" /></td>
    <td><code>string</code></td>
    <td>The IP address or DNS name of the target resource.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_configuration_id" /></td>
    <td><code>string</code></td>
    <td>The identifier or ARN of the VPC Lattice resource configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="resource_gateway_id" /></td>
    <td><code>string</code></td>
    <td>The identifier or ARN of the VPC Lattice resource gateway.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the private connection. (ACTIVE, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>The tags attached to the private connection.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the private connection, indicating whether it is service-managed or self-managed. (SERVICE_MANAGED, SELF_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpc_id" /></td>
    <td><code>string</code></td>
    <td>The identifier of the VPC the resource gateway is created in.</td>
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
    <td><a href="#describe_private_connection"><CopyableCode code="describe_private_connection" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the details of a private connection.</td>
</tr>
<tr>
    <td><a href="#list_private_connections"><CopyableCode code="list_private_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the private connections in your account.</td>
</tr>
<tr>
    <td><a href="#create_private_connection"><CopyableCode code="create_private_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-privateConnectionName"><code>privateConnectionName</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td></td>
    <td>Creates a private connection for reaching a self-hosted provider instance over private networking using Amazon VPC Lattice.</td>
</tr>
<tr>
    <td><a href="#update_private_connection_certificate"><CopyableCode code="update_private_connection_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-privateConnectionName"><code>privateConnectionName</code></a>, <a href="#parameter-certificate"><code>certificate</code></a></td>
    <td></td>
    <td>Updates the certificate associated with a private connection. Certificates can be added or replaced but not removed.</td>
</tr>
<tr>
    <td><a href="#delete_private_connection"><CopyableCode code="delete_private_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a private connection.</td>
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
    defaultValue="describe_private_connection"
    values={[
        { label: 'describe_private_connection', value: 'describe_private_connection' },
        { label: 'list_private_connections', value: 'list_private_connections' }
    ]}
>
<TabItem value="describe_private_connection">

Retrieves the details of a private connection.

```sql
SELECT
name,
certificate_expiry_time,
dns_resolution,
failure_message,
host_address,
resource_configuration_id,
resource_gateway_id,
status,
tags,
type_,
vpc_id
FROM aws.securityagent.private_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_private_connections">

Lists the private connections in your account.

```sql
SELECT
name,
certificate_expiry_time,
dns_resolution,
failure_message,
host_address,
resource_configuration_id,
resource_gateway_id,
status,
tags,
type_,
vpc_id
FROM aws.securityagent.private_connections
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_private_connection"
    values={[
        { label: 'create_private_connection', value: 'create_private_connection' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_private_connection">

Creates a private connection for reaching a self-hosted provider instance over private networking using Amazon VPC Lattice.

```sql
INSERT INTO aws.securityagent.private_connections (
privateConnectionName,
mode,
tags,
region
)
SELECT 
'{{ privateConnectionName }}' /* required */,
'{{ mode }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
name,
certificate_expiry_time,
dns_resolution,
failure_message,
host_address,
resource_configuration_id,
resource_gateway_id,
status,
tags,
type_,
vpc_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: private_connections
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the private_connections resource.
    - name: privateConnectionName
      value: "{{ privateConnectionName }}"
      description: |
        The unique name of a private connection within your account.
    - name: mode
      description: |
        The configuration for a private connection. Specify either a service-managed or a self-managed mode.
      value:
        serviceManaged:
          hostAddress: "{{ hostAddress }}"
          vpcId: "{{ vpcId }}"
          subnetIds:
            - "{{ subnetIds }}"
          securityGroupIds:
            - "{{ securityGroupIds }}"
          ipAddressType: "{{ ipAddressType }}"
          ipv4AddressesPerEni: {{ ipv4AddressesPerEni }}
          portRanges:
            - "{{ portRanges }}"
          certificate: "{{ certificate }}"
          dnsResolution: "{{ dnsResolution }}"
        selfManaged:
          resourceConfigurationId: "{{ resourceConfigurationId }}"
          certificate: "{{ certificate }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tags for a resource.
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_private_connection_certificate"
    values={[
        { label: 'update_private_connection_certificate', value: 'update_private_connection_certificate' }
    ]}
>
<TabItem value="update_private_connection_certificate">

Updates the certificate associated with a private connection. Certificates can be added or replaced but not removed.

```sql
UPDATE aws.securityagent.private_connections
SET 
privateConnectionName = '{{ privateConnectionName }}',
certificate = '{{ certificate }}'
WHERE 
region = '{{ region }}' --required
AND privateConnectionName = '{{ privateConnectionName }}' --required
AND certificate = '{{ certificate }}' --required
RETURNING
name,
certificate_expiry_time,
dns_resolution,
failure_message,
host_address,
resource_configuration_id,
resource_gateway_id,
status,
tags,
type_,
vpc_id;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_private_connection"
    values={[
        { label: 'delete_private_connection', value: 'delete_private_connection' }
    ]}
>
<TabItem value="delete_private_connection">

Deletes a private connection.

```sql
DELETE FROM aws.securityagent.private_connections
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
