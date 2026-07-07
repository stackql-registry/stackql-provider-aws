--- 
title: private_connections
hide_title: false
hide_table_of_contents: false
keywords:
  - private_connections
  - devops_agent
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
<tr><td><b>Id</b></td><td><CopyableCode code="aws.devops_agent.private_connections" /></td></tr>
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
    <td>Unique name for a Private Connection within an account. (pattern: &lt;code&gt;&#91;a-z0-9&#93;(&#91;a-z0-9-&#93;*&#91;a-z0-9&#93;)?&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="certificateExpiryTime" /></td>
    <td><code>string (date-time)</code></td>
    <td>The expiry time of the certificate associated with the Private Connection. Only present when a certificate is associated.</td>
</tr>
<tr>
    <td><CopyableCode code="hostAddress" /></td>
    <td><code>string</code></td>
    <td>IP address or DNS name of the target resource. Only present for service-managed Private Connections. (pattern: &lt;code&gt;&#91;a-zA-Z0-9.:\-&#93;+&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceConfigurationId" /></td>
    <td><code>string</code></td>
    <td>The Resource Configuration ARN. Only present for self-managed Private Connections. (pattern: &lt;code&gt;(arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourceconfiguration/rcfg-&#91;0-9a-z&#93;&#123;17&#125;|rcfg-&#91;0-9a-z&#93;&#123;17&#125;)&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="resourceGatewayId" /></td>
    <td><code>string</code></td>
    <td>The service-managed Resource Gateway ARN. Only present for service-managed Private Connections. (pattern: &lt;code&gt;arn:&#91;a-z0-9\-&#93;+:vpc-lattice:&#91;a-zA-Z0-9\-&#93;+:\d&#123;12&#125;:resourcegateway/rgw-&#91;0-9a-z&#93;&#123;17&#125;&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the Private Connection. (ACTIVE, CREATE_IN_PROGRESS, CREATE_FAILED, DELETE_IN_PROGRESS, DELETE_FAILED)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Tags associated with the Private Connection.</td>
</tr>
<tr>
    <td><CopyableCode code="type_" /></td>
    <td><code>string</code></td>
    <td>The type of the Private Connection. (SELF_MANAGED, SERVICE_MANAGED)</td>
</tr>
<tr>
    <td><CopyableCode code="vpcId" /></td>
    <td><code>string</code></td>
    <td>VPC identifier of the service-managed Resource Gateway. Only present for service-managed Private Connections. (pattern: &lt;code&gt;vpc-((&#91;0-9a-z&#93;&#123;8&#125;)|(&#91;0-9a-z&#93;&#123;17&#125;))&lt;/code&gt;)</td>
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
    <td><CopyableCode code="privateConnections" /></td>
    <td><code>array</code></td>
    <td>The list of Private Connections.</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves details of an existing Private Connection.</td>
</tr>
<tr>
    <td><a href="#list_private_connections"><CopyableCode code="list_private_connections" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists all Private Connections in the caller's account.</td>
</tr>
<tr>
    <td><a href="#create_private_connection"><CopyableCode code="create_private_connection" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-mode"><code>mode</code></a></td>
    <td></td>
    <td>Creates a Private Connection to a target resource.</td>
</tr>
<tr>
    <td><a href="#update_private_connection_certificate"><CopyableCode code="update_private_connection_certificate" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-certificate"><code>certificate</code></a></td>
    <td></td>
    <td>Updates the certificate associated with a Private Connection.</td>
</tr>
<tr>
    <td><a href="#delete_private_connection"><CopyableCode code="delete_private_connection" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a Private Connection. The deletion is asynchronous and returns DELETE_IN_PROGRESS status.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the Private Connection.</td>
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
    defaultValue="describe_private_connection"
    values={[
        { label: 'describe_private_connection', value: 'describe_private_connection' },
        { label: 'list_private_connections', value: 'list_private_connections' }
    ]}
>
<TabItem value="describe_private_connection">

Retrieves details of an existing Private Connection.

```sql
SELECT
name,
certificateExpiryTime,
hostAddress,
resourceConfigurationId,
resourceGatewayId,
status,
tags,
type_,
vpcId
FROM aws.devops_agent.private_connections
WHERE name = '{{ name }}' -- required
AND region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_private_connections">

Lists all Private Connections in the caller's account.

```sql
SELECT
privateConnections
FROM aws.devops_agent.private_connections
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

Creates a Private Connection to a target resource.

```sql
INSERT INTO aws.devops_agent.private_connections (
name,
mode,
tags,
region
)
SELECT 
'{{ name }}' /* required */,
'{{ mode }}' /* required */,
'{{ tags }}',
'{{ region }}'
RETURNING
name,
certificateExpiryTime,
hostAddress,
resourceConfigurationId,
resourceGatewayId,
status,
tags,
type_,
vpcId
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
    - name: name
      value: "{{ name }}"
      description: |
        Unique name for a Private Connection within an account.
    - name: mode
      description: |
        Private Connection mode — either service-managed or self-managed.
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
        selfManaged:
          resourceConfigurationId: "{{ resourceConfigurationId }}"
          certificate: "{{ certificate }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Map of tag keys to values.
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

Updates the certificate associated with a Private Connection.

```sql
UPDATE aws.devops_agent.private_connections
SET 
certificate = '{{ certificate }}'
WHERE 
name = '{{ name }}' --required
AND region = '{{ region }}' --required
AND certificate = '{{ certificate }}' --required
RETURNING
name,
certificateExpiryTime,
hostAddress,
resourceConfigurationId,
resourceGatewayId,
status,
type_,
vpcId;
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

Deletes a Private Connection. The deletion is asynchronous and returns DELETE_IN_PROGRESS status.

```sql
DELETE FROM aws.devops_agent.private_connections
WHERE name = '{{ name }}' --required
AND region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
