--- 
title: container_associations
hide_title: false
hide_table_of_contents: false
keywords:
  - container_associations
  - network_firewall
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

Creates, updates, deletes, gets or lists a <code>container_associations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="container_associations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="aws.network_firewall.container_associations" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="describe_container_association"
    values={[
        { label: 'describe_container_association', value: 'describe_container_association' },
        { label: 'list_container_associations', value: 'list_container_associations' }
    ]}
>
<TabItem value="describe_container_association">

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
    <td><CopyableCode code="container_association_arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the container association. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_association_name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the container association. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="container_monitoring_configurations" /></td>
    <td><code>array</code></td>
    <td>The monitoring configurations for the container association.</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>A description of the container association. (pattern: &lt;code&gt;^.*$&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="last_updated_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>The most recent time that Network Firewall updated the container association.</td>
</tr>
<tr>
    <td><CopyableCode code="resolved_cidr_count" /></td>
    <td><code>integer</code></td>
    <td>The number of CIDR blocks resolved from the monitored containers.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the container association. (ACTIVE, CREATING, DELETING, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>The key:value pairs to associate with the resource.</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The container type. Valid values: ECS - Amazon Elastic Container Service EKS - Amazon Elastic Kubernetes Service (ECS, EKS)</td>
</tr>
<tr>
    <td><CopyableCode code="update_token" /></td>
    <td><code>string</code></td>
    <td>A token used for optimistic locking. Network Firewall returns a token to your requests that access the container association. The token marks the state of the container association resource at the time of the request. To make changes to the container association, you provide the token in your request. Network Firewall uses the token to ensure that the container association hasn't changed since you last retrieved it. If it has changed, the operation fails with an InvalidTokenException. If this happens, retrieve the container association again to get a current copy of it with a current token. Reapply your changes as needed, then try the operation again using the new token. (pattern: &lt;code&gt;^(&#91;0-9a-f&#93;&#123;8&#125;)-(&#91;0-9a-f&#93;&#123;4&#125;-)&#123;3&#125;(&#91;0-9a-f&#93;&#123;12&#125;)$&lt;/code&gt;)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_container_associations">

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
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>The Amazon Resource Name (ARN) of the container association. (pattern: &lt;code&gt;^arn:aws.*&lt;/code&gt;)</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The descriptive name of the container association. (pattern: &lt;code&gt;^&#91;a-zA-Z0-9-&#93;+$&lt;/code&gt;)</td>
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
    <td><a href="#describe_container_association"><CopyableCode code="describe_container_association" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Retrieves the configuration and status of a container association.</td>
</tr>
<tr>
    <td><a href="#list_container_associations"><CopyableCode code="list_container_associations" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Lists the container associations in your account and Region. Use the NextToken parameter in subsequent requests to retrieve additional results.</td>
</tr>
<tr>
    <td><a href="#create_container_association"><CopyableCode code="create_container_association" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerAssociationName"><code>ContainerAssociationName</code></a>, <a href="#parameter-ContainerMonitoringConfigurations"><code>ContainerMonitoringConfigurations</code></a></td>
    <td></td>
    <td>Creates a Network Firewall container association. The association monitors container lifecycle events in your Amazon ECS or Amazon EKS clusters and resolves running container addresses for use in firewall rules.</td>
</tr>
<tr>
    <td><a href="#update_container_association"><CopyableCode code="update_container_association" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-ContainerMonitoringConfigurations"><code>ContainerMonitoringConfigurations</code></a>, <a href="#parameter-UpdateToken"><code>UpdateToken</code></a></td>
    <td></td>
    <td>Updates the monitoring configurations and description of a container association. You can't change the container type after creation. Provide an update token to enable optimistic concurrency control.</td>
</tr>
<tr>
    <td><a href="#delete_container_association"><CopyableCode code="delete_container_association" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Deletes a container association. The resource transitions to a DELETING state. Deletion is asynchronous - Network Firewall returns immediately while cleanup proceeds in the background. You can't delete a container association while a rule group references it.</td>
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
    defaultValue="describe_container_association"
    values={[
        { label: 'describe_container_association', value: 'describe_container_association' },
        { label: 'list_container_associations', value: 'list_container_associations' }
    ]}
>
<TabItem value="describe_container_association">

Retrieves the configuration and status of a container association.

```sql
SELECT
container_association_arn,
container_association_name,
container_monitoring_configurations,
description,
last_updated_time,
resolved_cidr_count,
status,
tags,
type,
update_token
FROM aws.network_firewall.container_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
<TabItem value="list_container_associations">

Lists the container associations in your account and Region. Use the NextToken parameter in subsequent requests to retrieve additional results.

```sql
SELECT
arn,
name
FROM aws.network_firewall.container_associations
WHERE region = '{{ region }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create_container_association"
    values={[
        { label: 'create_container_association', value: 'create_container_association' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create_container_association">

Creates a Network Firewall container association. The association monitors container lifecycle events in your Amazon ECS or Amazon EKS clusters and resolves running container addresses for use in firewall rules.

```sql
INSERT INTO aws.network_firewall.container_associations (
ContainerAssociationName,
Description,
Type,
ContainerMonitoringConfigurations,
Tags,
region
)
SELECT 
'{{ ContainerAssociationName }}' /* required */,
'{{ Description }}',
'{{ Type }}',
'{{ ContainerMonitoringConfigurations }}' /* required */,
'{{ Tags }}',
'{{ region }}'
RETURNING
container_association_arn,
container_association_name,
container_monitoring_configurations,
description,
status,
tags,
type,
update_token
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: container_associations
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the container_associations resource.
    - name: ContainerAssociationName
      value: "{{ ContainerAssociationName }}"
      description: |
        The descriptive name of the container association. You can't change the name of a container association after you create it.
    - name: Description
      value: "{{ Description }}"
      description: |
        A description of the container association.
    - name: Type
      value: "{{ Type }}"
      description: |
        The type of containers to monitor. You can't change the container type after creation. Valid values: ECS - Amazon Elastic Container Service EKS - Amazon Elastic Kubernetes Service
      valid_values: ['ECS', 'EKS']
    - name: ContainerMonitoringConfigurations
      description: |
        The monitoring configurations for the container association. Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters to narrow which containers are tracked.
      value:
        - ClusterArn: "{{ ClusterArn }}"
          AttributeFilters: "{{ AttributeFilters }}"
    - name: Tags
      description: |
        The key:value pairs to associate with the resource.
      value:
        - Key: "{{ Key }}"
          Value: "{{ Value }}"
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update_container_association"
    values={[
        { label: 'update_container_association', value: 'update_container_association' }
    ]}
>
<TabItem value="update_container_association">

Updates the monitoring configurations and description of a container association. You can't change the container type after creation. Provide an update token to enable optimistic concurrency control.

```sql
UPDATE aws.network_firewall.container_associations
SET 
ContainerAssociationName = '{{ ContainerAssociationName }}',
ContainerAssociationArn = '{{ ContainerAssociationArn }}',
Description = '{{ Description }}',
Type = '{{ Type }}',
ContainerMonitoringConfigurations = '{{ ContainerMonitoringConfigurations }}',
Tags = '{{ Tags }}',
UpdateToken = '{{ UpdateToken }}'
WHERE 
region = '{{ region }}' --required
AND ContainerMonitoringConfigurations = '{{ ContainerMonitoringConfigurations }}' --required
AND UpdateToken = '{{ UpdateToken }}' --required
RETURNING
container_association_arn,
container_association_name,
container_monitoring_configurations,
description,
status,
tags,
type,
update_token;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete_container_association"
    values={[
        { label: 'delete_container_association', value: 'delete_container_association' }
    ]}
>
<TabItem value="delete_container_association">

Deletes a container association. The resource transitions to a DELETING state. Deletion is asynchronous - Network Firewall returns immediately while cleanup proceeds in the background. You can't delete a container association while a rule group references it.

```sql
DELETE FROM aws.network_firewall.container_associations
WHERE region = '{{ region }}' --required
;
```
</TabItem>
</Tabs>
